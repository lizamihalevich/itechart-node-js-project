import { createReducer } from '@reduxjs/toolkit';
import moment from 'moment';
import {
  setTeamData,
  setStandings,
  setStandingsRange,
  setTotalSquadNumber,
  setCurrentSquadPage,
  setCurrentSquadList,
  setCurrentStandingsPage,
  setCurrentStandingsList,
  setTotalStandingsNumber
} from '../actions';

const teamReducer = createReducer(
  {
    teamData: [],
    squad: [],
    standings: [],
    standingsRange: [
      moment().format(),
      moment()
        .add(2, 'w')
        .format()
    ],
    totalSquadNumber: 1,
    currentSquadPage: 1,
    currentSquadList: [],
    totalStandingsNumber: 1,
    currentStandingsPage: 1,
    currentStandingsList: []
  },
  {
    [setTeamData]: (state, action) => {
      state.teamData = action.payload;
      state.squad = action.payload.squad;
    },

    [setStandings]: (state, action) => {
      state.standings = action.payload;
    },

    [setStandingsRange]: (state, action) => {
      state.standingsRange = action.payload;
    },

    [setCurrentSquadPage]: (state, action) => {
      state.currentSquadPage = action.payload;
    },

    [setTotalSquadNumber]: (state, action) => {
      state.totalSquadNumber = action.payload;
    },

    [setCurrentSquadList]: (state, action) => {
      state.currentSquadList = action.payload;
    },

    [setCurrentStandingsPage]: (state, action) => {
      state.currentStandingsPage = action.payload;
    },

    [setCurrentStandingsList]: (state, action) => {
      state.currentStandingsList = action.payload;
    },

    [setTotalStandingsNumber]: (state, action) => {
      state.totalStandingsNumber = action.payload;
    }
  }
);

export default teamReducer;

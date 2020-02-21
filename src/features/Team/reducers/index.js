import { createReducer } from '@reduxjs/toolkit';
import moment from 'moment';
import {
  successPlayersInfo,
  requestPlayersInfo,
  failLoadPlayersInfo,
  successStandingsInfo,
  requestStandingsInfo,
  failLoadStandingsInfo,
  setStandingsRange,
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
    currentStandingsList: [],
    playersIsLoading: false,
    playersIsFailed: false,
    standingsIsLoading: false,
    standingsIsFailed: false
  },
  {
    [successPlayersInfo]: (state, action) => {
      state.teamData = action.payload.team;
      state.squad = action.payload.squad;
      state.totalSquadNumber = action.payload.total;
      state.playersIsLoading = false;
    },

    [requestPlayersInfo]: state => {
      state.playersIsLoading = true;
    },

    [failLoadPlayersInfo]: state => {
      state.playersIsFailed = true;
      state.playersIsLoading = false;
    },

    [successStandingsInfo]: (state, action) => {
      state.standings = action.payload;
      state.standingsIsLoading = false;
    },

    [requestStandingsInfo]: state => {
      state.standingsIsLoading = true;
    },

    [failLoadStandingsInfo]: state => {
      state.standingsIsFailed = true;
      state.standingsIsLoading = false;
    },

    [setStandingsRange]: (state, action) => {
      state.standingsRange = action.payload;
    },

    [setCurrentSquadPage]: (state, action) => {
      state.currentSquadPage = action.payload;
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

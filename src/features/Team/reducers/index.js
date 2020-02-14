import { createReducer } from '@reduxjs/toolkit';
import moment from 'moment';
import { setTeamData, setStandings, setStandingsRange } from '../actions';

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
    ]
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
    }
  }
);

export default teamReducer;

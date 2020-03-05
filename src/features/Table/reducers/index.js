import { createReducer } from '@reduxjs/toolkit';

import {
  successTableTeams,
  requestTableTeams,
  failLoadTableTeams,
  setLeagueId
} from '../actions';
import {
  LEAGUES_IDS,
  ENGLISH_PREMIER_LEAGUE
} from '../../../constants/leagues';

const tableReducer = createReducer(
  {
    leagueId: LEAGUES_IDS[ENGLISH_PREMIER_LEAGUE],
    isLoading: false,
    isFailed: false,
    tableData: []
  },
  {
    [successTableTeams]: (state, action) => {
      state.tableData = action.payload;
      state.isLoading = false;
    },

    [requestTableTeams]: state => {
      state.isLoading = true;
    },

    [failLoadTableTeams]: state => {
      state.isFailed = true;
      state.isLoading = false;
    },

    [setLeagueId]: (state, action) => {
      state.leagueId = action.payload;
    }
  }
);

export default tableReducer;

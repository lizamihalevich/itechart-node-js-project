import { createReducer } from '@reduxjs/toolkit';

import { success, request, failLoad, setLeagueId } from '../actions';
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
    [success]: (state, action) => {
      state.tableData = action.payload;
      state.isLoading = false;
    },

    [request]: state => {
      state.isLoading = true;
    },

    [failLoad]: state => {
      state.isFailed = true;
      state.isLoading = false;
    },

    [setLeagueId]: (state, action) => {
      state.leagueId = action.payload;
    }
  }
);

export default tableReducer;

import { createReducer } from '@reduxjs/toolkit';

import { setTableData, setLeagueId } from '../actions';
import { ENGLISH_PREMIER_LEAGUE_ID } from '../constants/leagues';

const tableReducer = createReducer(
  {
    leagueId: ENGLISH_PREMIER_LEAGUE_ID,
    tableData: []
  },
  {
    [setTableData]: (state, action) => {
      state.tableData = action.payload;
    },

    [setLeagueId]: (state, action) => {
      state.leagueId = action.payload;
    }
  }
);

export default tableReducer;

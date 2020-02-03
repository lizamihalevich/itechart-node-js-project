import { createReducer } from '@reduxjs/toolkit';

import { setTableData, setLeagueId } from '../actions';
import { LEAGUES_IDS, ENGLISH_PREMIER_LEAGUE } from '../../constants/leagues';

const tableReducer = createReducer(
  {
    leagueId: LEAGUES_IDS[ENGLISH_PREMIER_LEAGUE],
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

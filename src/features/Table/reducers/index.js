import { createReducer } from '@reduxjs/toolkit';

import { setTeams, setLeague } from '../actions';
import { ENGLISH_PREMIER_LEAGUE } from '../constants/leagues';

const tableReducer = createReducer(
  {
    league: ENGLISH_PREMIER_LEAGUE,
    teams: []
  },
  {
    [setTeams]: (state, action) => {
      state.teams = action.payload;
    },

    [setLeague]: (state, action) => {
      state.league = action.payload;
    }
  }
);

export default tableReducer;

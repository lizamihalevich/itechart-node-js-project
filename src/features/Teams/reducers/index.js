import { createReducer } from '@reduxjs/toolkit';

import { setTeamsLeague, setTeamsData } from '../actions';
import { ENGLISH_PREMIER_LEAGUE } from '../../../constants/leagues';

const teamsReducer = createReducer(
  {
    league: ENGLISH_PREMIER_LEAGUE,
    teamsData: []
  },
  {
    [setTeamsLeague]: (state, action) => {
      state.league = action.payload;
    },

    [setTeamsData]: (state, action) => {
      state.teamsData = action.payload;
    }
  }
);

export default teamsReducer;

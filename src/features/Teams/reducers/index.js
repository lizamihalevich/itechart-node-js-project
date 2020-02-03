import { createReducer } from '@reduxjs/toolkit';

import { setTeamsLeague } from '../actions';
import { ENGLISH_PREMIER_LEAGUE } from '../../constants/leagues';

const teamsReducer = createReducer(
  {
    league: ENGLISH_PREMIER_LEAGUE
  },
  {
    [setTeamsLeague]: (state, action) => {
      state.league = action.payload;
    }
  }
);

export default teamsReducer;

import { createReducer } from '@reduxjs/toolkit';

import { setTeamsLeague, success, request, failLoad } from '../actions';
import { ENGLISH_PREMIER_LEAGUE } from '../../../constants/leagues';

const teamsReducer = createReducer(
  {
    league: ENGLISH_PREMIER_LEAGUE,
    isLoading: false,
    isFailed: false,
    teamsData: []
  },
  {
    [setTeamsLeague]: (state, action) => {
      state.league = action.payload;
    },

    [success]: (state, action) => {
      state.teamsData = action.payload;
      state.isLoading = false;
    },

    [request]: state => {
      state.isLoading = true;
    },

    [failLoad]: state => {
      state.isLoading = false;
      state.isFailed = true;
    }
  }
);

export default teamsReducer;

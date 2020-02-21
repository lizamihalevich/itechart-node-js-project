import { createReducer } from '@reduxjs/toolkit';

import {
  setTeamsLeague,
  successTeamsInfo,
  requestTeamsInfo,
  failLoadTeamsInfo
} from '../actions';
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

    [successTeamsInfo]: (state, action) => {
      state.teamsData = action.payload;
      state.isLoading = false;
    },

    [requestTeamsInfo]: state => {
      state.isLoading = true;
    },

    [failLoadTeamsInfo]: state => {
      state.isLoading = false;
      state.isFailed = true;
    }
  }
);

export default teamsReducer;

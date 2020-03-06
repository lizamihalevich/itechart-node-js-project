import { createReducer } from '@reduxjs/toolkit';

import {
  setTeamsLeague,
  successTeamsInfo,
  requestTeamsInfo,
  failLoadTeamsInfo,
  addTeamToFavourites
} from '../actions';
import { ENGLISH_PREMIER_LEAGUE } from '../../../constants/leagues';

const teamsReducer = createReducer(
  {
    league: ENGLISH_PREMIER_LEAGUE,
    isLoading: false,
    isFailed: false,
    teamsData: [],
    favouriteTeams: []
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
    },

    [addTeamToFavourites]: (state, action) => {
      state.favouriteTeams += action.payload;
    }
  }
);

export default teamsReducer;

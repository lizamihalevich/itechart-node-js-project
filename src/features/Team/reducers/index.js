import { createReducer } from '@reduxjs/toolkit';

import { setTeamData } from '../actions';

const teamReducer = createReducer(
  {
    teamData: [],
    teamPlayers: []
  },
  {
    [setTeamData]: (state, action) => {
      state.teamData = action.payload;
    }
  }
);

export default teamReducer;

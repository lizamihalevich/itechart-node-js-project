import { createReducer } from '@reduxjs/toolkit';
import { setPage } from '../actons';

import { TEAMS } from '../constants';

const headerReducer = createReducer(
  { page: TEAMS },
  {
    [setPage]: (state, action) => {
      state.page = action.payload;
    }
  }
);

export default headerReducer;

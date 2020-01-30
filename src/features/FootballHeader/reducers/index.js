import { createReducer } from '@reduxjs/toolkit';
import { setPage } from '../actons';

import { TABLE } from '../constants';

const headerReducer = createReducer(
  { page: TABLE },
  {
    [setPage]: (state, action) => {
      state.page = action.payload;
    }
  }
);

export default headerReducer;

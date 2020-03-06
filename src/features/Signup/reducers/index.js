import { createReducer } from '@reduxjs/toolkit';

import { addNewUser } from '../actions';

const signUpReducer = createReducer(
  {
    newUserData: {}
  },
  {
    [addNewUser]: (state, action) => {
      state.newUserData = action.payload;
    }
  }
);

export default signUpReducer;

import { createReducer } from '@reduxjs/toolkit';
import { setAuthData } from '../actions';

const signInReducer = createReducer(
  {
    authData: {}
  },
  {
    [setAuthData]: (state, action) => {
      state.authData = action.payload;
    }
  }
);

export default signInReducer;

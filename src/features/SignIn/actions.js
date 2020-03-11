import { createAction } from '@reduxjs/toolkit';
import { post } from '../../utils/request';

const setAuthData = createAction('SET_AUTH_DATA');
const failSignIn = createAction('FAIL_SIGN_IN');

const signInUser = authData => async dispatch => {
  try {
    const response = await post('http://localhost:3000/signin', {
      data: authData
    });
    dispatch(setAuthData(response.data));
  } catch (e) {
    dispatch(failSignIn());
  }
};

export { setAuthData, signInUser };

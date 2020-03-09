import { createAction } from '@reduxjs/toolkit';
import { post } from '../../utils/request';

const addNewUser = createAction('ADD_NEW_USER');
const failAddNewUser = createAction('FAIL_ADD_NEW_USER');

const addNewUserToDatabase = user => async dispatch => {
  try {
    const response = await post('http://localhost:3000/register', {
      data: user
    });
    dispatch(addNewUser(response.data));
  } catch (e) {
    dispatch(failAddNewUser());
  }
};

export { addNewUser, addNewUserToDatabase };

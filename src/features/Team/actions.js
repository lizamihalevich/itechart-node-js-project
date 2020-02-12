import { createAction } from '@reduxjs/toolkit';
import { get } from '../../utils/requestFootballApi';

const setTeamData = createAction('SET_TEAM_DATA');

const getTeamDataFromServer = id => async dispatch => {
  const url = `https://api.football-data.org/v2/teams/${id}`;

  try {
    const response = await get(url);
    dispatch(setTeamData(response.data));
  } catch (e) {
    throw new Error(e);
  }
};

const getTeamData = id => dispatch => {
  dispatch(getTeamDataFromServer(id));
};

export { setTeamData, getTeamData };

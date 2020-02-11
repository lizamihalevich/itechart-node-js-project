import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

const setTeamData = createAction('SET_TEAM_DATA');

const getTeamDataFromServer = id => async dispatch => {
  const url = `https://api.football-data.org/v2/teams/${id}`;
  const data = await axios(url, {
    headers: { 'X-Auth-Token': '02f16200174644cdab2c478d648b3748' }
  });
  dispatch(setTeamData(data.data));
};

const getTeamData = id => dispatch => {
  dispatch(getTeamDataFromServer(id));
};

export { setTeamData, getTeamData };

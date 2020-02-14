import { createAction } from '@reduxjs/toolkit';
import { get } from '../../utils/requestFootballApi';

const setTeamData = createAction('SET_TEAM_DATA');
const setStandings = createAction('SET_STANDINGS');
const setStandingsRange = createAction('SET_STANDINGS_RANGE');

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

const getStandingsDataFromServer = id => async dispatch => {
  const url = `http://api.football-data.org/v2/teams/${id}/matches`;

  try {
    const response = await get(url);
    dispatch(setStandings(response.data.matches));
  } catch (e) {
    throw new Error(e);
  }
};

const getStandingsData = id => dispatch => {
  dispatch(getStandingsDataFromServer(id));
};

export {
  setTeamData,
  getTeamData,
  setStandings,
  getStandingsData,
  setStandingsRange
};

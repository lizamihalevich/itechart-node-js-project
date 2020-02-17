import { createAction } from '@reduxjs/toolkit';
import { get } from '../../utils/requestFootballApi';

const setTeamData = createAction('SET_TEAM_DATA');
const setStandings = createAction('SET_STANDINGS');
const setStandingsRange = createAction('SET_STANDINGS_RANGE');
const setCurrentSquadPage = createAction('SET_CURRENT_SQUAD_PAGE');
const setTotalSquadNumber = createAction('SET_TOTAL_SQUAD_NUMBER');
const setCurrentSquadList = createAction('SET_CURRENT_SQUAD_LIST');
const setTotalStandingsNumber = createAction('SET_TOTAL_STANDINGS_NUMBER');
const setCurrentStandingsPage = createAction('SET_CURRENT_STANDINGS_PAGE');
const setCurrentStandingsList = createAction('SET_CURRENT_STANDINGS_LIST');

const getTeamDataFromServer = id => async dispatch => {
  const url = `https://api.football-data.org/v2/teams/${id}`;

  try {
    const response = await get(url);
    dispatch(setTeamData(response.data));
    dispatch(setTotalSquadNumber(response.data.squad.length));
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
  setStandingsRange,
  setCurrentSquadPage,
  setTotalSquadNumber,
  setCurrentSquadList,
  setCurrentStandingsPage,
  setCurrentStandingsList,
  setTotalStandingsNumber
};

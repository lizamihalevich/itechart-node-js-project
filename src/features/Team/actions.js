import { createAction } from '@reduxjs/toolkit';
import { get } from '../../utils/requestFootballApi';

const setStandings = createAction('SET_STANDINGS');
const setStandingsRange = createAction('SET_STANDINGS_RANGE');
const setCurrentSquadPage = createAction('SET_CURRENT_SQUAD_PAGE');
const setCurrentSquadList = createAction('SET_CURRENT_SQUAD_LIST');
const setTotalStandingsNumber = createAction('SET_TOTAL_STANDINGS_NUMBER');
const setCurrentStandingsPage = createAction('SET_CURRENT_STANDINGS_PAGE');
const setCurrentStandingsList = createAction('SET_CURRENT_STANDINGS_LIST');

const success = createAction('SUCCESS');
const request = createAction('REQUEST');
const failLoad = createAction('FAIL_LOAD');

const getTeamData = id => async dispatch => {
  const url = `https://api.football-data.org/v2/teams/${id}`;
  dispatch(request());
  try {
    const response = await get(url);
    dispatch(success(response.data));
  } catch (e) {
    dispatch(failLoad());
  }
};

const setTeamInfo = id => dispatch => {
  dispatch(getTeamData(id));
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
  success,
  setTeamInfo,
  setStandings,
  getStandingsData,
  setStandingsRange,
  setCurrentSquadPage,
  setCurrentSquadList,
  setCurrentStandingsPage,
  setCurrentStandingsList,
  setTotalStandingsNumber
};

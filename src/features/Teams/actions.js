import { createAction } from '@reduxjs/toolkit';
import { LEAGUES_IDS } from '../../constants/leagues';
import { get } from '../../utils/requestFootballApi';

const setTeamsLeague = createAction('SET_TEAMS_LEAGUE');

const request = createAction('REQUEST');
const success = createAction('SUCCESS');
const failLoad = createAction('FAIL_LOAD');

const getTeamsInfoFromServer = id => async dispatch => {
  const url = `https://api.football-data.org/v2/competitions/${id}/teams`;
  dispatch(request());
  try {
    const response = await get(url);
    dispatch(success(response.data.teams));
  } catch (e) {
    dispatch(failLoad());
  }
};

const getTeamsData = league => dispatch => {
  dispatch(getTeamsInfoFromServer(LEAGUES_IDS[league]));
  dispatch(setTeamsLeague(league));
};

export { setTeamsLeague, getTeamsData, success, request, failLoad };

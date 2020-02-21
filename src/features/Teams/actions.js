import { createAction } from '@reduxjs/toolkit';
import { LEAGUES_IDS } from '../../constants/leagues';
import { get } from '../../utils/requestFootballApi';

const setTeamsLeague = createAction('SET_TEAMS_LEAGUE');

const requestTeamsInfo = createAction('REQUEST_TEAMS_INFO');
const successTeamsInfo = createAction('SUCCESS_TEAMS_INFO');
const failLoadTeamsInfo = createAction('FAIL_LOAD_TEAMS_INFO');

const getTeamsInfoFromServer = id => async dispatch => {
  const url = `https://api.football-data.org/v2/competitions/${id}/teams`;
  dispatch(requestTeamsInfo());
  try {
    const response = await get(url);
    dispatch(successTeamsInfo(response.data.teams));
  } catch (e) {
    dispatch(failLoadTeamsInfo());
  }
};

const getTeamsData = league => dispatch => {
  dispatch(getTeamsInfoFromServer(LEAGUES_IDS[league]));
  dispatch(setTeamsLeague(league));
};

export {
  setTeamsLeague,
  getTeamsData,
  successTeamsInfo,
  requestTeamsInfo,
  failLoadTeamsInfo
};

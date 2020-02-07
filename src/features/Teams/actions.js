import { createAction } from '@reduxjs/toolkit';
import { LEAGUES_IDS } from '../../constants/leagues';
import { get } from '../../utils/requestFootballApi';

const setTeamsLeague = createAction('SET_TEAMS_LEAGUE');
const setTeamsData = createAction('SET_TEAMS_DATA');

const processData = data => dispatch => {
  dispatch(setTeamsData(data.teams));
};

const getTeamsInfoFromServer = id => dispatch => {
  const url = `https://api.football-data.org/v2/competitions/${id}/teams`;
  get(url)
    .then(data => dispatch(processData(data)))
    .catch(e => {
      throw e;
    });
};

const getTeamsData = league => dispatch => {
  dispatch(getTeamsInfoFromServer(LEAGUES_IDS[league]));
  dispatch(setTeamsLeague(league));
};

export { setTeamsLeague, setTeamsData, getTeamsData };

import { createAction } from '@reduxjs/toolkit';
import { LEAGUES_IDS } from '../constants/leagues';

const setTeamsLeague = createAction('SET_TEAMS_LEAGUE');
const setTeamsData = createAction('SET_TEAMS_DATA');

const processData = data => dispatch => {
  dispatch(setTeamsData(data.teams));
};

const getTeamsInfoFromServer = id => dispatch => {
  const httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        dispatch(processData(JSON.parse(httpRequest.responseText)));
      }
    }
  };

  const url = `https://api.football-data.org/v2/competitions/${id}/teams`;
  httpRequest.open('GET', url);
  httpRequest.setRequestHeader(
    'X-Auth-Token',
    '02f16200174644cdab2c478d648b3748'
  );
  httpRequest.send();
};

const getTeamsData = league => dispatch => {
  dispatch(getTeamsInfoFromServer(LEAGUES_IDS[league]));
  dispatch(setTeamsLeague(league));
};

export { setTeamsLeague, setTeamsData, getTeamsData };

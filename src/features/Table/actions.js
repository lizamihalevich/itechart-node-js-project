import { createAction } from '@reduxjs/toolkit';

const handleTeamsResponse = httpRequest => {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      return JSON.parse(httpRequest.responseText);
    }
  }
};

const getTeamsFromServer = id => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = handleTeamsResponse(httpRequest);
  const url = `https://api.football-data.org/v2/competitions/${id}/standings`;
  httpRequest.open('GET', url);
  httpRequest.send();
};

const setTeams = createAction('SET_TEAMS');
const getTeams = id => dispatch => {
  const teams = getTeamsFromServer(id);
  dispatch(setTeams(teams));
};

const setLeague = createAction('SET_LEAGUE');

export { setTeams, getTeams, setLeague };

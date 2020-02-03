import { createAction } from '@reduxjs/toolkit';

const setTableData = createAction('SET_TEAMS');
const setLeagueId = createAction('SET_LEAGUE_ID');

const processData = data => dispatch => {
  dispatch(setTableData(data.standings[0].table));
};

const getTeamsFromServer = id => dispatch => {
  const httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        dispatch(processData(JSON.parse(httpRequest.responseText)));
      }
    }
  };

  const url = `https://api.football-data.org/v2/competitions/${id}/standings?standingType=TOTAL`;
  httpRequest.open('GET', url);
  httpRequest.setRequestHeader(
    'X-Auth-Token',
    '02f16200174644cdab2c478d648b3748',
    'Access-Control-Allow-Origin',
    '*'
  );
  httpRequest.send();
};

const getTableData = id => dispatch => {
  dispatch(getTeamsFromServer(id));
  dispatch(setLeagueId(id));
};

export { setTableData, getTableData, setLeagueId, getTeamsFromServer };

import { createAction } from '@reduxjs/toolkit';
import { get } from '../../utils/request';

const setTableData = createAction('SET_TABLE_DATA');
const setLeagueId = createAction('SET_LEAGUE_ID');

const processData = data => dispatch => {
  dispatch(setTableData(data.standings[0].table));
};

const getTeamsFromServer = id => dispatch => {
  const url = `https://api.football-data.org/v2/competitions/${id}/standings?standingType=TOTAL`;
  const headers = {
    'X-Auth-Token': '02f16200174644cdab2c478d648b3748'
  };
  console.log(get(url, headers));
  // dispatch(processData(requestData.get(url, headers))));
};

const getTableData = id => dispatch => {
  dispatch(getTeamsFromServer(id));
  dispatch(setLeagueId(id));
};

export { setTableData, getTableData, setLeagueId, getTeamsFromServer };

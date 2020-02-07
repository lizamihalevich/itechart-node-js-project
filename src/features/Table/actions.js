import { createAction } from '@reduxjs/toolkit';
import { get } from '../../utils/requestFootballApi';

const setTableData = createAction('SET_TABLE_DATA');
const setLeagueId = createAction('SET_LEAGUE_ID');

const processData = data => dispatch => {
  dispatch(setTableData(data.standings[0].table));
};

const getTeamsFromServer = id => dispatch => {
  const url = `https://api.football-data.org/v2/competitions/${id}/standings`;

  get(url, { standingType: 'TOTAL' })
    .then(data => dispatch(processData(data)))
    .catch(e => {
      throw e;
    });
};

const getTableData = id => dispatch => {
  dispatch(getTeamsFromServer(id));
  dispatch(setLeagueId(id));
};

export { setTableData, getTableData, setLeagueId, getTeamsFromServer };

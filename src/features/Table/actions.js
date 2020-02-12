import { createAction } from '@reduxjs/toolkit';
import { get } from '../../utils/requestFootballApi';

const setTableData = createAction('SET_TABLE_DATA');
const setLeagueId = createAction('SET_LEAGUE_ID');

const processData = data => dispatch => {
  dispatch(setTableData(data.standings[0].table));
};

const getTeamsFromServer = id => async dispatch => {
  const url = `https://api.football-data.org/v2/competitions/${id}/standings`;

  try {
    const data = await get(url, { params: { standingType: 'TOTAL' } });
    dispatch(processData(data.data));
  } catch (e) {
    throw new Error(e);
  }
};

const getTableData = id => dispatch => {
  dispatch(getTeamsFromServer(id));
  dispatch(setLeagueId(id));
};

export { setTableData, getTableData, setLeagueId, getTeamsFromServer };

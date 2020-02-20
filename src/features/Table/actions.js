import { createAction } from '@reduxjs/toolkit';
import { get } from '../../utils/requestFootballApi';

const setTableData = createAction('SET_TABLE_DATA');
const setLeagueId = createAction('SET_LEAGUE_ID');

const request = createAction('REQUEST');
const success = createAction('SUCCESS');
const failLoad = createAction('FAIL_LOAD');

const getTeamsData = id => async dispatch => {
  const url = `https://api.football-data.org/v2/competitions/${id}/standings`;
  dispatch(request());
  try {
    const response = await get(url, { params: { standingType: 'TOTAL' } });
    dispatch(success(response.data.standings[0].table));
  } catch (e) {
    dispatch(failLoad());
  }
};

const setLeagueTeams = id => dispatch => {
  dispatch(setLeagueId(id));
  dispatch(getTeamsData(id));
};

export {
  setTableData,
  setLeagueTeams,
  setLeagueId,
  success,
  request,
  failLoad
};

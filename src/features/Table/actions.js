import { createAction } from '@reduxjs/toolkit';
import { get } from '../../utils/requestFootballApi';

const setTableData = createAction('SET_TABLE_DATA');
const setLeagueId = createAction('SET_LEAGUE_ID');

const requestTableTeams = createAction('REQUEST_TABLE_TEAMS');
const successTableTeams = createAction('SUCCESS_TABLE_TEAMS');
const failLoadTableTeams = createAction('FAIL_LOAD_TABLE_TEAMS');

const getTeamsData = id => async dispatch => {
  const url = `https://api.football-data.org/v2/competitions/${id}/standings`;
  dispatch(requestTableTeams());
  try {
    const response = await get(url, { params: { standingType: 'TOTAL' } });
    dispatch(successTableTeams(response.data.standings[0].table));
  } catch (e) {
    dispatch(failLoadTableTeams());
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
  successTableTeams,
  requestTableTeams,
  failLoadTableTeams
};

import { createAction } from '@reduxjs/toolkit';
import { get } from '../../utils/requestFootballApi';
import sort from '../../utils/sort';

const setStandingsRange = createAction('SET_STANDINGS_RANGE');
const setCurrentSquadPage = createAction('SET_CURRENT_SQUAD_PAGE');
const setCurrentSquadList = createAction('SET_CURRENT_SQUAD_LIST');
const setTotalStandingsNumber = createAction('SET_TOTAL_STANDINGS_NUMBER');
const setCurrentStandingsPage = createAction('SET_CURRENT_STANDINGS_PAGE');
const setCurrentStandingsList = createAction('SET_CURRENT_STANDINGS_LIST');

// players

const successPlayersInfo = createAction('SUCCESS_PLAYERS_INFO', team => {
  return {
    payload: {
      team,
      squad: team.squad.sort((player1, player2) =>
        sort(player1.shirtNumber, player2.shirtNumber)
      ),
      total: team.squad.length
    }
  };
});

const requestPlayersInfo = createAction('REQUEST_PLAYERS_INFO');
const failLoadPlayersInfo = createAction('FAIL_LOAD_PLAYERS_INFO');

const getTeamData = id => async dispatch => {
  const url = `https://api.football-data.org/v2/teams/${id}`;
  dispatch(requestPlayersInfo());

  try {
    const response = await get(url);
    dispatch(successPlayersInfo(response.data));
  } catch (e) {
    dispatch(failLoadPlayersInfo());
  }
};

const setTeamInfo = id => dispatch => {
  dispatch(getTeamData(id));
};

// standings

const successStandingsInfo = createAction('SUCCESS_STANDINGS_INFO');
const requestStandingsInfo = createAction('REQUEST_STANDINGS_INFO');
const failLoadStandingsInfo = createAction('FAIL_LOAD_STANDINGS_INFO');

const getStandingsData = id => async dispatch => {
  const url = `http://api.football-data.org/v2/teams/${id}/matches`;
  dispatch(requestStandingsInfo());

  try {
    const response = await get(url);
    dispatch(successStandingsInfo(response.data.matches));
  } catch (e) {
    dispatch(failLoadStandingsInfo());
  }
};

const setStandingsInfo = id => dispatch => {
  dispatch(getStandingsData(id));
};

export {
  successPlayersInfo,
  requestPlayersInfo,
  failLoadPlayersInfo,
  setTeamInfo,
  successStandingsInfo,
  requestStandingsInfo,
  failLoadStandingsInfo,
  setStandingsInfo,
  setStandingsRange,
  setCurrentSquadPage,
  setCurrentSquadList,
  setCurrentStandingsPage,
  setCurrentStandingsList,
  setTotalStandingsNumber
};

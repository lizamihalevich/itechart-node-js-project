import { createAction } from '@reduxjs/toolkit';
import moment from 'moment';
import { get } from '../../utils/requestFootballApi';
import sort from '../../utils/sort';
import { LIST_OFFSET } from '../../constants/teamLists';

// players
const setCurrentSquadPage = createAction('SET_CURRENT_SQUAD_PAGE');
const setCurrentSquadList = createAction('SET_CURRENT_SQUAD_LIST');

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

const setCurrentSquadListOnPage = page => (dispatch, getState) => {
  const { team } = getState();
  dispatch(setCurrentSquadPage(page));
  dispatch(
    setCurrentSquadList(
      team.squad.slice((page - 1) * LIST_OFFSET, page * LIST_OFFSET)
    )
  );
};

// standings
const setStandingsRange = createAction('SET_STANDINGS_RANGE');
const setStandingsBetweenRange = createAction('SET_STANDINGS_BETWEEN_RANGE');
const setTotalStandingsNumber = createAction('SET_TOTAL_STANDINGS_NUMBER');
const setCurrentStandingsPage = createAction('SET_CURRENT_STANDINGS_PAGE');
const setCurrentStandingsList = createAction('SET_CURRENT_STANDINGS_LIST');

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

const setStandingsList = range => (dispatch, getState) => {
  const { team } = getState();

  const standingsBetweenRange = team.standings.filter(match =>
    moment(match.utcDate).isBetween(range[0], range[1])
  );

  dispatch(setStandingsBetweenRange(standingsBetweenRange));
  dispatch(setTotalStandingsNumber(standingsBetweenRange.length));
  dispatch(
    setCurrentStandingsList(
      standingsBetweenRange.slice(
        (team.currentStandingsPage - 1) * LIST_OFFSET,
        team.currentStandingsPage * LIST_OFFSET
      )
    )
  );
  dispatch(setStandingsRange(range));
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
  setStandingsBetweenRange,
  setStandingsList,
  setCurrentSquadList,
  setCurrentSquadPage,
  setCurrentSquadListOnPage,
  setCurrentStandingsPage,
  setCurrentStandingsList,
  setTotalStandingsNumber
};

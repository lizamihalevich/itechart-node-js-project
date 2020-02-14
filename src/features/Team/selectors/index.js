import { createSelector } from '@reduxjs/toolkit';
import moment from 'moment';
import sort from '../../../utils/sort';

const squadSelector = state => state.team.squad;
const standingsSelector = state => state.team.standings;
const standingsRangeSelector = state => state.team.standingsRange;

const squadDataDisplaySelector = createSelector(squadSelector, squad =>
  squad
    .map(player => {
      return {
        name: player.name,
        position: player.position,
        dateOfBirth: player.dateOfBirth,
        shirtNumber: player.shirtNumber,
        id: player.id
      };
    })
    .sort((player1, player2) => sort(player1.shirtNumber, player2.shirtNumber))
);

const standingsBetweenRangeSelector = createSelector(
  standingsSelector,
  standingsRangeSelector,
  (matches, range) =>
    matches.filter(match => moment(match.utcDate).isBetween(range[0], range[1]))
);

export {
  squadSelector,
  squadDataDisplaySelector,
  standingsBetweenRangeSelector,
  standingsSelector
};

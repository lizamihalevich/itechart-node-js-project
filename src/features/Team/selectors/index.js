import { createSelector } from '@reduxjs/toolkit';
import { LIST_OFFSET } from '../../../constants/teamLists';

const standingsBetweenRangeSelector = state => state.team.standingsBetweenRange;
const currentStandingsPageSelector = state => state.team.currentStandingsPage;

const currentStandingsListSelector = createSelector(
  standingsBetweenRangeSelector,
  currentStandingsPageSelector,
  (standings, page) =>
    standings.slice((page - 1) * LIST_OFFSET, page * LIST_OFFSET)
);

export { currentStandingsListSelector };

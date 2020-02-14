import { createSelector } from '@reduxjs/toolkit';

const tableDataSelector = state => state.table.tableData;
// const teamIdSelector = createSelector(tableDataSelector

const tableStandingsSelector = createSelector(tableDataSelector, teams =>
  teams.map((team, index) => {
    return {
      key: index,
      position: team.position,
      team: team.team.name,
      g: team.playedGames,
      w: team.won,
      d: team.draw,
      l: team.lost,
      gs: team.goalsFor,
      gc: team.goalsAgainst,
      p: team.points,
      id: team.team.id
    };
  })
);

export { tableDataSelector, tableStandingsSelector };

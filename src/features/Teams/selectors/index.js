import { createSelector } from '@reduxjs/toolkit';

const teamsDataSelector = state => state.teams.teamsData;

const teamsInfoSelector = createSelector(teamsDataSelector, teams =>
  teams.map(team => {
    return {
      id: team.id,
      name: team.name,
      shortName: team.shortName,
      imageUrl: team.crestUrl
    };
  })
);

export { teamsInfoSelector, teamsDataSelector };

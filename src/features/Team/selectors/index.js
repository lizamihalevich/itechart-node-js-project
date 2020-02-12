import { createSelector } from '@reduxjs/toolkit';
import sort from '../../../utils/sort';

const squadSelector = state => state.team.teamData.squad;

const squadDataDisplaySelector = createSelector(squadSelector, squad =>
  squad
    .map(player => {
      return {
        name: player.name,
        position: player.position,
        birthdate: player.dateOfBirth,
        shirtNumber: player.shirtNumber,
        id: player.id
      };
    })
    .sort((player1, player2) => sort(player1.shirtNumber, player2.shirtNumber))
);

export { squadSelector, squadDataDisplaySelector };

import React from 'react';
import PlayerCard from '../PlayerCard';
import ListHeader from '../ListHeader';

const PlayersList = () => {
  return (
    <>
      <ListHeader pageName="Players" />
      <PlayerCard
        name="Manuel Neuer"
        position="Keeper"
        birthDate="02 10 1986"
        squadNumber="1"
      />
    </>
  );
};

export default PlayersList;

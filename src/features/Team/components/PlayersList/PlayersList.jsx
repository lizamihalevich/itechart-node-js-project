import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../PlayerCard';
import ListHeader from '../ListHeader';

const PlayersList = ({ squad }) => {
  const players = squad.map(player => (
    <PlayerCard
      key={player.id}
      name={player.name}
      position={player.position}
      birthDate={player.birthdate}
      squadNumber={player.shirtNumber}
    />
  ));
  return (
    <>
      <ListHeader pageName="Players" />
      {players}
    </>
  );
};

PlayersList.defaultProps = {
  squad: []
};

PlayersList.propTypes = {
  squad: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      position: PropTypes.string,
      dateOfBirth: PropTypes.string,
      shirtNumber: PropTypes.number
    })
  )
};

export default PlayersList;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from 'antd';
import styled from 'styled-components';
import PlayerCard from '../PlayerCard';
import ListHeader from '../ListHeader';
import { setCurrentSquadPage, setCurrentSquadList } from '../../actions';

const StyledPagination = styled(Pagination)`
  margin: 15px;
  display: flex;
  justify-content: center;
`;

const PlayersList = ({ squad }) => {
  const offset = 5;
  const totalSquadNumber = useSelector(state => state.team.totalSquadNumber);
  const currentPage = useSelector(state => state.team.currentSquadPage);
  const currentSquadList = useSelector(state => state.team.currentSquadList);
  const dispatch = useDispatch();

  // useEffect(() => dispatch(setCurrentSquadList(squad)), []);

  const onPaginationChange = page => {
    dispatch(setCurrentSquadPage(page));
    dispatch(
      setCurrentSquadList(squad.slice((page - 1) * offset, page * offset))
    );
  };

  const players = currentSquadList.map(player => (
    <PlayerCard
      key={player.id}
      name={player.name}
      position={player.position}
      birthDate={player.dateOfBirth}
      squadNumber={player.shirtNumber}
    />
  ));
  return (
    <>
      <ListHeader pageName="Players" />
      <StyledPagination
        defaultCurrent={1}
        defaultPageSize={offset}
        hideOnSinglePage
        total={totalSquadNumber}
        current={currentPage}
        onChange={onPaginationChange}
      />
      {players}
      <StyledPagination
        defaultCurrent={1}
        defaultPageSize={offset}
        hideOnSinglePage
        total={totalSquadNumber}
        current={currentPage}
        onChange={onPaginationChange}
      />
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

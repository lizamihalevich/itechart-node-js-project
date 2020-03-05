import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination, Spin } from 'antd';
import styled from 'styled-components';
import PlayerCard from '../PlayerCard';
import ListHeader from '../ListHeader';
import { setCurrentSquadListOnPage } from '../../actions';
import { LIST_OFFSET } from '../../../../constants/teamLists';

const StyledPagination = styled(Pagination)`
  margin: 15px;
  display: flex;
  justify-content: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledSpin = styled(Spin)`
  margin: 20px auto;
`;

const PlayersList = () => {
  const totalSquadNumber = useSelector(state => state.team.totalSquadNumber);
  const squad = useSelector(state => state.team.squad);
  const currentPage = useSelector(state => state.team.currentSquadPage);
  const currentSquadList = useSelector(state => state.team.currentSquadList);
  const isLoading = useSelector(state => state.team.playersIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentSquadListOnPage(1));
  }, [squad]);

  const onPaginationChange = page => {
    dispatch(setCurrentSquadListOnPage(page));
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

  const pagination = (
    <StyledPagination
      defaultCurrent={1}
      defaultPageSize={LIST_OFFSET}
      hideOnSinglePage
      total={totalSquadNumber}
      current={currentPage}
      onChange={onPaginationChange}
    />
  );

  return (
    <>
      <ListHeader pageName="Players" />
      {isLoading ? (
        <StyledDiv>
          <StyledSpin size="large" />
        </StyledDiv>
      ) : (
        <>
          {pagination}
          {players}
          {pagination}
        </>
      )}
    </>
  );
};

export default PlayersList;

import React, { useEffect } from 'react';

import styled from 'styled-components';
import { Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import TeamCard from '../TeamCard';
import { teamsInfoSelector } from '../../selectors';
import { getTeamsData } from '../../actions';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledSpin = styled(Spin)`
  margin: 20px auto;
`;

const TeamsList = () => {
  const teamsInfo = useSelector(state => teamsInfoSelector(state));
  const league = useSelector(state => state.teams.league);
  const isLoading = useSelector(state => state.teams.isLoading);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getTeamsData(league)), []);

  const cards = teamsInfo.map(team => (
    <TeamCard
      key={team.id}
      id={team.id}
      imageSrc={team.imageUrl}
      title={team.name}
      shortName={team.shortName}
    />
  ));

  return (
    <StyledDiv>{isLoading ? <StyledSpin size="large" /> : cards}</StyledDiv>
  );
};

export default TeamsList;

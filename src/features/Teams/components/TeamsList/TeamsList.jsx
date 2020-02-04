import React, { useEffect } from 'react';

import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import TeamCard from '../TeamCard';
import { teamsInfoSelector } from '../../selectors';
import { getTeamsData } from '../../actions';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TeamsList = () => {
  const teamsInfo = useSelector(state => teamsInfoSelector(state));
  const league = useSelector(state => state.teams.league);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getTeamsData(league)), []);

  const cards = teamsInfo.map(team => (
    <TeamCard
      key={team.name}
      imageSrc={team.imageUrl}
      title={team.name}
      shortName={team.shortName}
    />
  ));
  return <StyledDiv>{cards}</StyledDiv>;
};

export default TeamsList;

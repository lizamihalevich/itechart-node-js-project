import React from 'react';

import styled from 'styled-components';
import TeamCard from '../TeamCard';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TeamsList = () => {
  return (
    <StyledDiv>
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
    </StyledDiv>
  );
};

export default TeamsList;

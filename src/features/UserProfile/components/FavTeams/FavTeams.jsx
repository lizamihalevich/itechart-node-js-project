import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import FavTeamCard from '../FavTeamCard';

const StyledCard = styled(Card)`
  width: 60%;
  margin: 30px auto;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FavTeams = () => {
  return (
    <StyledCard title="Favourite teams">
      <CardsWrapper>
        <FavTeamCard />
        <FavTeamCard />
        <FavTeamCard />
        <FavTeamCard />
      </CardsWrapper>
    </StyledCard>
  );
};

export default FavTeams;

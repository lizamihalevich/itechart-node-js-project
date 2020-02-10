import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  max-width: 600px;
  width: 100%;
`;
const StandingCard = () => {
  return (
    <StyledCard>
      <p>Info</p>
    </StyledCard>
  );
};

export default StandingCard;

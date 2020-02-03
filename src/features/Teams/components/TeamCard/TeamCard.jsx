import React from 'react';

import styled from 'styled-components';
import { Card } from 'antd';

const TeamCard = () => {
  const { Meta } = Card;

  const StyledCard = styled(Card)`
    width: 48%;
    margin: 15px 0;
  `;

  const CardImage = styled.img`
    width: 40px;
  `;

  return (
    <StyledCard>
      <Meta
        avatar={
          <CardImage
            alt="example"
            src="https://upload.wikimedia.org/wikipedia/commons/8/81/Borussia_M%C3%B6nchengladbach_logo.svg"
          />
        }
        title="Team"
        description="description"
      />
    </StyledCard>
  );
};

export default TeamCard;

import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const StyledCard = styled(Card)`
  width: 48%;
  margin: 15px 0;
`;

const CardImage = styled.img`
  width: 40px;
`;

const FavTeamCard = () => {
  const { Meta } = Card;
  return (
    <StyledCard hoverable>
      <Meta
        avatar={
          <CardImage
            alt="team"
            src="https://upload.wikimedia.org/wikipedia/de/9/9f/Aston_Villa_logo.svg"
          />
        }
        title="Aston Villa FC"
        description="Short name: Aston Villa"
      />
    </StyledCard>
  );
};

export default FavTeamCard;

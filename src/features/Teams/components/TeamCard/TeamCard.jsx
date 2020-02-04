import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Card, Button } from 'antd';

const TeamCard = ({ imageSrc, title, shortName }) => {
  const { Meta } = Card;

  const StyledCard = styled(Card)`
    width: 48%;
    margin: 15px 0;
  `;

  const StyledButton = styled(Button)`
    margin-top: 30px;
    width: 100%;
  `;

  const CardImage = styled.img`
    width: 40px;
  `;

  return (
    <StyledCard>
      <Meta
        avatar={<CardImage alt={title} src={imageSrc} />}
        title={title}
        description={`Short name: ${shortName}`}
      />
      <StyledButton type="primary">Add team to favorites</StyledButton>
    </StyledCard>
  );
};

TeamCard.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  shortName: PropTypes.string
};

export default TeamCard;

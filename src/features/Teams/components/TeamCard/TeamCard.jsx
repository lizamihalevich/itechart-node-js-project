import React from 'react';
import PropTypes from 'prop-types';

import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Button } from 'antd';

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

const TeamCard = ({ imageSrc, title, shortName, id }) => {
  const { Meta } = Card;

  const { url } = useRouteMatch();
  return (
    <StyledCard hoverable>
      <Link to={`${url}/${id}`}>
        <Meta
          avatar={<CardImage alt={title} src={imageSrc} />}
          title={title}
          description={`Short name: ${shortName}`}
        />
      </Link>
      <StyledButton type="primary">Add team to favorites</StyledButton>
    </StyledCard>
  );
};

TeamCard.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  shortName: PropTypes.string,
  id: PropTypes.number
};

export default TeamCard;

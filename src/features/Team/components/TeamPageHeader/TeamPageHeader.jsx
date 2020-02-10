import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Menu, Card } from 'antd';

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 600px;
  margin: 50px auto;
`;

const StyledMenu = styled(Menu)`
  border: none;
  display: flex;
  margin-top: 20px;
`;

const MenuItem = styled(Menu.Item)`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const CardImage = styled.img`
  width: 50px;
`;

const TeamPageHeader = ({ src, title, shortName }) => {
  const { Meta } = Card;

  return (
    <StyledCard>
      <Meta
        avatar={<CardImage alt={title} src={src} />}
        title={title}
        description={`Short name: ${shortName}`}
      />
      <StyledMenu defaultSelectedKeys={['1']}>
        <MenuItem key="1">Players</MenuItem>
        <MenuItem key="2">Standings</MenuItem>
      </StyledMenu>
    </StyledCard>
  );
};

TeamPageHeader.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  shortName: PropTypes.string
};

export default TeamPageHeader;

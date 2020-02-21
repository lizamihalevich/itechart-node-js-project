import React from 'react';
import PropTypes from 'prop-types';

import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, Card } from 'antd';
import { useSelector } from 'react-redux';

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

  const { url } = useRouteMatch();
  const path = useLocation();
  const activeTab = path.pathname.includes('players') ? 'players' : 'standings';
  const isLoading = useSelector(state => state.team.playersIsLoading);

  return (
    <StyledCard loading={isLoading}>
      <Meta
        avatar={<CardImage alt={title} src={src} />}
        title={title}
        description={`Short name: ${shortName}`}
      />
      <StyledMenu selectedKeys={[activeTab]}>
        <MenuItem key="players">
          <Link to={`${url}/players`}>Players</Link>
        </MenuItem>
        <MenuItem key="standings">
          <Link to={`${url}/standings`}>Standings</Link>
        </MenuItem>
      </StyledMenu>
    </StyledCard>
  );
};

TeamPageHeader.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  shortName: PropTypes.string
};

TeamPageHeader.defaultProps = {
  src: '',
  title: 'No data',
  shortName: 'No data'
};

export default TeamPageHeader;

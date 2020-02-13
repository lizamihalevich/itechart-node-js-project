import React from 'react';
import PropTypes from 'prop-types';
import { Layout as AntLayout } from 'antd';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import FootballHeader from '../../../features/FootballHeader';
import TablePage from '../../../features/Table';
import TeamsPage from '../../../features/Teams';
import Team from '../../../features/Team';

const { Content } = AntLayout;

const StyledLayout = styled(AntLayout)`
  background-color: white;
`;

const Layout = ({ location: { pathname } }) => {
  const activeMenuTab = pathname.includes('table') ? 'table' : 'teams';
  return (
    <StyledLayout>
      <FootballHeader activeMenuTab={activeMenuTab} />
      <Content>
        <Switch>
          <Route path="/teams/:team_id" component={Team} />
          <Route path="/teams" component={TeamsPage} />
          <Route path="/table" component={TablePage} />
          <Redirect from="/" to="/table" />
        </Switch>
      </Content>
    </StyledLayout>
  );
};

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default Layout;

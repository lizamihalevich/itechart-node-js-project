import React from 'react';
import { Layout as AntLayout } from 'antd';
import styled from 'styled-components';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import FootballHeader from '../../../features/FootballHeader';
import TablePage from '../../../pages/TablePage';
import TeamsPage from '../../../pages/TeamsPage';
import TeamPage from '../../../pages/TeamPage';

const { Content } = AntLayout;

const StyledLayout = styled(AntLayout)`
  background-color: white;
`;

const Layout = () => {
  const path = useLocation();
  const activeMenuTab = path.pathname.includes('table') ? 'table' : 'teams';

  return (
    <StyledLayout>
      <FootballHeader activeMenuTab={activeMenuTab} />
      <Content>
        <Switch>
          <Route path="/teams/:team_id" component={TeamPage} />
          <Route path="/teams" component={TeamsPage} />
          <Route path="/table" component={TablePage} />
          <Redirect from="/" to="/table" />
        </Switch>
      </Content>
    </StyledLayout>
  );
};

export default Layout;

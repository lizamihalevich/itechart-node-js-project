import React from 'react';
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

const Layout = () => {
  return (
    <StyledLayout>
      <FootballHeader />
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

export default Layout;

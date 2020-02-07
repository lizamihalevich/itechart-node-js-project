import React from 'react';
import { Layout as AntLayout } from 'antd';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import FootballHeader from '../../../features/FootballHeader';
import TablePage from '../../../features/Table';
import TeamsPage from '../../../features/Teams';

const StyledLayout = styled(AntLayout)`
  background-color: white;
`;

const Layout = () => {
  const { Content } = AntLayout;

  return (
    <StyledLayout>
      <FootballHeader />
      <Content>
        <Switch>
          <Route path="/table" component={TablePage} />
          <Route path="/teams" component={TeamsPage} />
        </Switch>
      </Content>
    </StyledLayout>
  );
};

export default Layout;

import React from 'react';
import { Layout as AntLayout } from 'antd';
import styled from 'styled-components';
// import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import FootballHeader from '../../../features/FootballHeader';
import TablePage from '../../../features/Table';
import TeamsPage from '../../../features/Teams';

// import { TABLE } from '../../../features/FootballHeader/constants';

const StyledLayout = styled(AntLayout)`
  background-color: white;
`;

const Layout = () => {
  const { Content } = AntLayout;

  // const page = useSelector(state => state.header.page);
  // const content = page === TABLE ? <TablePage /> : <TeamsPage />;
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

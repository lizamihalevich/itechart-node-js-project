import React from 'react';
import { Layout as AntLayout } from 'antd';
import styled from 'styled-components';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import FootballHeader from '../../../features/FootballHeader';
import TablePage from '../../../pages/TablePage';
import TeamsPage from '../../../pages/TeamsPage';
import TeamPage from '../../../pages/TeamPage';
import SignInPage from '../../../pages/SignInPage';
import SignUpPage from '../../../pages/SignUpPage';
import UserProfile from '../../../pages/UserProfilePage';
// import { post } from '../../../utils/requestFootballApi';

const { Content } = AntLayout;

const StyledLayout = styled(AntLayout)`
  background-color: white;
`;

const Layout = () => {
  const path = useLocation();
  const activeMenuTab = path.pathname.includes('table') ? 'table' : 'teams';

  // useEffect(() => {
  //   const sendReq = async () => {
  //     const response = await post('http://localhost:3000/api/data', {
  //       data: {
  //         name: 'makarena'
  //       }
  //     });
  //     // console.log(response);
  //   };
  //   sendReq();
  // }, []);

  return (
    <StyledLayout>
      <FootballHeader activeMenuTab={activeMenuTab} />
      <Content>
        <Switch>
          <Route path="/teams/:team_id" component={TeamPage} />
          <Route path="/teams" component={TeamsPage} />
          <Route path="/table" component={TablePage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/my-profile" component={UserProfile} />
          <Redirect from="/" to="/table" />
        </Switch>
      </Content>
    </StyledLayout>
  );
};

export default Layout;

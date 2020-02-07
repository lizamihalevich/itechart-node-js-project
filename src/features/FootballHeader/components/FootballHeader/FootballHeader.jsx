import React from 'react';

import { Layout, Menu, Button } from 'antd';
import styled from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import setPage from '../../actions';

// import { PAGES } from '../../constants';

const { Header } = Layout;

const HeaderSummary = styled.div`
  display: flex;
`;

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  color: white;
`;

const StyledH1 = styled.h1`
  margin: 0 20px;
  color: white;
`;

const Authentication = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin: 0 10px;
`;

const FootballHeader = () => {
  // const dispatch = useDispatch();
  // const selectedKey = useSelector(state => state.header.page);

  // const menuItems = Object.keys(PAGES).map(page => (
  //   <Menu.Item key={page} onClick={() => dispatch(setPage(page))}>
  //     {PAGES[page]}
  //   </Menu.Item>
  // ));

  return (
    <StyledHeader>
      <HeaderSummary>
        <StyledH1>Football statistics</StyledH1>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Link to="/table">table</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/teams">teams</Link>
          </Menu.Item>
        </Menu>
      </HeaderSummary>

      <Authentication>
        <StyledButton type="primary">Sign In</StyledButton>
        <div>or</div>
        <StyledButton type="primary">Sign Up</StyledButton>
      </Authentication>
    </StyledHeader>
  );
};

export default FootballHeader;

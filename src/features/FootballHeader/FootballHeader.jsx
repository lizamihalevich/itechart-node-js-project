import React from 'react';

import { Layout, Menu, Button } from 'antd';
import styled from 'styled-components';

const FootballHeader = () => {
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
          <Menu.Item key="1">table</Menu.Item>
          <Menu.Item key="2">teams</Menu.Item>
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

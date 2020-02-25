import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Menu, Button } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const FootballHeader = ({ activeMenuTab }) => {
  return (
    <StyledHeader>
      <HeaderSummary>
        <StyledH1>Football statistics</StyledH1>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[activeMenuTab]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="table">
            <Link to="/table">table</Link>
          </Menu.Item>
          <Menu.Item key="teams">
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

FootballHeader.propTypes = {
  activeMenuTab: PropTypes.string
};

FootballHeader.defaultProps = {
  activeMenuTab: 'table'
};

export default FootballHeader;

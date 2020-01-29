import React from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';

const LeagueSelector = () => {
  const StyledMenu = styled(Menu)`
    width: 50%;
    margin: 30px auto 0 auto;
    display: flex;
    justify-content: space-between;
  `;
  return (
    <StyledMenu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">English Premier League</Menu.Item>
      <Menu.Item key="2">German 1. Bundesliga</Menu.Item>
      <Menu.Item key="3">Spanish Primera</Menu.Item>
      <Menu.Item key="4">Italian Serie A</Menu.Item>
      <Menu.Item key="5">French League 1</Menu.Item>
    </StyledMenu>
  );
};

export default LeagueSelector;

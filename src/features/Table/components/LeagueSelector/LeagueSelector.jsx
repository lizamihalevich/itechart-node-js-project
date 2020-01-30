import React from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setLeague } from '../../actions';
import { LEAGUES, ENGLISH_PREMIER_LEAGUE } from '../../constants/leagues';

const LeagueSelector = () => {
  const StyledMenu = styled(Menu)`
    width: 50%;
    margin: 30px auto 0 auto;
    display: flex;
    justify-content: space-between;
  `;

  const dispatch = useDispatch();

  const menuItems = Object.keys(LEAGUES).map(league => (
    <Menu.Item key={league} onClick={() => dispatch(setLeague(league))}>
      {LEAGUES[league]}
    </Menu.Item>
  ));

  return (
    <StyledMenu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[ENGLISH_PREMIER_LEAGUE]}
    >
      {menuItems}
    </StyledMenu>
  );
};

export default LeagueSelector;

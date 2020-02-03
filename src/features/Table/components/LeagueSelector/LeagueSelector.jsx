import React from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getTableData } from '../../actions';
import { LEAGUES_IDS } from '../../../constants/leagues';

const StyledMenu = styled(Menu)`
  width: 50%;
  margin: 30px auto 0 auto;
  display: flex;
  justify-content: space-between;
`;

const LeagueSelector = () => {
  const dispatch = useDispatch();
  const currentLeague = useSelector(state => state.table.leagueId);

  const menuItems = Object.keys(LEAGUES_IDS).map(league => (
    <Menu.Item
      key={LEAGUES_IDS[league]}
      onClick={() => dispatch(getTableData(LEAGUES_IDS[league], league))}
    >
      {league}
    </Menu.Item>
  ));

  return (
    <StyledMenu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[currentLeague]}
    >
      {menuItems}
    </StyledMenu>
  );
};

export default LeagueSelector;

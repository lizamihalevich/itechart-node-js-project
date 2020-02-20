import React from 'react';
import { Menu, message } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setLeagueTeams } from '../../actions';
import { LEAGUES_IDS } from '../../../../constants/leagues';

const StyledMenu = styled(Menu)`
  max-width: 1000px;
  width: 100%;
  margin: 30px auto 0 auto;
  display: flex;
  justify-content: space-between;
`;

const LeagueSelector = () => {
  const dispatch = useDispatch();
  const currentLeague = useSelector(state => state.table.leagueId);
  const isFailed = useSelector(state => state.table.isFailed);

  const menuItems = Object.keys(LEAGUES_IDS).map(league => (
    <Menu.Item
      key={LEAGUES_IDS[league]}
      onClick={() => {
        dispatch(setLeagueTeams(LEAGUES_IDS[league]));
        if (isFailed) {
          message.error('Failed to load the data');
        }
      }}
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

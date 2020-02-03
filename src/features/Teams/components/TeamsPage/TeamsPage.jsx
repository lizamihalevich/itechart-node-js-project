import React from 'react';

import { Select, Layout } from 'antd';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { LEAGUES_IDS } from '../../../constants/leagues';
import TeamsList from '../TeamsList';
import { setTeamsLeague } from '../../actions';

const { Option } = Select;
const { Header } = Layout;

const StyledSelect = styled(Select)`
  width: 250px;
  margin-bottom: 15px;
`;

const StyledLayout = styled(Layout)`
  background-color: white;
  width: 50%;
  margin: 0 auto;
`;

const StyledHeader = styled(Header)`
  margin: 30px auto;
  width: 100%;
  color: white;
  font-size: 20px;
  font-weight: 500;
`;

const TeamsPage = () => {
  const currentLeague = useSelector(state => state.teams.league);
  const dispatch = useDispatch();

  const handleChange = league => {
    dispatch(setTeamsLeague(league.label));
  };

  const leagues = Object.keys(LEAGUES_IDS).map(league => (
    <Option key={league} value={league}>
      {league}
    </Option>
  ));

  return (
    <StyledLayout>
      <StyledHeader>{currentLeague}</StyledHeader>
      <StyledSelect
        labelInValue
        onChange={handleChange}
        defaultValue={{ key: currentLeague }}
      >
        {leagues}
      </StyledSelect>
      <TeamsList />
    </StyledLayout>
  );
};

export default TeamsPage;

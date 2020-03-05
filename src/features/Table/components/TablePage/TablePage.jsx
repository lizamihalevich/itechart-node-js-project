import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeagueSelector from '../LeagueSelector';
import LeagueSummary from '../LeagueSummary';
import { setLeagueTeams } from '../../actions';

const TablePage = () => {
  const leagueId = useSelector(state => state.table.leagueId);
  const dispatch = useDispatch();

  useEffect(() => dispatch(setLeagueTeams(leagueId)), []);

  return (
    <>
      <LeagueSelector />
      <LeagueSummary />
    </>
  );
};

export default TablePage;

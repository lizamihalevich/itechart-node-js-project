import React, { useEffect } from 'react';

import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TeamPageHeader from '../TeamPageHeader';
import PlayersList from '../PlayersList';
import StandingsList from '../StandingsList/StandingsList';
import { getTeamData } from '../../actions';

const TeamPage = ({ match: { params } }) => {
  const { path } = useRouteMatch();
  const teamId = params.team_id;

  const teamData = useSelector(state => state.team.teamData);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getTeamData(teamId)), []);

  return (
    <>
      <TeamPageHeader
        src={teamData.crestUrl}
        title={teamData.name}
        shortName={teamData.shortName}
      />
      <Switch>
        <Route path={`${path}/players`} component={PlayersList} />
        <Route path={`${path}/standings`} component={StandingsList} />
        <Redirect from={path} to={`${path}/players`} />
      </Switch>
    </>
  );
};

export default TeamPage;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TeamPageHeader from '../TeamPageHeader';
import PlayersList from '../PlayersList';
import StandingsList from '../StandingsList/StandingsList';
import { getTeamData } from '../../actions';

const TeamPage = ({ match: { params }, location: { pathname } }) => {
  const { path } = useRouteMatch();
  console.log(pathname);
  const teamId = params.team_id;
  const teamData = useSelector(state => state.team.teamData);
  // const squad = useSelector(state => squadDataDisplaySelector(state));

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
        <Route path={`${path}/players`}>
          <PlayersList squad={teamData.squad} />
        </Route>
        <Route path={`${path}/standings`}>
          <StandingsList teamId={teamId} />
        </Route>
        <Redirect from={path} to={`${path}/players`} />
      </Switch>
    </>
  );
};

TeamPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      team_id: PropTypes.string
    })
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};
export default TeamPage;

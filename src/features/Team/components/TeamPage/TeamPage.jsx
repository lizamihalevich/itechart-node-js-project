import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TeamPageHeader from '../TeamPageHeader';
import PlayersList from '../PlayersList';
import StandingsList from '../StandingsList/StandingsList';
import { setTeamInfo, setStandingsInfo } from '../../actions';

const TeamPage = ({ match: { params } }) => {
  const teamId = params.team_id;
  const teamData = useSelector(state => state.team.teamData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTeamInfo(teamId));
    dispatch(setStandingsInfo(teamId));
  }, []);

  return (
    <>
      <TeamPageHeader
        src={teamData.crestUrl}
        title={teamData.name}
        shortName={teamData.shortName}
      />
      <Switch>
        <Route path="/teams/:team_id/players">
          <PlayersList />
        </Route>
        <Route path="/teams/:team_id/standings">
          <StandingsList />
        </Route>
        <Redirect from="/teams/:team_id" to="/teams/:team_id/players" />
      </Switch>
    </>
  );
};

TeamPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      team_id: PropTypes.string.isRequired
    })
  })
};

export default TeamPage;

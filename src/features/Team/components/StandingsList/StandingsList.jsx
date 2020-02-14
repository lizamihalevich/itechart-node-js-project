import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import StandingCard from '../StandingCard';
import ListHeader from '../ListHeader';
import { setStandingsRange, getStandingsData } from '../../actions';
import { standingsBetweenRangeSelector } from '../../selectors';

const { RangePicker } = DatePicker;

const RangePickerWrap = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
`;

const StyledRangePicker = styled(RangePicker)`
  max-width: 600px;
  width: 100%;
`;

const StandingsList = ({ teamId }) => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getStandingsData(teamId)), []);

  const handleDatePickerChange = value => {
    dispatch(
      setStandingsRange([moment(value[0]).format(), moment(value[1]).format()])
    );
  };

  const standingsRange = useSelector(state => state.team.standingsRange);

  const standingsBetweenRange = useSelector(state =>
    standingsBetweenRangeSelector(state)
  );

  const standingCards = standingsBetweenRange.map(match => (
    <StandingCard
      key={match.id}
      homeTeamName={match.homeTeam.name}
      awayTeamName={match.awayTeam.name}
      score={
        match.status === 'FINISHED'
          ? `${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}`
          : ''
      }
      date={moment(match.utcDate).format('LLLL')}
    />
  ));

  return (
    <>
      <ListHeader pageName="Standings" />
      <RangePickerWrap>
        <StyledRangePicker
          onChange={handleDatePickerChange}
          defaultValue={[moment(standingsRange[0]), moment(standingsRange[1])]}
        />
      </RangePickerWrap>
      {standingCards};
    </>
  );
};

StandingsList.propTypes = {
  teamId: PropTypes.string
};
export default StandingsList;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DatePicker, Pagination, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import StandingCard from '../StandingCard';
import ListHeader from '../ListHeader';
import {
  setStandingsRange,
  setStandingsInfo,
  setCurrentStandingsPage,
  setCurrentStandingsList,
  setTotalStandingsNumber
} from '../../actions';
import { standingsBetweenRangeSelector } from '../../selectors';
import { LIST_OFFSET } from '../../../../constants/teamLists';

const { RangePicker } = DatePicker;

const RangePickerWrap = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
`;

const StyledPagination = styled(Pagination)`
  margin: 15px;
  display: flex;
  justify-content: center;
`;

const StyledRangePicker = styled(RangePicker)`
  max-width: 600px;
  width: 100%;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledSpin = styled(Spin)`
  margin: 20px auto;
`;

const StandingsList = ({ teamId }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.team.currentStandingsPage);
  const standingsRange = useSelector(state => state.team.standingsRange);
  const standingsBetweenRange = useSelector(state =>
    standingsBetweenRangeSelector(state)
  );
  const currentStandingsList = useSelector(
    state => state.team.currentStandingsList
  );
  const totalStandingsNumber = useSelector(
    state => state.team.totalStandingsNumber
  );
  const isLoading = useSelector(state => state.team.playersIsLoading);

  useEffect(() => {
    dispatch(setStandingsInfo(teamId));
    dispatch(
      setCurrentStandingsList(standingsBetweenRange.slice(0, LIST_OFFSET))
    );
    dispatch(setTotalStandingsNumber(standingsBetweenRange.length));
  }, [standingsBetweenRange]);

  const handleDatePickerChange = value => {
    dispatch(
      setStandingsRange([moment(value[0]).format(), moment(value[1]).format()])
    );
  };

  const onPaginationChange = page => {
    dispatch(setCurrentStandingsPage(page));
    dispatch(
      setCurrentStandingsList(
        standingsBetweenRange.slice(
          (page - 1) * LIST_OFFSET,
          page * LIST_OFFSET
        )
      )
    );
  };

  const standingCards = currentStandingsList.map(match => (
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

  const pagination = (
    <StyledPagination
      defaultCurrent={1}
      defaultPageSize={LIST_OFFSET}
      hideOnSinglePage
      total={totalStandingsNumber}
      current={currentPage}
      onChange={onPaginationChange}
    />
  );

  return (
    <>
      <ListHeader pageName="Standings" />
      <RangePickerWrap>
        <StyledRangePicker
          onChange={handleDatePickerChange}
          defaultValue={[moment(standingsRange[0]), moment(standingsRange[1])]}
        />
      </RangePickerWrap>
      {isLoading ? (
        <StyledDiv>
          <StyledSpin size="large" />
        </StyledDiv>
      ) : (
        <>
          {pagination}
          {standingCards}
          {pagination}
        </>
      )}
    </>
  );
};

StandingsList.propTypes = {
  teamId: PropTypes.string
};

StandingsList.defaultProps = {
  teamId: ''
};

export default StandingsList;

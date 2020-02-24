import React, { useEffect } from 'react';
import { DatePicker, Pagination, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import StandingCard from '../StandingCard';
import ListHeader from '../ListHeader';
import { setCurrentStandingsPage, setStandingsList } from '../../actions';
import { currentStandingsListSelector } from '../../selectors';
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

const StandingsList = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.team.currentStandingsPage);
  const standingsRange = useSelector(state => state.team.standingsRange);
  const standings = useSelector(state => state.team.standings);

  const currentStandingsList = useSelector(state =>
    currentStandingsListSelector(state)
  );
  const totalStandingsNumber = useSelector(
    state => state.team.totalStandingsNumber
  );
  const isLoading = useSelector(state => state.team.standingsIsLoading);

  useEffect(() => {
    dispatch(setCurrentStandingsPage(1));
    dispatch(setStandingsList(standingsRange));
  }, [standings]);

  const handleDatePickerChange = value => {
    dispatch(
      setStandingsList([moment(value[0]).format(), moment(value[1]).format()])
    );
  };

  const onPaginationChange = page => {
    dispatch(setCurrentStandingsPage(page));
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

export default StandingsList;

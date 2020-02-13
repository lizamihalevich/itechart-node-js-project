import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import StandingCard from '../StandingCard';
import ListHeader from '../ListHeader';
import { setStandingsRange, getStandingsData } from '../../actions';
import {
  standingsDuringDateSelector,
  standingsSelector
} from '../../selectors';

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

  const standings = useSelector(state => standingsSelector(state));

  console.log(standings);
  return (
    <>
      <ListHeader pageName="Standings" />
      <RangePickerWrap>
        <StyledRangePicker
          onChange={handleDatePickerChange}
          defaultValue={[moment(), moment().add(2, 'w')]}
        />
      </RangePickerWrap>
      <StandingCard />;
    </>
  );
};

StandingsList.propTypes = {
  teamId: PropTypes.string
};
export default StandingsList;

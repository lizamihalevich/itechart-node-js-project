import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  max-width: 600px;
  margin: 20px auto;
  width: 100%;
`;
const StandingCard = ({ homeTeamName, awayTeamName, score, date }) => {
  return (
    <StyledCard>
      <p>{`${homeTeamName} - ${awayTeamName} ${score}`}</p>
      <p>{date}</p>
    </StyledCard>
  );
};

StandingCard.defaultProps = {
  homeTeamName: '',
  awayTeamName: '',
  score: '',
  date: ''
};

StandingCard.propTypes = {
  homeTeamName: PropTypes.string,
  awayTeamName: PropTypes.string,
  score: PropTypes.string,
  date: PropTypes.string
};
export default StandingCard;

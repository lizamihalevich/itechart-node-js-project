import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import styled from 'styled-components';
import moment from 'moment';

const { Meta } = Card;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  width: 50px;
  height: 50px;
  font-weight: bold;
  background-color: #e6f7ff;
  color: #1890ff;
`;

const StyledParagraph = styled.p`
  margin-top: 5px;
  margin-bottom: 0;
  font-size: 16px;
`;

const StyledTitle = styled.div`
  font-size: 25px;
`;

const PlayerCard = ({ name, position, birthDate, squadNumber }) => {
  const birthDateParsed = moment(birthDate)
    .utc()
    .format('DD-MM-YYYY');
  const shirtNumber = squadNumber || 'N/A';

  return (
    <StyledCard>
      <Meta
        avatar={<StyledDiv>{shirtNumber}</StyledDiv>}
        title={<StyledTitle>{name}</StyledTitle>}
      />
      <StyledParagraph>{`Position: ${position}`}</StyledParagraph>
      <StyledParagraph>{`Date of birth: ${birthDateParsed}`}</StyledParagraph>
    </StyledCard>
  );
};

PlayerCard.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  birthDate: PropTypes.string,
  squadNumber: PropTypes.number
};

PlayerCard.defaultProps = {
  name: 'No data',
  position: 'No data',
  birthDate: 'No data',
  squadNumber: null
};

export default PlayerCard;

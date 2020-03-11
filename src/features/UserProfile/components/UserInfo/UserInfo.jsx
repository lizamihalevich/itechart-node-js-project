import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: 60%;
  margin: 30px auto;
`;

const StyledCardContainer = styled.div`
  display: flex;
`;

const StyledUserInfo = styled.div`
  margin-left: 24px;
`;

const UserInfo = () => {
  return (
    <StyledCard>
      <StyledCardContainer>
        <img
          alt="avatar"
          src="https://miro.medium.com/max/480/0*WK_vAxJo4O7Kdq3j.png"
        />
        <StyledUserInfo>
          <h1>Name Surname</h1>
          <p>Date of birth: </p>
        </StyledUserInfo>
      </StyledCardContainer>
    </StyledCard>
  );
};

export default UserInfo;

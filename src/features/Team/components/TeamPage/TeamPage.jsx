import React from 'react';

import styled from 'styled-components';
import { Layout } from 'antd';
import TeamPageHeader from '../TeamPageHeader';

const { Header } = Layout;

const StyledLayout = styled(Layout)`
  background-color: white;
`;

const StyledHeader = styled(Header)`
  width: 40%;
  margin: 0 auto;
  color: white;
  font-size: 20px;
  font-weight: 500;
`;

const TeamPage = () => {
  return (
    <>
      <TeamPageHeader
        src="http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
        title="Arsenal"
        shortName="Arsenal"
      />
      <StyledLayout>
        <StyledHeader>Players</StyledHeader>
      </StyledLayout>
    </>
  );
};

export default TeamPage;

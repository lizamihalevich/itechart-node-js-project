import React from 'react';

import styled from 'styled-components';
import { Layout } from 'antd';
import TeamPageHeader from '../TeamPageHeader';
import PlayersList from '../PlayersList';

const { Header } = Layout;

const StyledLayout = styled(Layout)`
  background-color: white;
`;

const StyledHeader = styled(Header)`
  width: 100%;
  max-width: 600px;
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
      <PlayersList />
    </>
  );
};

export default TeamPage;

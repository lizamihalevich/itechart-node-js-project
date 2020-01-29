import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import FootballHeader from '../../features/FootballHeader';
import TablePage from '../../features/Table/components/TablePage';
import TeamsList from '../../features/Teams/components/TeamsList';

const FootballLayout = () => {
  const { Content } = Layout;

  const StyledLayout = styled(Layout)`
    background-color: white;
  `;

  return (
    <StyledLayout>
      <FootballHeader />
      <Content>
        <TablePage />
        <TeamsList />
      </Content>
    </StyledLayout>
  );
};

export default FootballLayout;

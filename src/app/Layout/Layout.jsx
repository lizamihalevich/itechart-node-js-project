import React from 'react';
import { Layout as AntLayout } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import FootballHeader from '../../features/FootballHeader/components/FootballHeader';
import TablePage from '../../features/Table/components/TablePage';
import TeamsList from '../../features/Teams/components/TeamsList';

import { TABLE } from '../../features/FootballHeader/constants';

const StyledLayout = styled(AntLayout)`
  background-color: white;
`;

const FootballLayout = () => {
  const { Content } = AntLayout;

  const page = useSelector(state => state.header.page);
  const content = page === TABLE ? <TablePage /> : <TeamsList />;
  return (
    <StyledLayout>
      <FootballHeader />
      <Content>{content}</Content>
    </StyledLayout>
  );
};

export default FootballLayout;

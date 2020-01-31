import React from 'react';

import { Table } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import columns from '../../utils/tableColumns.jsx';
import { tableStandingsSelector } from '../../selectors';

const Styledtable = styled(Table)`
  margin: 0 auto;
  width: 50%;
`;

const LeagueSummary = () => {
  const data = useSelector(state => tableStandingsSelector(state));

  return <Styledtable pagination={false} columns={columns} dataSource={data} />;
};

export default LeagueSummary;

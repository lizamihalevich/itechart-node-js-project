import React from 'react';

import { Table } from 'antd';
import styled from 'styled-components';
import columns from '../../utils/tableColumns.jsx';

const LeagueSummary = () => {
  const Styledtable = styled(Table)`
    margin: 0 auto;
    width: 50%;
  `;
  const data = [
    {
      key: '1',
      position: 1,
      team: 'team',
      g: 38,
      w: 30,
      d: 4,
      l: 5,
      gs: 4,
      gc: 5,
      p: 98
    },
    {
      key: '2',
      position: 1,
      team: 'team',
      g: 38,
      w: 30,
      d: 4,
      l: 5,
      gs: 4,
      gc: 5,
      p: 98
    }
  ];
  return <Styledtable columns={columns} dataSource={data} />;
};

export default LeagueSummary;

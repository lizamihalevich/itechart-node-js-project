import React, { useEffect } from 'react';

import { Table } from 'antd';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { tableStandingsSelector } from '../../selectors';
import { getTableData } from '../../actions';

const columns = [
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position',
    align: 'center'
  },
  {
    title: 'Team',
    dataIndex: 'team',
    key: 'team',
    width: '30%',
    align: 'center',
    render: text => <a>{text}</a>
  },
  {
    title: 'G',
    dataIndex: 'g',
    key: 'g',
    align: 'center'
  },
  {
    title: 'W',
    key: 'w',
    dataIndex: 'w',
    align: 'center'
  },
  {
    title: 'D',
    dataIndex: 'd',
    key: 'd',
    align: 'center'
  },
  {
    title: 'L',
    dataIndex: 'l',
    key: 'l',
    align: 'center'
  },
  {
    title: 'GS',
    dataIndex: 'gs',
    key: 'gs',
    align: 'center'
  },
  {
    title: 'GC',
    dataIndex: 'gc',
    key: 'gc',
    align: 'center'
  },
  {
    title: 'P',
    dataIndex: 'p',
    key: 'p',
    align: 'center'
  }
];

const Styledtable = styled(Table)`
  margin: 0 auto 30px auto;
  max-width: 1000px;
  width: 100%;
`;

const LeagueSummary = () => {
  const data = useSelector(state => tableStandingsSelector(state));
  const leagueId = useSelector(state => state.table.leagueId);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getTableData(leagueId)), []);

  return <Styledtable pagination={false} columns={columns} dataSource={data} />;
};

export default LeagueSummary;

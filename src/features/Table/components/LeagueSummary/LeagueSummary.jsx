import React from 'react';

import { Table, message } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { tableStandingsSelector } from '../../selectors';

const Styledtable = styled(Table)`
  margin: 0 auto 30px auto;
  max-width: 1000px;
  width: 100%;
`;

const LeagueSummary = () => {
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
      render: (text, record) => <Link to={`/teams/${record.id}`}>{text}</Link>
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

  const data = useSelector(state => tableStandingsSelector(state));
  const isLoading = useSelector(state => state.table.isLoading);
  // const isFailed = useSelector(state => state.table.isFailed);

  // if (isFailed) {
  //   message.error('Failed to load the data');
  // }

  return (
    <>
      <Styledtable
        pagination={false}
        columns={columns}
        dataSource={data}
        loading={isLoading}
      />
    </>
  );
};

export default LeagueSummary;

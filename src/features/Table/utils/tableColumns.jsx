import React from 'react';

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

export default columns;

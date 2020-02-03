import React, { useEffect } from 'react';

import { Table } from 'antd';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import columns from '../../utils/tableColumns.jsx';
import { tableStandingsSelector } from '../../selectors';
import { getTableData } from '../../actions';

const Styledtable = styled(Table)`
  margin: 0 auto 30px auto;
  width: 50%;
`;

const LeagueSummary = () => {
  const data = useSelector(state => tableStandingsSelector(state));
  const leagueId = useSelector(state => state.table.leagueId);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getTableData(leagueId)), []);

  return <Styledtable pagination={false} columns={columns} dataSource={data} />;
};

export default LeagueSummary;

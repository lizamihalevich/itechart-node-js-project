import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Layout } from 'antd';

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

const ListHeader = ({ pageName }) => {
  return (
    <StyledLayout>
      <StyledHeader>{pageName}</StyledHeader>
    </StyledLayout>
  );
};

ListHeader.propTypes = {
  pageName: PropTypes.string
};

ListHeader.defaultProps = {
  pageName: ''
};

export default ListHeader;

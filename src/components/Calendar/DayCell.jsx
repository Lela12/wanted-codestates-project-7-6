import React from 'react';
import styled from 'styled-components';

const DayCell = ({ children }) => {
  return <StyledDayCell>{children}</StyledDayCell>;
};

const StyledDayCell = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export default DayCell;

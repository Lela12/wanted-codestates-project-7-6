import React from 'react';
import styled from 'styled-components';
import Calender from './Calendar';

const CalenderView = () => {
  return (
    <>
      <Calender order={0} />
      <Divider />
      <Calender order={1} />
    </>
  );
};

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.backgroundGray};
`;

export default CalenderView;

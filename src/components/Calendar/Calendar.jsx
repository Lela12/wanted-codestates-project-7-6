import React from 'react';
import styled from 'styled-components';
import CalenderBody from './CalendarBody';
import CalenderHeader from './CalendarHeader';

const Calender = ({ order }) => {
  return (
    <CalenderStyled>
      <CalenderHeader order={order} />
      <CalenderBody order={order} />
    </CalenderStyled>
  );
};

const CalenderStyled = styled.div`
  margin: 48px 0;
`;

export default Calender;

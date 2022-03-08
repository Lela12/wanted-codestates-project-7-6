import React, { useContext } from 'react';
import styled from 'styled-components';
import DateContext from '../../context/DateContext';
import DayCell from './DayCell';
import { DAYS_OF_WEEK } from '../../constants/date';

const CalenderBody = ({ order }) => {
  const { getWeekElements } = useContext(DateContext);
  const weekElements = getWeekElements(order);

  return (
    <BodyWrapper>
      <WeekTitle>
        {DAYS_OF_WEEK.map((day) => (
          <DayCell key={day}>{day}</DayCell>
        ))}
      </WeekTitle>
      {weekElements}
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  font-size: 18px;
  line-height: 156%;
`;

const WeekTitle = styled.div`
  display: flex;
  margin: 16px 0;
`;

export default CalenderBody;

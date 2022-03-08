import React, { useContext } from 'react';
import styled from 'styled-components';
import DateContext from '../../context/DateContext';
import { ReactComponent as NextMonthButton } from '../../assets/next_month_icon.svg';
import { ReactComponent as PrevMonthButton } from '../../assets/prev_month_icon.svg';

const CalenderHeader = ({ order }) => {
  const { year, month, onNextMonth, onPrevMonth } = useContext(DateContext);
  return (
    <CalenderHeaderStyled>
      <PrevMonthButton onClick={onPrevMonth} />
      <Title>
        {year[order]}년 {month[order] + 1}월
      </Title>
      <NextMonthButton onClick={onNextMonth} />
    </CalenderHeaderStyled>
  );
};

const CalenderHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
  }
`;

const Title = styled.h2`
  width: 126px;
  font-size: 24px;
  text-align: center;
  line-height: 1.5;
  margin: 0 32px;
`;

export default CalenderHeader;

import React, { useContext, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import DateContext from '../../context/DateContext';
import { NOT_INCLUDED, INCLUDED, INCLUDED_BEGIN, INCLUDED_END } from '../../constants/date';

const Day = ({ day, order }) => {
  const [selected, setSelected] = useState();
  const [included, setIncluded] = useState(0);
  const [outdated, setOutdated] = useState(false);
  const { today, startDate, endDate, onSelectDate, getCurrentDate, isSameDate } =
    useContext(DateContext);
  const current = getCurrentDate(order, day);
  const isToday = isSameDate(current, today);

  const onDayClick = () => {
    if (outdated) return;
    onSelectDate(day, order);
  };

  useEffect(() => {
    if (current < today && !isToday) setOutdated(true);
  }, [current, today, isToday]);

  useEffect(() => {
    if (isSameDate(current, startDate)) {
      setSelected(true);
      endDate ? setIncluded(INCLUDED_BEGIN) : setIncluded(NOT_INCLUDED);
    } else if (isSameDate(current, endDate)) {
      setSelected(true);
      setIncluded(INCLUDED_END);
    } else if (current >= startDate && current <= endDate) {
      setSelected(false);
      setIncluded(INCLUDED);
    } else {
      setSelected(false);
      setIncluded(NOT_INCLUDED);
    }
  }, [startDate, endDate, current, isSameDate]);

  return (
    <DayStyled
      isToday={isToday}
      selected={selected}
      included={included}
      outdated={outdated}
      onClick={onDayClick}
    >
      {day}
    </DayStyled>
  );
};

const DaysSelected = css`
  content: '';
  position: absolute;
  background: ${({ theme }) => theme.subColor};
  height: 100%;
  z-index: -1;
`;

const DayStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ selected }) => (selected ? '#fff' : 'inherit')};
  background-color: ${({ selected, isToday, theme }) =>
    selected ? theme.mainColor : isToday ? theme.backgroundGray : ''};
  border-radius: 100%;
  cursor: pointer;
  position: relative;

  &::after {
    ${({ included }) => (included ? DaysSelected : '')};
    ${({ included }) => (included === INCLUDED_BEGIN ? 'right' : 'left')}: 0;
    width: ${({ included }) => (included === INCLUDED ? '100%' : '50%')};
  }
  ${({ outdated, theme }) => (outdated ? `cursor: auto; color: ${theme.fontGray}` : '')};
`;

export default Day;

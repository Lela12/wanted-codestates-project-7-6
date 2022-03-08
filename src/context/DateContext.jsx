import React, { createContext, useState, useEffect } from 'react';
import uuid from 'react-uuid';
import DayCell from '../components/Calendar/DayCell';
import Day from '../components/Calendar/Day';
import Week from '../components/Calendar/Week';

const DateContext = createContext({
  today: new Date(),
  year: null,
  month: null,
  firstDay: null,
  numberOfDays: null,
});

const DateProvider = ({ children }) => {
  const today = new Date();
  const [year, setYear] = useState([today.getFullYear(), today.getFullYear()]);
  const [month, setMonth] = useState([today.getMonth(), today.getMonth() + 1]);
  const [firstDay, setFirstDay] = useState([
    new Date(year[0], month[0], 1).getDay(),
    new Date(year[1], month[1], 1).getDay(),
  ]);
  const [numberOfDays, setNumberOfDays] = useState([
    new Date(year[0], month[0] + 1, 0).getDate(),
    new Date(year[1], month[1] + 1, 0).getDate(),
  ]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onNextMonth = () => {
    setMonth((prev) =>
      prev.map((month, index) => {
        if (month >= 11) {
          setYear((prev) => prev.map((item, i) => (index === i ? item + 1 : item)));
          return 0;
        }
        return month + 1;
      })
    );
  };

  const onPrevMonth = () => {
    setMonth((prev) =>
      prev.map((month, index) => {
        if (month <= 0) {
          setYear((prev) => prev.map((item, i) => (index === i ? item - 1 : item)));
          return 11;
        }
        return month - 1;
      })
    );
  };

  const onSelectDate = (day, order) => {
    const date = new Date(year[order], month[order], day);
    if (!selectedDate) setStartDate(date);
    else if (!endDate && startDate < date) setEndDate(date);
    else if (!endDate && startDate > date) {
      setEndDate(startDate);
      setStartDate(date);
    } else if (startDate && endDate) {
      setStartDate(date);
      setEndDate(null);
    }
    setSelectedDate(date);
  };

  const getDayElements = (order) => {
    const days = [];
    for (let i = 0; i < firstDay[order]; i++) {
      days.push(<DayCell key={uuid()} />);
    }
    for (let i = 1; i <= numberOfDays[order]; i++) {
      days.push(
        <DayCell key={uuid()}>
          <Day day={i} order={order} />
        </DayCell>
      );
    }
    return days;
  };

  const getWeekElements = (order) => {
    const days = getDayElements(order);
    const weeks = [];
    for (let i = 0; i < 6; i++) {
      weeks.push(<Week key={uuid()}>{days.splice(0, 7)}</Week>);
    }
    return weeks;
  };

  const getCurrentDate = (order, day) => new Date(year[order], month[order], day);

  const isSameDate = (date1, date2) => date1?.toDateString() === date2?.toDateString();

  useEffect(() => {
    setFirstDay([new Date(year[0], month[0], 1).getDay(), new Date(year[1], month[1], 1).getDay()]);
    setNumberOfDays([
      new Date(year[0], month[0] + 1, 0).getDate(),
      new Date(year[1], month[1] + 1, 0).getDate(),
    ]);
  }, [month, year]);

  const value = {
    today,
    year,
    month,
    firstDay,
    numberOfDays,
    startDate,
    endDate,
    onNextMonth,
    onPrevMonth,
    onSelectDate,
    getWeekElements,
    getCurrentDate,
    isSameDate,
  };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export { DateProvider };
export default DateContext;

import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ko", ko);

const AirCalendar = ({ handleSetStartDate, handleSetEndDate }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDate = () => {
    let startMonth = startDate.getMonth() + 1;
    let startDay = startDate.getDate();
    let endMonth = endDate.getMonth() + 1;
    let endDay = endDate.getDate();
    handleSetStartDate(startMonth, startDay);
    handleSetEndDate(endMonth, endDay);
    console.log(startMonth, startDay, endMonth, endDay);
  };

  useEffect(() => {
    handleDate();
  }, [startDate, endDate]);
  console.log(startDate, endDate);
  return (
    <DatePickersWrapper>
      <DatePickerWrapper>
        <DatePicker
          locale="ko"
          shouldCloseOnSelect={false}
          dateFormat="yyyy.MM.dd(eee)"
          selected={startDate} // value
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          locale="ko"
          shouldCloseOnSelect={false}
          dateFormat="yyyy.MM.dd(eee)"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          endDate={endDate}
        />
      </DatePickerWrapper>
    </DatePickersWrapper>
  );
};

export default AirCalendar;

const DatePickersWrapper = styled.div`
  width: 290px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 3px;
`;

const DatePickerWrapper = styled.div`
  background-color: white;
`;

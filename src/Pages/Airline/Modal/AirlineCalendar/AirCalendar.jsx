import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ko", ko);

const AirCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  console.log(startDate, endDate);
  return (
    <>
      <DatePickerWrapper>
        <DatePicker
          locale="ko"
          shouldCloseOnSelect={false}
          dateFormat="yyyy.MM.dd(eee)"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          locale="ko"
          shouldCloseOnSelect={false}
          dateFormat="yyyy.MM.dd(eee)"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </DatePickerWrapper>
    </>
  );
};

export default AirCalendar;

const DatePickerWrapper = styled.div`
  width: 290px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

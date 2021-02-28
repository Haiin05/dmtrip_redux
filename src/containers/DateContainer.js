import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AirCalendar from "../Pages/Airline/Modal/AirlineCalendar/AirCalendar";
import { setStartDate, setEndDate } from "../modules/date";

function DateContainer() {
  const { startMonthNum, startDateNum, endMonthNum, endDateNum } = useSelector(
    (state) => ({
      startMonthNum: state.date.startMonthNum,
      startDateNum: state.date.startDateNum,
      endMonthNum: state.date.endMonthNum,
      endDateNum: state.date.endDateNum,
    })
  );

  const dispatch = useDispatch();
  const handleSetStartDate = (month, date) =>
    dispatch(setStartDate(month, date));
  const handleSetEndDate = (month, date) => dispatch(setEndDate(month, date));

  return (
    <AirCalendar
      startMonthNum={startMonthNum}
      startDateNum={startDateNum}
      endMonthNum={endMonthNum}
      endDateNum={endDateNum}
      handleSetStartDate={handleSetStartDate}
      handleSetEndDate={handleSetEndDate}
    />
  );
}

export default DateContainer;

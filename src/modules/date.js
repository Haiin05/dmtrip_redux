const START_DATE = "date/START_DATE";
const END_DATE = "date/END_DATE";

export const setStartDate = (month, date) => ({
  type: START_DATE,
  month: month,
  date: date,
});
export const setEndDate = (month, date) => ({
  type: END_DATE,
  month: month,
  date: date,
});

const initialState = {
  startMonthNum: null,
  startDateNum: null,
  endMonthNum: null,
  endDateNum: null,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case START_DATE:
      return {
        ...state,
        startMonthNum: action.month,
        startDateNum: action.date,
      };
    case END_DATE:
      return {
        ...state,
        endMonthNum: action.month,
        endDateNum: action.date,
      };

    default:
      return state;
  }
}

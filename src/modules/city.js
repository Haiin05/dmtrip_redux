const DEPARTURE_LOCATION = "city/DEPARTURE_LOCATION";
const ARRIVAL_LOCATION = "city/ARRIVAL_LOCATION";

export const departureLocation = (city) => ({
  type: DEPARTURE_LOCATION,
  text: city,
});
export const arrivalLocation = (city) => ({
  type: ARRIVAL_LOCATION,
  text: city,
});

const initialState = {
  departureCity: "서울",
  arrivalCity: null,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case DEPARTURE_LOCATION:
      return {
        ...state,
        departureCity: action.text,
      };
    case ARRIVAL_LOCATION:
      return {
        ...state,
        arrivalCity: action.text,
      };

    default:
      return state;
  }
}

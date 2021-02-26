import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ArrTable from "../Pages/Airline/Modal/ArrTable";
import { departureLocation, arrivalLocation } from "../modules/city";

function CityContainer({ departure, arrival }) {
  const { departureCity, arrivalCity } = useSelector((state) => ({
    departureCity: state.city.departureCity,
    arrivalCity: state.city.arrivalCity,
  }));

  const dispatch = useDispatch();
  const handleDepartureCity = (city) => dispatch(departureLocation(city));
  const handleArrivalCity = (city) => dispatch(arrivalLocation(city));

  return (
    <ArrTable
      departureCity={departureCity}
      arrivalCity={arrivalCity}
      handleDepartureCity={handleDepartureCity}
      handleArrivalCity={handleArrivalCity}
      departure={departure}
      arrival={arrival}
    />
  );
}

export default CityContainer;

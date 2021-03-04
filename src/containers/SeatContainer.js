import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SeatModal from "../Pages/Airline/Modal/SeatModal";
import {
  increaseAdult,
  increaseChildren,
  increaseInfant,
  decreaseAdult,
  decreaseChildren,
  decreaseInfant,
} from "../modules/seat";

function SeatContainer({ setModalStatus, modalStatus }) {
  const { adultNum, childrenNum, infantNum } = useSelector((state) => ({
    adultNum: state.seat.adultNum,
    childrenNum: state.seat.childrenNum,
    infantNum: state.seat.infantNum,
  }));

  const dispatch = useDispatch();

  const onIncreaseAdultNum = () => dispatch(increaseAdult());
  const onIncreaseChildrenNum = () => dispatch(increaseChildren());
  const onIncreaseInfantNum = () => dispatch(increaseInfant());
  const onDecreaseAdultNum = () => dispatch(decreaseAdult());
  const onDecreaseChildrenNum = () => dispatch(decreaseChildren());
  const onDecreaseInfantNum = () => dispatch(decreaseInfant());

  return (
    <SeatModal
      adultNum={adultNum}
      childrenNum={childrenNum}
      infantNum={infantNum}
      onIncreaseAdultNum={onIncreaseAdultNum}
      onIncreaseChildrenNum={onIncreaseChildrenNum}
      onIncreaseInfantNum={onIncreaseInfantNum}
      onDecreaseAdultNum={onDecreaseAdultNum}
      onDecreaseChildrenNum={onDecreaseChildrenNum}
      onDecreaseInfantNum={onDecreaseInfantNum}
      setModalStatus={setModalStatus}
      modalStatus={modalStatus}
    />
  );
}

export default SeatContainer;

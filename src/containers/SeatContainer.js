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

function SeatContainer({ showModal }) {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  const { adultNum, childrenNum, infantNum } = useSelector((state) => ({
    adultNum: state.seat.adultNum,
    childrenNum: state.seat.childrenNum,
    infantNum: state.seat.infantNum,
  }));

  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수들을 만드세요
  const onIncreaseAdultNum = () => dispatch(increaseAdult());
  const onIncreaseChildrenNum = () => dispatch(increaseChildren());
  const onIncreaseInfantNum = () => dispatch(increaseInfant());
  const onDecreaseAdultNum = () => dispatch(decreaseAdult());
  const onDecreaseChildrenNum = () => dispatch(decreaseChildren());
  const onDecreaseInfantNum = () => dispatch(decreaseInfant());

  return (
    <SeatModal
      // 상태와
      adultNum={adultNum}
      childrenNum={childrenNum}
      infantNum={infantNum}
      // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
      onIncreaseAdultNum={onIncreaseAdultNum}
      onIncreaseChildrenNum={onIncreaseChildrenNum}
      onIncreaseInfantNum={onIncreaseInfantNum}
      onDecreaseAdultNum={onDecreaseAdultNum}
      onDecreaseChildrenNum={onDecreaseChildrenNum}
      onDecreaseInfantNum={onDecreaseInfantNum}
      showModal={showModal}
    />
  );
}

export default SeatContainer;

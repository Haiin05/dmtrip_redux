import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import SeatList from "./components/SeatList";

const SeatModal = ({
  setModalStatus,
  modalStatus,
  adultNum,
  childrenNum,
  infantNum,
  onIncreaseAdultNum,
  onIncreaseChildrenNum,
  onIncreaseInfantNum,
  onDecreaseAdultNum,
  onDecreaseChildrenNum,
  onDecreaseInfantNum,
}) => {
  const seatListData = {
    data: [
      {
        type: "성인",
        typeDetail: "만 12세 이상",
        number: adultNum,
        onIncrease: onIncreaseAdultNum,
        onDecrease: onDecreaseAdultNum,
      },
      {
        type: "소아",
        typeDetail: "만 12세 미만",
        number: childrenNum,
        onIncrease: onIncreaseChildrenNum,
        onDecrease: onDecreaseChildrenNum,
      },
      {
        type: "유아",
        typeDetail: "24개월 미만",
        number: infantNum,
        onIncrease: onIncreaseInfantNum,
        onDecrease: onDecreaseInfantNum,
      },
    ],
  };
  useEffect(() => {
    handleAlert();
  }, [adultNum, childrenNum, infantNum]);

  const handleAlert = () => {
    adultNum + childrenNum + infantNum === 8 &&
      alert("좌석예약은 8명까지 가능합니다.");
  };
  return (
    <>
      <ModalLayer />
      <SeatModalWrapper>
        <Header>
          <h1>인원 & 좌석등급</h1>
          <button onClick={() => setModalStatus(!modalStatus)}>
            <i class="fas fa-times" />
          </button>
        </Header>
        <Body>
          <SeatList format={seatListData} />
        </Body>
      </SeatModalWrapper>
    </>
  );
};

export default withRouter(SeatModal);

const ModalLayer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 89;
  background: rgba(0, 0, 0, 0.4);
`;

const SeatModalWrapper = styled.div`
  width: 344px;
  height: 260px;
  position: absolute;
  top: 280px;
  left: 900px;
  z-index: 89;
  border: 1px solid ${({ theme }) => theme.Color.white};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.Color.white};
`;

const Header = styled.div`
  width: 344px;
  height: 64px;
  padding: 20px 24px 24px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  button {
    border: none;
    font-size: 20px;
    color: ${({ theme }) => theme.Color.grey[600]};
    background-color: white;
    cursor: pointer;

    :click {
      outline: none;
    }
  }
`;

const Body = styled.div`
  width: 344px;
  height: 257px;
  padding: 0 24px 24px 24px;
`;

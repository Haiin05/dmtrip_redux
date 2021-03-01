import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import CityInput from "./components/CityInput";
import SeatContainer from "../../../containers/SeatContainer";
import DateContainer from "../../../containers/DateContainer";
import styled from "styled-components";

const MainSearch = () => {
  const [modalStatus, setModalStatus] = useState({
    dep: false,
    arr: false,
    seat: false,
    calendar: false,
  });

  const { adultNum, childrenNum, infantNum } = useSelector(
    (state) => state.seat
  );

  const { departureCity, arrivalCity } = useSelector((state) => state.city);

  const cityInputData = {
    data: [
      {
        type: "text",
        id: "departure",
        placeholder: "김포",
        value: departureCity,
        onClick: () => setModalStatus({ dep: !modalStatus.dep }),
        modalStatus: modalStatus.dep,
      },
      {
        type: "text",
        id: "arrival",
        placeholder: "도착지가 어디인가요?",
        value: arrivalCity,
        onClick: () => setModalStatus({ arr: !modalStatus.arr }),
        modalStatus: modalStatus.arr,
      },
    ],
  };

  return (
    <Selectors>
      <CityInput
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        format={cityInputData}
      />
      <DateContainer
        onClick={() => setModalStatus({ calendar: !modalStatus.calendar })}
      />
      <SeatSelector>
        <SeatTitle onClick={() => setModalStatus({ seat: !modalStatus.seat })}>
          <div>
            <i class="far fa-user" />
            <span>승객 {adultNum + childrenNum + infantNum}명, 일반석</span>
          </div>
          <button>
            <i class="fas fa-chevron-down" />
          </button>
        </SeatTitle>
        {modalStatus.seat && (
          <SeatContainer
            setModalStatus={setModalStatus}
            modalStatus={modalStatus}
          />
        )}
      </SeatSelector>
    </Selectors>
  );
};

export default withRouter(MainSearch);

const Selectors = styled.div`
  width: 988px;
  display: flex;
  justify-content: space-between;

  margin: 20px 0;
`;

const CitySelector = styled.div`
  width: 422px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.Color.white};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.Color.white};

  input {
    width: 190px;
    height: 46px;
    font-size: 16px;
    font-weight: 600;
    padding-left: 14px;
    border: none;
    color: ${({ theme }) => theme.Color.grey[500]};

    :focus {
      outline: none;
    }

    ::placeholder {
      font-weight: 400;
      color: ${({ theme }) => theme.Color.grey[500]};
    }
  }
  button {
    width: 32px;
    height: 32px;
    border: none;
    color: ${({ theme }) => theme.Color.grey[600]};
    background-color: ${({ theme }) => theme.Color.grey[100]};
  }
`;

const SeatSelector = styled.div`
  width: 270px;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 14px;
  border: 1px solid ${({ theme }) => theme.Color.white};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.Color.white};
`;

const SeatTitle = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;

  i {
    font-size: 19px;
    color: ${({ theme }) => theme.Color.blue[500]};
  }

  span {
    padding-left: 14px;
    font-size: 16px;
    color: ${({ theme }) => theme.Color.grey[500]};
  }

  button {
    border: none;
    background-color: ${({ theme }) => theme.Color.white};

    i {
      font-size: 19px;
      color: ${({ theme }) => theme.Color.grey[700]};
    }
  }
`;

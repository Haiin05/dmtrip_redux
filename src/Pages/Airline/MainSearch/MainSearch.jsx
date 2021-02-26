import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import AirCalendar from "../Modal/AirlineCalendar/AirCalendar";
import CityModal from "../Modal/CityModal";
import SeatContainer from "../../../containers/SeatContainer";
import styled from "styled-components";

const MainSearch = () => {
  const [cityModalStatus, setCityModalStatus] = useState({
    dep: false,
    arr: false,
  });

  const [seatModalStatus, setSeatModalStatus] = useState(false);
  const [calendarModalStatus, setCalendarModalStatus] = useState(false);

  const { adultNum, childrenNum, infantNum } = useSelector(
    (state) => state.seat
  );

  const { departureCity, arrivalCity } = useSelector((state) => state.city);

  return (
    <Selectors>
      <CitySelector>
        <input
          type="text"
          id="departure"
          placeholder="김포(GMP)"
          value={departureCity}
          onClick={() => setCityModalStatus({ dep: !cityModalStatus.dep })}
        />
        {cityModalStatus.dep && (
          <CityModal
            departure
            cityModalStatus={cityModalStatus}
            setCityModalStatus={setCityModalStatus}
          />
        )}
        <button>
          <i class="fas fa-arrows-alt-h" />
        </button>
        <input
          type="text"
          id="arrival"
          placeholder="도착지가 어디인가요?"
          value={arrivalCity}
          onClick={() => setCityModalStatus({ arr: !cityModalStatus.arr })}
        />
        {cityModalStatus.arr && (
          <CityModal
            arrival
            cityModalStatus={cityModalStatus}
            setCityModalStatus={setCityModalStatus}
          />
        )}
      </CitySelector>
      <div onClick={() => setCalendarModalStatus(!calendarModalStatus)}>
        <AirCalendar calendarModalStatus={calendarModalStatus} />
      </div>
      <SeatSelector>
        <SeatTitle onClick={() => setSeatModalStatus(!seatModalStatus)}>
          <div>
            <i class="far fa-user" />
            <span>승객 {adultNum + childrenNum + infantNum}명, 일반석</span>
          </div>
          <button>
            <i class="fas fa-chevron-down" />
          </button>
        </SeatTitle>
        {seatModalStatus && (
          <SeatContainer
            setSeatModalStatus={setSeatModalStatus}
            seatModalStatus={seatModalStatus}
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

import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

let recentSearchData = {};

function RecentSearch() {
  const { adultNum, childrenNum, infantNum } = useSelector(
    (state) => state.seat
  );

  const { departureCity, arrivalCity } = useSelector((state) => state.city);

  const { startMonthNum, startDateNum, endMonthNum, endDateNum } = useSelector(
    (state) => state.city
  );

  return (
    <Wrapper>
      <div>최근 검색한 항공권</div>
      <RecentBoxWrapper>
        <RecentBox>
          <TripBox>
            <div>왕복</div>
            <i class="fas fa-times"></i>
          </TripBox>
          <Trip>
            <span>{departureCity}</span>
            <i class="fas fa-exchange-alt"></i>
            <span>{arrivalCity}</span>
          </Trip>
          <div className="tripDetail">
            {startMonthNum}월 {startDateNum}일 - {endMonthNum}월 {endDateNum}일
            • 성인{adultNum} • 소아{childrenNum} • 유아
            {infantNum} • 전체
          </div>
        </RecentBox>
      </RecentBoxWrapper>
    </Wrapper>
  );
}

export default withRouter(RecentSearch);

const Wrapper = styled.div`
  width: 1060px;
  height: 100%;
  margin: 48px 0;

  div {
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.Color.grey[800]};
  }
`;

const RecentBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RecentBox = styled.div`
  width: 340px;
  height: 92px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 14px 16px;
  margin: 20px 20px 0 0;

  .tripDetail {
    font-size: 12px;
    color: ${({ theme }) => theme.Color.grey[500]};
    margin-top: 5px;
  }
`;

const TripBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 5px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 18px;
    border: 1.5px solid ${({ theme }) => theme.Color.blue[500]};
    border-radius: 2px;
    font-size: 11px;
    font-weight: 500;
    color: ${({ theme }) => theme.Color.blue[500]};
  }

  i {
    color: ${({ theme }) => theme.Color.grey[500]};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

const Trip = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px 0 20px 0;
  color: ${({ theme }) => theme.Color.grey[800]};

  span {
    font-size: 14px;
    font-weight: 600;
  }
  i {
    margin: 0 5px;
    color: ${({ theme }) => theme.Color.grey[400]};
  }
`;

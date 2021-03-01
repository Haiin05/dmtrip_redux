import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const SeatList = ({ format }) => {
  return (
    <>
      {format.data?.map((data, idx) => {
        return (
          <List key={idx}>
            <Title>
              <div>{data.type}</div>
              <div>{data.typeDetail}</div>
            </Title>
            <Num>
              <i class="far fa-minus-square" onClick={data.onDecrease} />
              <span>{data.number}</span>
              <i class="far fa-plus-square" onClick={data.onIncrease} />
            </Num>
          </List>
        );
      })}
    </>
  );
};

export default withRouter(SeatList);

const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;

  i {
    cursor: pointer;
  }
`;

const Title = styled.div`
  width: 60px;
  height: 34px;

  div:first-child {
    font-size: 16px;
    margin-bottom: 5px;
  }

  div:last-child {
    font-size: 11px;
    color: ${({ theme }) => theme.Color.grey[400]};
  }
`;

const Num = styled.div`
  width: 100px;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  i,
  span {
    font-size: 18px;
  }

  i {
    font-size: 26px;
    color: ${({ theme }) => theme.Color.blue[400]};
  }
`;

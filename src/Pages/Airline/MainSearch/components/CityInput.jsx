import React from "react";
import { withRouter } from "react-router-dom";
import CityModal from "../../Modal/CityModal";
import styled from "styled-components";

const CityInput = ({ modalStatus, setModalStatus, format }) => {
  return (
    <CityInputWrapper>
      {format.data?.map((data, idx) => {
        return (
          <>
            <input
              key={idx}
              type={data.type}
              id={data.id}
              placeholder={data.placeholder}
              value={data.value}
              onClick={data.onClick}
            />
            {data.modalStatus && (
              <CityModal
                type={data.id}
                modalStatus={modalStatus}
                setModalStatus={setModalStatus}
              />
            )}
            {data.id === "departure" && (
              <button>
                <i class="fas fa-arrows-alt-h" />
              </button>
            )}
          </>
        );
      })}
    </CityInputWrapper>
  );
};

export default withRouter(CityInput);

const CityInputWrapper = styled.div`
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

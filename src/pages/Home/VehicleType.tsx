import React from "react";
import { MainStore } from "../../store/Main/MainStore";
import { connect } from "../../store";
import { cx } from "../../Utils/ClassName";

import styled from "@emotion/styled";

export const VehicleType = connect(_vehicleType, ["mainStore"]);

interface Props {
  mainStore: MainStore;
}

function _vehicleType({
  mainStore: { selectedType, selectVehicleType }
}: Props) {
  return (
    <ButtonGroup>
      <button
        className={cx({ active: selectedType === "motos" })}
        onClick={() => selectVehicleType("motos")}
      >
        Motos
      </button>
      <button
        className={cx({ active: selectedType === "carros" })}
        onClick={() => selectVehicleType("carros")}
      >
        Carros
      </button>
      <button
        className={cx({ active: selectedType === "caminhoes" })}
        onClick={() => selectVehicleType("caminhoes")}
      >
        Caminhões
      </button>
    </ButtonGroup>
  );
}

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;

  & button {
    appearance: none;
    border: 1px solid #eee;
    background: white;

    color: #333;
    font-size: 1rem;
    font-weight: 600;

    padding: 1rem 2rem;
  }

  & button.active {
    color: #fff;
    background: rgb(0, 176, 170);
    border-color: transparent;
  }

  & button:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  & button:first-of-type {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

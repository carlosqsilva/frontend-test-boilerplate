import React from "react";
import styled from "@emotion/styled";
import { Vehicle as Vehicletype } from "../../store/Main/store.types";

interface Props {
  vehicle: Vehicletype;
}

export const Vehicle: React.SFC<Props> = ({ vehicle }) => {
  return (
    <Container>
      <h1>Veículo</h1>
      <Content>
        <p>
          Marca: <span>{vehicle.Marca}</span>
        </p>
        <p>
          Modelo: <span>{vehicle.Modelo}</span>
        </p>
        <p>
          Combustível: <span>{vehicle.Combustivel}</span>
        </p>
        <p>
          Valor: <span>{vehicle.Valor}</span>
        </p>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: min-content 1fr;
  overflow: hidden;

  position: absolute;
  width: 100%;
  bottom: 0;
  top: 0;
`;

const Content = styled.div`
  & p {
    margin-bottom: 0.4rem;
    font-weight: 600;
  }

  & p span {
    font-weight: 400;
  }
`;

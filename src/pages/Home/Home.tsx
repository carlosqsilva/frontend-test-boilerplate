import React from "react";

import { CSSTransition } from "react-transition-group";
import { MainStore } from "../../store/Main/MainStore";
import { VehicleType } from "./VehicleType";

import styled from "@emotion/styled";
import { InfoTable } from "./InfoTable";
import { Vehicle } from "./Vehicle";
import { Breadcrumb } from "../../Components/Breadcrumb";

interface Props {
  mainStore: MainStore;
}

export const Home: React.SFC<Props> = ({
  mainStore: {
    selectState,
    selectVehicleType,
    vehicleBrands,
    selectBrand,
    vehicleModels,
    selectModel,
    vehicleYears,
    selectYear,
    vehicle
  }
}) => {
  return (
    <Container>
      <VehicleType />

      <Breadcrumb
        selectState={selectState}
        items={[
          { name: "Tipo", action: selectVehicleType },
          { name: "Marca", action: selectBrand },
          { name: "Modelo", action: selectModel },
          { name: "Ano", action: selectYear },
          { name: "Veículo" }
        ]}
      />

      <Content>
        <CSSTransition
          appear
          unmountOnExit
          timeout={500}
          classNames="move"
          in={selectState === 0}
        >
          <InfoTable data={vehicleBrands} select={selectBrand} title="Marcas" />
        </CSSTransition>

        <CSSTransition
          appear
          unmountOnExit
          timeout={500}
          classNames="move"
          in={selectState === 1}
        >
          <InfoTable
            data={vehicleModels}
            select={selectModel}
            title="Modelos"
          />
        </CSSTransition>

        <CSSTransition
          appear
          unmountOnExit
          timeout={500}
          classNames="move"
          in={selectState === 2}
        >
          <InfoTable data={vehicleYears} select={selectYear} title="Anos" />
        </CSSTransition>

        <CSSTransition
          appear
          unmountOnExit
          timeout={500}
          classNames="move"
          in={selectState === 3}
        >
          <Vehicle vehicle={vehicle} />
        </CSSTransition>
      </Content>
    </Container>
  );
};

const Content = styled.div`
  position: relative;

  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Container = styled.main`
  margin: 0 auto;
  padding: 2rem;

  max-width: 900px;
  min-height: 100vh;

  display: grid;
  grid-gap: 1.5rem;
  grid-template-rows: min-content min-content 1fr;
`;

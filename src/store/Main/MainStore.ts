import { observable, computed, action, configure, runInAction } from "mobx";
import { request } from "../../Utils/Request";
import { VehicleType, VehicleInfo, Vehicle } from "./store.types";

configure({ enforceActions: "observed" });

const _initialVehicle = {
  Valor: "",
  Marca: "",
  Modelo: "",
  AnoModelo: "",
  Combustivel: "",
  CodigoFipe: "",
  MesReferencia: "",
  TipoVeiculo: 0,
  SiglaCombustivel: ""
};

export class MainStore {
  @observable selectedType?: VehicleType = "carros";
  @observable selectedBrand?: string;
  @observable selectedModel?: string;
  @observable selectedYear?: string;

  @observable vehicleBrands: VehicleInfo[] = [];
  @observable vehicleModels: VehicleInfo[] = [];
  @observable vehicleYears: VehicleInfo[] = [];
  @observable vehicle: Vehicle = _initialVehicle;

  @computed
  get selectState(): number {
    if (this.selectedBrand && this.selectedModel && this.selectedYear) {
      return 3;
    }

    if (this.selectedBrand && this.selectedModel) {
      return 2;
    }

    if (this.selectedBrand) {
      return 1;
    }

    return 0;
  }

  @action
  selectVehicleType = async (type?: VehicleType) => {
    this.selectedType = type;

    this.selectedBrand = undefined;
    this.selectedModel = undefined;
    this.selectedYear = undefined;

    if (!type) return;

    const response = await request(
      `https://parallelum.com.br/fipe/api/v1/${type}/marcas`
    );

    runInAction(() => {
      this.vehicleBrands = response;
    });
  };

  @action
  selectBrand = async (cod?: string) => {
    this.selectedBrand = cod;

    this.selectedModel = undefined;
    this.selectedYear = undefined;

    console.log(cod);

    if (!cod) return;

    const response = await request(
      `https://parallelum.com.br/fipe/api/v1/${this.selectedType}/marcas/${this.selectedBrand}/modelos`
    );

    runInAction(() => {
      this.vehicleModels = response.modelos;
    });
  };

  @action
  selectModel = async (cod?: string) => {
    this.selectedModel = cod;

    this.selectedYear = undefined;

    if (!cod) return;

    const response = await request(
      `https://parallelum.com.br/fipe/api/v1/${this.selectedType}/marcas/${this.selectedBrand}/modelos/${this.selectedModel}/anos`
    );

    runInAction(() => {
      this.vehicleYears = response;
    });
  };

  @action
  selectYear = async (cod?: string) => {
    this.selectedYear = cod;

    if (!cod) return;

    const response = await request(
      `https://parallelum.com.br/fipe/api/v1/${this.selectedType}/marcas/${this.selectedBrand}/modelos/${this.selectedModel}/anos/${this.selectedYear}`
    );

    runInAction(() => {
      this.vehicle = response;
    });
  };
}

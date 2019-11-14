export type VehicleType = "carros" | "motos" | "caminhoes";

export type VehicleInfo = { nome: string; codigo: string };

export type Vehicle = {
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: string;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  TipoVeiculo: number;
  SiglaCombustivel: string;
};

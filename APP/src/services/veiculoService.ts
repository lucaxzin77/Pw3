import { api } from "./api";
import type { Veiculo } from "../types/veiculo";

export async function getVeiculos(): Promise<Veiculo[]> {
  const response = await api.get("/veiculos");
  return response.data;
}
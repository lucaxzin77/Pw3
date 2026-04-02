import { useEffect, useState } from "react";
import { getVeiculos } from "../services/veiculoService";
import type { Veiculo } from "../types/veiculo";

export function VeiculosList() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  useEffect(() => {
    getVeiculos().then(setVeiculos);
  }, []);

  return (
    <div className="flex flex-col items-center h-screen bg-zinc-800">
      <h1 className="font-bold text-4xl text-white m-7">Lista de Veículos</h1>

    <div className="grid grid-cols-4 gap-4 h-full">
      {veiculos.map((veiculo) => (
        <div className="flex flex-col items-center justify-center shadow-lg w-72 rounded-lg text-center bg-white" key={veiculo.id}>
          <h2>{veiculo.modelo}</h2>
          <p>{veiculo.descricao}</p>
            <strong className="text-green-900">
                {veiculo.valor.toLocaleString('pt-BR', {style: "currency", currency: "BRL"})}
            </strong>
        </div>
      ))}
      </div>
    </div>
  );
}
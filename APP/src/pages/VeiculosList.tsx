import { useEffect, useState } from "react";
import { getVeiculos } from "../services/veiculoService";
import type { Veiculo } from "../types/veiculo";
import { VeiculoCard } from "../components/VeiculoCard";

export function VeiculosList() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  useEffect(() => {
    getVeiculos().then(setVeiculos);
  }, []);

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 dark:bg-zinc-800">
      <h1 className="font-bold text-4xl dark:text-white m-7">Lista de Veículos</h1>

    <div className="grid grid-cols-4 gap-4 h-full mb-7">
      {veiculos.map((v) => (
        <VeiculoCard key={v.id} veiculo={v}/>
      ))}
      </div>
    </div>
  );
}
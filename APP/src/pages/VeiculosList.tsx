import { useEffect, useState } from "react";
import { getVeiculos } from "../services/veiculoService";
import { getFabricantes } from "../services/fabricanteService";
import type { Veiculo } from "../types/veiculo";
import type { Fabricante } from "../types/fabricante";
import { VeiculoCard } from "../components/VeiculoCard";
import { ListaVazia } from "../components/ListaVazia";

export function VeiculosList() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

   const [fabricantes, setFabricantes] = useState<Fabricante[]>([]);

  useEffect(() => {
    getVeiculos().then(setVeiculos);
    getFabricantes().then(setFabricantes);
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100 dark:bg-zinc-800">
      <h1 className="font-bold text-4xl dark:text-white m-7">Lista de Veículos</h1>

    <div className="grid grid-cols-4 gap-4 h-full mb-7">
      {
      veiculos.length > 0
      ? veiculos.map((v) => (
        <VeiculoCard key={v.id} veiculo={v} fabricantes={fabricantes}/>
      )) 
      : <ListaVazia/>
      }
      </div>
    </div>
  );
}
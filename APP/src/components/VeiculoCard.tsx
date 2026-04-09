import { useState, useEffect } from "react";
import type { Veiculo } from "../types/veiculo";
import { getFabricantes } from "../services/fabricanteService";
import type { Fabricante } from "../types/fabricante";

interface Props {
  veiculo: Veiculo;
}

const [fabricantes, setFabricantes] = useState<Fabricante[]>([]);

useEffect(() => {
  getFabricantes().then(setFabricantes);
},[])

export function VeiculoCard({ veiculo }: Props) {
  return (
    <div className="flex flex-col items-center justify-center shadow-lg w-72 rounded-lg text-center bg-zinc-300 dark:bg-white">
      <div className="">
          <img className="object-contain h-[150px]" src={veiculo.fotos[0]} alt="" />
      </div>
      <div className="m-5">
          <h2>{veiculo.modelo}</h2>
          <h2>Fabricante: {fabricantes.find(f => f.id == veiculo.Fabricantes_id)?.nome ?? veiculo.Fabricantes_id}</h2>
          <p>{veiculo.descricao}</p>
            <strong className="text-green-800">
                {veiculo.valor.toLocaleString('pt-BR', {style: "currency", currency: "BRL"})}
            </strong>
          </div>
        </div>
  );
}
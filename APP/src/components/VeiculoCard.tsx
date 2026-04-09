import type { Veiculo } from "../types/veiculo";

interface Props {
  veiculo: Veiculo;
}

export function VeiculoCard({ veiculo }: Props) {
  return (
    <div className="flex flex-col items-center justify-center shadow-lg w-72 rounded-lg text-center bg-zinc-300 dark:bg-white">
          <h2>{veiculo.modelo}</h2>
          <p>{veiculo.descricao}</p>
            <strong className="text-green-800">
                {veiculo.valor.toLocaleString('pt-BR', {style: "currency", currency: "BRL"})}
            </strong>
        </div>
  );
}
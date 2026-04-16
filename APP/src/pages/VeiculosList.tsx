import { VeiculoCard } from "../components/VeiculoCard";
import { useVeiculos } from "../hooks/useVeiculos";

export function VeiculosList() {
  const { veiculos, loading, error } = useVeiculos();

  if (loading){
    return <p className="font-bold text-[75px] text-center">Carregando...</p>
  }

  if(error){
    return <p>{error}</p>
  }

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
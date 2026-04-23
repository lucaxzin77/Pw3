import { VeiculoCard } from "../components/VeiculoCard";
import { useVeiculos } from "../hooks/useVeiculos";
import { IoMdRefresh } from "react-icons/io";

export function VeiculosList() {
  const { veiculos, loading, error, refetch } = useVeiculos();

  if (loading){
    return <p className="font-bold text-[75px] text-center">Carregando...</p>
  }

  if(error){
    return <p>{error}</p>
  }

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 dark:bg-zinc-800">
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-4xl dark:text-white m-7">Lista de Veículos</h1>
        <button 
        className="bg-white p-1 rounded-full text-2xl transition-all duration-300 
        hover:bg-zinc-300 hover:scale-110
        active:scale-90 active:bg-zinc-500 active:text-white" 
        onClick={refetch}>
          <IoMdRefresh/>
        </button>
      </div>

    <div className="grid grid-cols-4 gap-4 h-full mb-7">
      {veiculos.map((v) => (
        <VeiculoCard key={v.id} veiculo={v}/>
      ))}
      </div>
    </div>
  );
}
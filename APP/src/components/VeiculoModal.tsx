import type { Veiculo } from "../types/veiculo";
import type { Fabricante } from "../types/fabricante";
import type { Anunciante } from "../types/anunciante";
import { FaX } from "react-icons/fa6";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  veiculo: Veiculo;
  fabricantes: Fabricante[];
  anunciantes: Anunciante[];
  onClose: () => void;
}

export function VeiculoModal({ veiculo, fabricantes, anunciantes, onClose }: Props) {

    const [fotoAtual, setFotoAtual] = useState(0);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    onClick={onClose}
    >

      <div 
      onClick={(e) => e.stopPropagation()}
      className="bg-white w-[700px] rounded-2xl shadow-2xl overflow-hidden relative shadow-lg border-3 border-green-700">

        <div className="w-full h-64 overflow-hidden relative group">

        <div
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${fotoAtual * 100}%)`,
          }}
        >
          {veiculo.fotos.map((foto, index) => (
            <img
              key={index}
              src={foto}
              className="w-full h-full object-contain flex-shrink-0"
            />
          ))}
        </div>

          {fotoAtual > 0 && (
            <button
              onClick={() => {
                setFotoAtual((prev) => prev - 1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
            >
              <FaChevronLeft size={14} />
            </button>
          )}
        
        {fotoAtual < veiculo.fotos.length - 1 && (
          <button
            onClick={() => {
              setFotoAtual((prev) => prev + 1);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
          >
            <FaChevronRight size={14} />
          </button>
        )}

      </div>

        <div className="p-5">
          <h2 className="text-2xl font-bold">
            {fabricantes.find(f => f.id == veiculo.Fabricantes_id)?.nome ?? veiculo.Fabricantes_id} {veiculo.modelo}
          </h2>
          <p className="text-gray-600 mt-1">
            {veiculo.ano} / {veiculo.ano_modelo}
          </p>
          <strong className="block mt-3 text-3xl text-green-700">
            {veiculo.valor.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
          <p className="mt-4 text-gray-700 text-sm leading-relaxed">
            {veiculo.descricao}
          </p>
          <div className="border-t my-4"></div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl text-gray-500">Anunciante</p>
              <p className="mt-1 text-lg font-semibold">{anunciantes.find(a => a.id == veiculo.Anunciantes_id)?.nome ?? veiculo.Anunciantes_id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
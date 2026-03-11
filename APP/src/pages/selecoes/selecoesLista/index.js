import { getSelecoes } from '../../../services/selecoes.service.js';

let selecoesContainer = document.querySelector(".selecoesContainer");

const renderSelecoes = (lista) => {
    lista.forEach(selecao => {
        selecoesContainer.innerHTML += `
        <div class="w-[200px] h-[250px] p-[20px] bg-white rounded-lg shadow-lg shadow-${selecao.cores[0]}-700/50
        flex flex-col items-center justify-center gap-[6px] bg-white">
        <div class="max-w-[100px]">
            <img class="w-[100px] h-[100px] object-contain" src="${selecao.logo}" alt="">
        </div>
        <div>
            <span class="font-bold">Nome: </span>
            <span>${selecao.nome}</span>
        </div>
        <div>
            <span class="font-bold">Grupo: </span>
            <span>${selecao.grupo}</span>
        </div>
        <div class="m-[5px]">
            <button class="p-[5px] w-[60px] shadow-lg rounded-lg cursor-pointer bg-white transition-all duration-[0.3s] hover:bg-slate-200 active:scale-90">
                Ver Mais
            </button>
        </div>
    </div>
        `
    });
}

const selecoes = await getSelecoes();
renderSelecoes(selecoes);

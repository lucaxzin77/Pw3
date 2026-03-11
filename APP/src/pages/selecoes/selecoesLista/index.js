import { getSelecoes, deleteSelecao } from '../../../services/selecoes.service.js';

let selecoesContainer = document.querySelector(".selecoesContainer");

const delSelecao = async (id)=>{
    try{
        const result = await deleteSelecao(id);
        return result;
    }catch(error){
        console.log(error.message);
    }
}

const renderSelecoes = (lista) => {
    lista.forEach(selecao => {
        selecoesContainer.innerHTML += `
        <div class="w-[200px] h-[250px] p-[20px] bg-white rounded-lg shadow-lg shadow-[${selecao.cores[0]}]/50
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
        <div class="m-[5px] text-center">
            <button class="p-[5px] w-[80px] shadow-lg rounded-lg cursor-pointer bg-white transition-all duration-[0.3s] hover:bg-slate-200 active:scale-90">
                Ver Mais
            </button>
            <button data-id="${selecao.id}" id="btnDelete" class="cursor-pointer text-zinc-700 m-[5px] p-[5px] transition-all duration-[0.3s] shadow-sm shadow-red-700/50 rounded-lg hover:scale-110 hover:bg-red-500 hover:text-white active:scale-90 active:bg-red-800 active:text-zinc-700">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    </div>
        `
    });
}

selecoesContainer.addEventListener("click", async (e)=>{
    e.preventDefault();

    const button = e.target.closest("#btnDelete");

    if (!button) return;

    const id = button.dataset.id;

    const confirmar = confirm("Tem certeza que deseja excluir esta seleção?");

    if (!confirmar) return;

    await delSelecao(id);

    location.reload();
})

const selecoes = await getSelecoes();
renderSelecoes(selecoes);

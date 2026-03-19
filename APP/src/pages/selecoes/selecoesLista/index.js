import { getSelecoes, deleteSelecao, putSelecao } from '../../../services/selecoes.service.js';

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
    selecoesContainer.innerHTML = "";

    lista.forEach(selecao => {
        selecoesContainer.innerHTML += `
        <div class="w-[200px] h-[250px] p-[20px] bg-white rounded-lg shadow-lg shadow-[${selecao.cores[0]}]/50
        flex flex-col items-center justify-center gap-[6px] bg-white">
        <div class="max-w-[100px]">
            <img class="w-[100px] h-[100px] object-contain" src="${selecao.logo}" alt="">
        </div>
        <div>
            <span>${selecao.nome}</span>
        </div>
        <div>
            <span class="font-bold">Grupo: </span>
            <span>${selecao.grupo}</span>
        </div>
        <div class="m-[5px] text-center">
            <button data-id="${selecao.id}" class="btnEdit cursor-pointer text-zinc-700 m-[5px] p-[5px] transition-all duration-[0.3s] shadow-sm shadow-sky-700/50 rounded-lg  hover:scale-110 hover:bg-sky-600 hover:text-white active:scale-90 active:bg-sky-800 active:text-zinc-700">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button class="p-[5px] w-[50px] shadow-lg rounded-lg cursor-pointer bg-white transition-all duration-[0.3s] hover:bg-slate-200 active:scale-90">
                <i class="fa-solid fa-eye"></i>
            </button>
            <button data-id="${selecao.id}" id="btnDelete" class="cursor-pointer text-zinc-700 m-[5px] p-[5px] transition-all duration-[0.3s] shadow-sm shadow-red-700/50 rounded-lg hover:scale-110 hover:bg-red-500 hover:text-white active:scale-90 active:bg-red-800 active:text-zinc-700">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    </div>
        `
    });
}

let selecaoEditandoId = null;

const carregarDadosSelecao = (selecao) => {
    selecaoEditandoId = selecao.id;

    document.getElementById("nomeSelecao").value = selecao.nome;
    document.getElementById("tecnicoSelecao").value = selecao.tecnico || "";
    document.getElementById("logoSelecao").value = selecao.logo;
    document.getElementById("grupoSelect").value = selecao.grupo;

    document.getElementById("color1").value = selecao.cores?.[0] || "#000000";
    document.getElementById("color2").value = selecao.cores?.[1] || "#ffffff";

    document.getElementById("flagPreview").src = selecao.logo;
};

selecoesContainer.addEventListener("click", async (e) => {

    const deleteBtn = e.target.closest("#btnDelete");

    if (deleteBtn) {
        const id = deleteBtn.dataset.id;

        const confirmar = confirm("Tem certeza que deseja excluir esta seleção?");
        if (!confirmar) return;

        await delSelecao(id);
        location.reload();
        return;
    }

    const editBtn = e.target.closest(".btnEdit");

    if (editBtn) {
        const id = editBtn.dataset.id;

        const selecao = selecoes.find(s => s.id === id);

        carregarDadosSelecao(selecao);
        abrirModal();
    }
});

const logoInput = document.getElementById("logoSelecao");
const preview = document.getElementById("flagPreview");

logoInput.addEventListener("input", () => {
    preview.src = logoInput.value;
});

const modal = document.getElementById("modalEdit");
const closeIcon = document.getElementById("closeIcon");

const abrirModal = () => {
    modal.classList.remove("hidden");
};

const fecharModal = () => {
    modal.classList.add("hidden");
};

closeIcon.addEventListener("click", fecharModal);

const form = document.getElementById("formPutSelecao");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        nome: document.getElementById("nomeSelecao").value,
        tecnico: document.getElementById("tecnicoSelecao").value,
        logo: document.getElementById("logoSelecao").value,
        grupo: document.getElementById("grupoSelect").value,
        cores: [
            document.getElementById("color1").value,
            document.getElementById("color2").value
        ]
    };

    try {
        await putSelecao(selecaoEditandoId, data);

        alert("Seleção atualizada!");

        fecharModal();

        location.reload();
    } catch (error) {
        console.error(error);
        alert("Erro ao atualizar");
    }
});

const selecoes = await getSelecoes();
renderSelecoes(selecoes);
import { getSelecoes } from '../../services/selecoes.service.js';

let selecoesContainer = document.querySelector(".selecoesContainer");

const renderSelecoes = (lista) => {
    lista.forEach(selecao => {
        selecoesContainer.innerHTML += `
        <div>
            <div>
                <span>Nome: </span>
                <span>${selecao.nome}</span>
            </div>
            <div>
                <span>Grupo: </span>
                <span>${selecao.grupo}</span>
            </div>
            <div>
                <img src="${selecao.logo}" alt="">
            </div>
            <div>
                <button>View</button>
            </div>
        </div>
        `
    });
}

const selecoes = await getSelecoes();
renderSelecoes(selecoes);

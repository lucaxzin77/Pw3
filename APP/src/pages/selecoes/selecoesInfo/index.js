import { getSelecoes, putSelecao } from '../../../services/selecoes.service.js';

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const logo = document.getElementById('logoSel');
const selecaoNome = document.getElementById('nomeSel');
const tecnico = document.getElementById('tecnicoSel');
const grupo = document.getElementById('grupoSel');
const conquistasTable = document.getElementById('bodyConquistas');
const jogadoresTable = document.getElementById('bodyJogadores')

const carregarSelecao = async () => {
    const lista = await getSelecoes();

    const selecao = lista.find(s => s.id === id);

    if (!selecao) {
        alert("Seleção não encontrada");
        return;
    }

    logo.src = selecao.logo;
    selecaoNome.innerText = selecao.nome;
    grupo.innerText = selecao.grupo;
    tecnico.innerText = selecao.tecnico;

    const conquistas = selecao.conquistas;

    conquistasTable.innerHTML = "";

    conquistas.forEach(conquista => {
        conquistasTable.innerHTML += `
            <tr class="hover:bg-zinc-50 transition-colors">
                <td class="px-4 py-3 text-sm text-zinc-700">${conquista.ano}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${conquista.pais}</td>
            </tr>
        `;
    });

    const jogadores = selecao.jogadores || [];

jogadoresTable.innerHTML = "";

if (jogadores.length === 0) {
    jogadoresTable.innerHTML += `
        <tr class="hover:bg-zinc-50 transition-colors">
            <td colspan="3" class="px-4 py-3 text-sm text-zinc-700 text-center">
                Não possui jogadores cadastrados!
            </td>
        </tr>
    `;
} else {
    jogadores.forEach(jogador => {
        jogadoresTable.innerHTML += `
            <tr class="hover:bg-zinc-50 transition-colors">
                <td class="px-4 py-3 text-sm text-zinc-700">${jogador.nome}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${jogador.posicao}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${jogador.numero}</td>
            </tr>
        `;
        });
    }
}

const botaoAbrirModal = document.getElementById('addJogadores')

const modal = document.getElementById('modalJogadores')
const botaoFecharModal = document.querySelector('.fecharModal');

botaoFecharModal.addEventListener('click', ()=>{
    modal.classList.add('hidden');
})

botaoAbrirModal.addEventListener('click', ()=>{
    modal.classList.remove('hidden');
})

const form = document.getElementById('formPostJogadores');

form.addEventListener('submit', (e)=>{
    e.preventDefault();


})

carregarSelecao();
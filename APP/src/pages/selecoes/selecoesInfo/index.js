import { getSelecoes } from "../../../services/selecoes.service";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const logo = document.getElementById('logoSel');
const selecao = document.getElementById('nomeSel');
const tecnico = document.getElementById('tecnicoSel');
const grupo = document.getElementById('grupoSel');
// CONFIGURAÇÃO DOS GABARITOS
// DIA 1: Linguagens e Humanas
const gabaritosDia1 = {
  verde: {
  ingles: ["D", "D", "A", "D", "E"],
  espanhol: ["B", "D", "A", "D", "C"],
  resto: [
    "E","D","C","C","E",
    "B","E","B","C","E",
    "C","A","E","B","C",
    "A","E","D","C","E",
    "D","B","A","B","A",
    "B","D","E","B","B",
    "C","B","A","A","B",
    "D","D","C","C","A",
    "C","E","E","D","C",
    "A","D","B","D","E",
    "C","A","D","E","D",
    "E","C","A","B","A",
    "C","B","A","D","A",
    "B","B","C","B","C",
    "E","A","E","E","D",
    "D","B","C","D","D",
    "E","C","B","B","A"
  ]
},
  branca: {
  ingles: ["E", "A", "D", "D", "D"],
  espanhol: ["D", "C", "B", "A", "D"],
  resto: [
    "C", "E", "E", "D", "C",
    "A", "E", "B", "C", "A",
    "E", "D", "B", "C", "E",
    "C", "B", "E", "B", "C",
    "B", "A", "B", "A", "C",
    "E", "D", "B", "D", "E",
    "B", "C", "A", "B", "A",
    "D", "D", "C", "A", "B",
    "A", "D", "B", "D", "E",
    "E", "D", "E", "C", "E",
    "E", "D", "C", "C", "A",
    "D", "B", "A", "D", "A",
    "B", "B", "C", "A", "B",
    "A", "C", "B", "B", "A",
    "C", "D", "D", "E", "C",
    "C", "B", "C", "E", "A",
    "E", "E", "D", "D", "B"
  ]
},
  azul: {
  ingles: ["D", "D", "D", "E", "A"],
  espanhol: ["B", "A", "D", "D", "C"],
  resto: [
    "E","C","D","C","E",
    "B","C","E","C","A",
    "E","D","A","E","B",
    "C","B","C","B","E",
    "B","A","B","A","B",
    "D","E","B","C","E",
    "D","A","B","C","A",
    "B","A","D","D","C",
    "E","D","E","C","A",
    "D","C","E","E","D",
    "C","A","D","B","D",
    "E","B","B","A","C",
    "D","D","E","C","B",
    "A","D","A","B","B",
    "C","A","B","A","C",
    "E","E","D","D","B",
    "C","B","C","E","A"
  ]
},
  amarela: {
  ingles: ["A", "E", "D", "D", "D"],
  espanhol: ["D", "B", "A", "C", "D"],
  resto: [
    "C","E","C","E","D",
    "A","E","D","A","E",
    "B","C","B","E","B",
    "C","E","C","B","D",
    "E","B","C","E","D",
    "B","A","B","A","B",
    "C","D","D","C","C",
    "A","A","B","B","A",
    "C","A","D","E","D",
    "A","D","B","D","E",
    "C","E","E","D","C",
    "C","D","D","E","C",
    "C","B","C","E","A",
    "B","A","C","A","B",
    "A","C","E","E","D",
    "D","B","B","A","D",
    "A","B","B"
  ]
}
};

// DIA 2: Ciências da Natureza e Matemática
const gabaritosDia2 = {
  verde: [
  "E","E","B","D","E","C","D","D","C","D",
  "C","B","D","D","E","A","C","D","A","E",
  "A","A","A","B","B","C","C","D","C","B",
  "C","E","A","A","B","B","B","D","B","B",
  "D","E","E","E","C","B","D","D","D","E",
  "B","C","A","D","D","B","C","E","C","C",
  "A","C","E","C","D","E","B","E","C","C",
  "D","B","A","E","A","B","A","B","C","C",
  "B","E","A","D","D","E","B","E","D","A"
],

  branca: [
  "C","D","A","E","A","A","C","B","D","D",
  "E","C","E","E","B","D","E","A","B","B",
  "C","B","B","D","E","E","E","C","B","B",
  "D","C","D","C","B","A","A","B","D","D",
  "C","D","C","E","A","A","D","D","B","B",
  "C","E","C","E","C","C","B","D","D","D",
  "E","C","A","C","E","A","B","D","E","B",
  "E","C","C","D","B","A","B","E","D","A",
  "A","B","C","C","B","E","A","D","D","E"
],

  azul: [
  "D","D","C","D","C","B","D","D","C","D",
  "A","E","A","A","E","A","E","C","E","E",
  "B","D","B","B","C","C","D","C","B","B",
  "B","D","E","B","B","D","C","E","A","E",
  "E","C","A","B","A","C","B","E","C","E",
  "C","C","A","D","D","B","E","C","B","D",
  "D","D","A","C","B","E","C","C","D","E",
  "A","B","B","A","D","E","D","E","A","B",
  "E","D","A","B","C","C","B","E","A","D"
],

  amarela: [
  "C","B","D","D","C","D","A","E","A","A",
  "A","E","C","B","B","C","E","A","E","E",
  "B","D","E","E","C","A","B","B","B","D",
  "E","C","D","C","B","B","B","D","C","E",
  "A","D","D","C","D","C","E","C","C","A",
  "D","D","B","E","B","C","A","C","E","C",
  "B","D","D","D","B","A","D","E","E","A",
  "B","B","E","C","C","D","A","B","E","A",
  "D","D","E","B","E","D","A","B","C","C"
]
};


// VARIÁVEIS GLOBAIS
let provaSelecionada = null,
  gabaritoFinal = [],
  respostasUsuario = [],
  questao = 1;
let quizFinalizado = false,
  audioHabilitado = true,
  efeitosHabilitados = true;
let anoSelecionado = null,
  diaSelecionado = null;
let easterEggUsado = false;
let idiomaSelecionado = null;

// FUNÇÕES DE NAVEGAÇÃO ENTRE TELAS
function mostrarTela(telaId) {
  document
    .querySelectorAll(".tela-secao")
    .forEach((tela) => tela.classList.add("hidden"));
  document.getElementById(telaId).classList.remove("hidden");
}

// CONFIGURAÇÃO INICIAL
document.addEventListener("DOMContentLoaded", () => {
  // Carrega preferências salvas do localStorage
  const audioSalvo = localStorage.getItem("audioHabilitado");
  const efeitosSalvos = localStorage.getItem("efeitosHabilitados");
  
  if (audioSalvo !== null) {
    audioHabilitado = audioSalvo === "true";
    document.getElementById("switchAudio").checked = audioHabilitado;
  }
  
  if (efeitosSalvos !== null) {
    efeitosHabilitados = efeitosSalvos === "true";
    document.getElementById("switchEfeitos").checked = efeitosHabilitados;
  }
  
  document
    .getElementById("switchAudio")
    .addEventListener("change", (e) => {
      audioHabilitado = e.target.checked;
      localStorage.setItem("audioHabilitado", audioHabilitado);
    });
  document
    .getElementById("switchEfeitos")
    .addEventListener("change", (e) => {
      efeitosHabilitados = e.target.checked;
      localStorage.setItem("efeitosHabilitados", efeitosHabilitados);
    });

  // Listeners para mudança de método de gabarito
  document.addEventListener("change", function (e) {
    if (e.target.name === "metodoGabarito") {
      alternarMetodoGabarito();
    }
  });

  // Mostra o ícone do Easter Egg na inicialização
  mostrarEasterEggIcon();
  
  // Atualiza visibilidade dos botões de resultados salvos
  atualizarBotoesResultados();
});

function alternarMetodoGabarito() {
  const metodoManual = document.getElementById("metodoManual").checked;
  const configManual = document.getElementById("configManual");
  const configTexto = document.getElementById("configTexto");

  if (metodoManual) {
    configManual.classList.remove("d-none");
    configTexto.classList.add("d-none");
  } else {
    configManual.classList.add("d-none");
    configTexto.classList.remove("d-none");
  }
}

document.addEventListener("keydown", (e) => {
  // Só responde se estivermos na tela de questões
  if (
    !quizFinalizado &&
    ["A", "B", "C", "D", "E"].includes(e.key.toUpperCase()) &&
    !document.getElementById("telaQuestoes").classList.contains("hidden")
  ) {
    responder(e.key.toUpperCase());
  }
});

// FUNÇÕES DE CONTROLE DO PAINEL
function mostrarPainel() {
  document.getElementById("painelContainer").classList.remove("d-none");
}

function ocultarPainel() {
  document.getElementById("painelContainer").classList.add("d-none");
}

// FUNÇÕES PRINCIPAIS
function selecionarAno(ano) {
  if (ano === "anteriores") {
    alert("Edições anteriores do ENEM estarão disponíveis em breve!");
    return;
  }

  anoSelecionado = ano;
  mostrarTela("telaDia");
  ocultarPainel();
  ocultarEasterEgg();
}

function voltarAno() {
  anoSelecionado = null;
  diaSelecionado = null;
  mostrarTela("telaAno");
  ocultarPainel();

  // Só mostra o Easter Egg se ainda não foi usado
  if (!easterEggUsado) {
    mostrarEasterEggIcon();
  }
}

function selecionarDia(dia) {
  diaSelecionado = dia;

  // Ambos os dias agora funcionam normalmente
  mostrarTela("telaCor");
  habilitarBotoesCor(true);
  ocultarPainel();
}

function habilitarBotoesCor(habilitar) {
  const botoes = ["btnVerde", "btnBranca", "btnAzul", "btnAmarela"];

  botoes.forEach((btnId) => {
    const btn = document.getElementById(btnId);
    if (habilitar) {
      btn.disabled = false;
      btn.style.opacity = "1";
      btn.style.cursor = "pointer";
    } else {
      btn.disabled = true;
      btn.style.opacity = "0.5";
      btn.style.cursor = "not-allowed";
    }
  });
}

function voltarDia() {
  diaSelecionado = null;
  mostrarTela("telaDia");
  ocultarPainel();
}

function voltarCor() {
  provaSelecionada = null;
  mostrarTela("telaCor");
  ocultarPainel();
}

function selecionaProva(cor) {
  provaSelecionada = cor;
  
  // Primeiro dia tem seleção de idioma, segundo dia vai direto para as questões
  if (diaSelecionado === 1) {
    mostrarTela("telaIdioma");
    ocultarPainel();
  } else if (diaSelecionado === 2) {
    // Segundo dia: usa o array único de 90 questões
    gabaritoFinal = gabaritosDia2[cor];
    iniciarResposta();
  }
}

function definirIdioma(idioma) {
  // Só processa idioma para provas com cores (não personalizada)
  if (provaSelecionada && provaSelecionada !== "personalizada") {
    idiomaSelecionado = idioma;
    const dados = gabaritosDia1[provaSelecionada];
    gabaritoFinal = [...dados[idioma], ...dados.resto];
    iniciarResposta();
  }
}

function iniciarResposta() {
  quizFinalizado = false;
  questao = 1;
  
  // Se for dia 2, começa numeração a partir de 91
  const numeroInicial = diaSelecionado === 2 ? 91 : 1;
  const totalQuestoes = gabaritoFinal.length;
  const totalComDia2 = diaSelecionado === 2 ? 180 : 90;
  
  document.getElementById("qNum").innerText = numeroInicial;
  document.getElementById("totalQuestoes").innerText = totalComDia2;
  mostrarTela("telaQuestoes");
  mostrarPainel();
}

function responder(letra) {
  if (quizFinalizado) return;

  respostasUsuario.push(letra);
  const correta = gabaritoFinal[respostasUsuario.length - 1];
  const acertou = letra === correta;

  const numeroQuestao = diaSelecionado === 2 ? respostasUsuario.length + 90 : respostasUsuario.length;
  atualizarPainel(numeroQuestao, correta, letra);

  if (audioHabilitado)
    document.getElementById(acertou ? "somAcerto" : "somErro").play();

  if (efeitosHabilitados) {
    const overlay = document.getElementById("flashOverlay");

    // Remove classes anteriores
    overlay.classList.remove("flash-success-overlay", "flash-error-overlay");

    // Força um reflow
    void overlay.offsetWidth;

    // Adiciona a nova classe
    overlay.classList.add(
      acertou ? "flash-success-overlay" : "flash-error-overlay"
    );

    // Remove após a animação
    setTimeout(() => {
      overlay.classList.remove("flash-success-overlay", "flash-error-overlay");
    }, 1000);
  }

  if (respostasUsuario.length === gabaritoFinal.length) {
    finalizar();
  } else {
    questao++;
    const numeroExibido = diaSelecionado === 2 ? questao + 90 : questao;
    document.getElementById("qNum").innerText = numeroExibido;
  }
}

function atualizarPainel(numero, correta, marcada) {
  document.getElementById("infoQuestao").innerHTML = `
        <div class="mb-2" style="color: white !important;"><strong>Questão:</strong> <span class="text-info">${numero}</span></div>
        <div class="mb-2" style="color: white !important;"><strong>Correta:</strong> <span class="text-success">${
          correta || "-"
        }</span></div>
        <div style="color: white !important;"><strong>Você marcou:</strong> <span class="text-warning">${marcada}</span></div>
    `;
}

function voltarQuestao() {
  if (quizFinalizado || respostasUsuario.length === 0) return;

  respostasUsuario.pop();
  questao--;
  const numeroExibido = diaSelecionado === 2 ? questao + 90 : questao;
  document.getElementById("qNum").innerText = numeroExibido;
  atualizarPainel("—", "-", "-");
}

function voltarInicio() {
  provaSelecionada = null;
  gabaritoFinal = [];
  respostasUsuario = [];
  questao = 1;
  quizFinalizado = false;
  numQuestoesPersonalizada = 0;
  gabaritoPersonalizado = [];
  questaoGabaritoAtual = 1;
  anoSelecionado = null;
  diaSelecionado = null;
  idiomaSelecionado = null;

  mostrarTela("telaAno");
  ocultarPainel();

  // Só mostra o Easter Egg se ainda não foi usado
  if (!easterEggUsado) {
    mostrarEasterEggIcon();
  }
}

// FUNÇÕES PARA PROVA PERSONALIZADA
let numQuestoesPersonalizada = 0;
let gabaritoPersonalizado = [];
let questaoGabaritoAtual = 1;

// FUNÇÕES DO LOCAL STORAGE
function salvarProvaNoLocalStorage(nome, gabarito) {
  try {
    const provasSalvas = JSON.parse(localStorage.getItem("provasSalvas")) || {};
    const timestamp = new Date().toISOString();

    provasSalvas[nome] = {
      gabarito: gabarito,
      numQuestoes: gabarito.length,
      dataCriacao: timestamp,
      dataModificacao: timestamp,
    };

    localStorage.setItem("provasSalvas", JSON.stringify(provasSalvas));
    return true;
  } catch (error) {
    console.error("Erro ao salvar prova:", error);
    return false;
  }
}

function carregarProvaDoLocalStorage(nome) {
  try {
    const provasSalvas = JSON.parse(localStorage.getItem("provasSalvas")) || {};
    return provasSalvas[nome] || null;
  } catch (error) {
    console.error("Erro ao carregar prova:", error);
    return null;
  }
}

function listarProvasSalvas() {
  try {
    const provasSalvas = JSON.parse(localStorage.getItem("provasSalvas")) || {};
    return Object.keys(provasSalvas).map((nome) => ({
      nome: nome,
      ...provasSalvas[nome],
    }));
  } catch (error) {
    console.error("Erro ao listar provas:", error);
    return [];
  }
}

function excluirProvaSalva(nome) {
  try {
    const provasSalvas = JSON.parse(localStorage.getItem("provasSalvas")) || {};
    delete provasSalvas[nome];
    localStorage.setItem("provasSalvas", JSON.stringify(provasSalvas));
    return true;
  } catch (error) {
    console.error("Erro ao excluir prova:", error);
    return false;
  }
}

function iniciarProvaPersonalizada() {
  ocultarEasterEgg();
  mostrarTela("telaPersonalizadaConfig");
}

function processarProvaPersonalizada() {
  const metodoManual = document.getElementById("metodoManual").checked;

  if (metodoManual) {
    iniciarDefinicaoGabarito();
  } else {
    processarGabaritoTexto();
  }
}

function processarGabaritoTexto() {
  const textoGabarito = document.getElementById("gabaritoTexto").value;

  if (!textoGabarito.trim()) {
    alert("Por favor, digite o gabarito.");
    return;
  }

  // Remove espaços, quebras de linha e converte para maiúsculo
  const gabaritoLimpo = textoGabarito.replace(/[\s\n\r]/g, "").toUpperCase();

  // Valida se contém apenas A, B, C, D, E
  const regex = /^[ABCDE]+$/;
  if (!regex.test(gabaritoLimpo)) {
    alert("O gabarito deve conter apenas as letras A, B, C, D ou E.");
    return;
  }

  if (gabaritoLimpo.length === 0) {
    alert("O gabarito não pode estar vazio.");
    return;
  }

  if (gabaritoLimpo.length > 200) {
    alert("O gabarito não pode ter mais de 200 questões.");
    return;
  }

  // Converte string para array
  gabaritoPersonalizado = gabaritoLimpo.split("");
  numQuestoesPersonalizada = gabaritoPersonalizado.length;

  // Vai direto para o quiz
  iniciarQuizPersonalizado();
}

function abrirProvasSalvas() {
  const provas = listarProvasSalvas();

  if (provas.length === 0) {
    alert("Nenhuma prova salva encontrada.");
    return;
  }

  ocultarEasterEgg();
  mostrarTela("telaProvasSalvas");
  atualizarListaProvasSalvas();
}

function atualizarListaProvasSalvas() {
  const container = document.getElementById("listaProvasSalvas");
  const provas = listarProvasSalvas();

  container.innerHTML = "";

  if (provas.length === 0) {
    container.innerHTML =
      '<div class="text-center p-4" style="color: #ccc;"><i class="bi bi-folder-x me-2"></i>Nenhuma prova salva encontrada.</div>';
    return;
  }

  provas.forEach((prova) => {
    const data = new Date(prova.dataCriacao).toLocaleString("pt-BR");
    const div = document.createElement("div");
    div.className = "prova-salva-item mb-3 p-3";
    div.style.cssText =
      "background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: 8px;";

    div.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <div class="flex-grow-1">
          <h6 class="mb-1" style="color: white;">${prova.nome}</h6>
          <small style="color: #ccc;">${prova.numQuestoes} questões • Criada em ${data}</small>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-sucesso btn-sm" onclick="carregarProva('${prova.nome}')" title="Jogar prova">
            <i class="bi bi-play-fill"></i>
          </button>
          <button class="btn btn-info btn-sm" onclick="editarNomeProva('${prova.nome}')" title="Editar nome">
            <i class="bi bi-pencil-fill"></i>
          </button>
          <button class="btn btn-erro btn-sm" onclick="excluirProva('${prova.nome}')" title="Excluir prova">
            <i class="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>
    `;

    container.appendChild(div);
  });
}

function editarNomeProva(nomeAtual) {
  const novoNome = prompt(
    `Digite o novo nome para a prova "${nomeAtual}":`,
    nomeAtual
  );

  if (!novoNome || novoNome.trim() === "" || novoNome.trim() === nomeAtual) {
    return;
  }

  const nomeNovo = novoNome.trim();

  // Verifica se já existe uma prova com esse nome
  const provaExistente = carregarProvaDoLocalStorage(nomeNovo);
  if (provaExistente) {
    alert("Já existe uma prova com este nome. Escolha outro nome.");
    return;
  }

  // Carrega a prova atual
  const prova = carregarProvaDoLocalStorage(nomeAtual);
  if (!prova) {
    alert("Erro ao carregar a prova.");
    return;
  }

  // Salva com o novo nome
  prova.dataModificacao = new Date().toISOString();
  const sucesso = salvarProvaNoLocalStorage(nomeNovo, prova.gabarito);

  if (sucesso) {
    // Remove a prova antiga
    excluirProvaSalva(nomeAtual);
    atualizarListaProvasSalvas();
    alert("Nome da prova alterado com sucesso!");
  } else {
    alert("Erro ao alterar o nome da prova.");
  }
}

function carregarProva(nome) {
  const prova = carregarProvaDoLocalStorage(nome);

  if (!prova) {
    alert("Erro ao carregar a prova.");
    return;
  }

  // Configura a prova
  provaSelecionada = "personalizada";
  gabaritoFinal = prova.gabarito.slice();
  numQuestoesPersonalizada = prova.numQuestoes;
  respostasUsuario = [];
  questao = 1;
  quizFinalizado = false;

  // Inicia o quiz
  document.getElementById("qNum").innerText = questao;
  document.getElementById("totalQuestoes").innerText = numQuestoesPersonalizada;

  mostrarTela("telaQuestoes");
  mostrarPainel();
  atualizarPainel("—", "—", "—");
}

function excluirProva(nome) {
  if (confirm(`Tem certeza que deseja excluir a prova "${nome}"?`)) {
    const sucesso = excluirProvaSalva(nome);
    if (sucesso) {
      atualizarListaProvasSalvas();
      alert("Prova excluída com sucesso!");
    } else {
      alert("Erro ao excluir a prova.");
    }
  }
}

function limparTodasProvas() {
  const provas = listarProvasSalvas();

  if (provas.length === 0) {
    alert("Não há provas para excluir.");
    return;
  }

  if (
    confirm(
      `Tem certeza que deseja excluir TODAS as ${provas.length} provas salvas? Esta ação não pode ser desfeita!`
    )
  ) {
    try {
      localStorage.removeItem("provasSalvas");
      atualizarListaProvasSalvas();
      alert("Todas as provas foram excluídas com sucesso!");
    } catch (error) {
      console.error("Erro ao limpar provas:", error);
      alert("Erro ao excluir as provas.");
    }
  }
}

// EASTER EGG
function mostrarEasterEgg() {
  const overlay = document.getElementById("easterEggOverlay");

  // Marca como usado e esconde o ícone permanentemente
  easterEggUsado = true;
  ocultarEasterEgg();

  // Mostra o overlay
  overlay.classList.add("show");

  // Remove após 2 segundos
  setTimeout(() => {
    overlay.classList.remove("show");
  }, 2000);
}

function mostrarEasterEggIcon() {
  const icon = document.getElementById("easterEggIcon");
  if (icon && !easterEggUsado) {
    icon.style.display = "flex";
  }
}

function ocultarEasterEgg() {
  const icon = document.getElementById("easterEggIcon");
  if (icon) {
    icon.style.display = "none";
  }
}

function iniciarDefinicaoGabarito() {
  const input = document.getElementById("numQuestoesPersonalizada");
  const numQuestoes = parseInt(input.value);

  if (isNaN(numQuestoes) || numQuestoes < 1 || numQuestoes > 200) {
    alert("Por favor, insira um número válido entre 1 e 200");
    return;
  }

  numQuestoesPersonalizada = numQuestoes;
  gabaritoPersonalizado = [];
  questaoGabaritoAtual = 1;

  document.getElementById("questaoGabarito").textContent = questaoGabaritoAtual;
  document.getElementById("totalGabarito").textContent =
    numQuestoesPersonalizada;

  mostrarTela("telaDefinirGabarito");
}

function definirResposta(alternativa) {
  // Remove seleção anterior
  document.querySelectorAll(".btn-alternativa").forEach((btn) => {
    btn.classList.remove("selected");
  });

  // Marca nova seleção - procura o botão correto se foi chamado via teclado
  const botao =
    event && event.target
      ? event.target
      : document.querySelector(
          `.btn-alternativa:nth-child(${
            ["A", "B", "C", "D", "E"].indexOf(alternativa) + 1
          })`
        );
  if (botao) {
    botao.classList.add("selected");
  }

  // Salva a resposta
  gabaritoPersonalizado[questaoGabaritoAtual - 1] = alternativa;

  // Atualiza o número da questão imediatamente
  questaoGabaritoAtual++;

  // Verifica se chegou ao fim
  if (questaoGabaritoAtual > numQuestoesPersonalizada) {
    // Pequeno delay apenas para mostrar a seleção antes de finalizar
    setTimeout(() => {
      iniciarQuizPersonalizado();
    }, 150);
    return;
  }

  // Atualiza a interface imediatamente
  document.getElementById("questaoGabarito").textContent = questaoGabaritoAtual;

  // Remove a seleção após um pequeno delay visual
  setTimeout(() => {
    document.querySelectorAll(".btn-alternativa").forEach((btn) => {
      btn.classList.remove("selected");
    });
  }, 150);
}

// Event listener para teclado na tela de gabarito
document.addEventListener("keydown", function (e) {
  if (
    document.getElementById("telaDefinirGabarito").classList.contains("hidden")
  )
    return;

  const tecla = e.key.toUpperCase();
  if (["A", "B", "C", "D", "E"].includes(tecla)) {
    e.preventDefault();
    definirResposta(tecla);
  } else if (e.key === "Backspace" || e.key === "ArrowLeft") {
    e.preventDefault();
    voltarGabarito();
  }
});

function proximaQuestaoGabarito() {
  questaoGabaritoAtual++;

  if (questaoGabaritoAtual > numQuestoesPersonalizada) {
    // Gabarito completo, iniciar quiz
    iniciarQuizPersonalizado();
    return;
  }

  // Remove seleções
  document.querySelectorAll(".btn-alternativa").forEach((btn) => {
    btn.classList.remove("selected");
  });

  // Atualiza contador
  document.getElementById("questaoGabarito").textContent = questaoGabaritoAtual;
}

function voltarGabarito() {
  if (questaoGabaritoAtual > 1) {
    questaoGabaritoAtual--;
    gabaritoPersonalizado.pop();

    // Atualiza o display imediatamente
    document.getElementById("questaoGabarito").textContent =
      questaoGabaritoAtual;

    // Remove seleções
    document.querySelectorAll(".btn-alternativa").forEach((btn) => {
      btn.classList.remove("selected");
    });
  }
}

function iniciarQuizPersonalizado() {
  provaSelecionada = "personalizada";
  gabaritoFinal = gabaritoPersonalizado.slice();
  respostasUsuario = [];
  questao = 1;
  quizFinalizado = false;

  // Pergunta se quer salvar a prova
  const nomeProva = prompt(
    "Deseja salvar esta prova? Digite um nome (ou deixe em branco para não salvar):"
  );
  if (nomeProva && nomeProva.trim()) {
    const sucesso = salvarProvaNoLocalStorage(
      nomeProva.trim(),
      gabaritoPersonalizado
    );
    if (sucesso) {
      alert(`Prova "${nomeProva.trim()}" salva com sucesso!`);
    } else {
      alert("Erro ao salvar a prova.");
    }
  }

  // Pula a tela de idioma e vai direto para as questões
  document.getElementById("qNum").innerText = questao;
  document.getElementById("totalQuestoes").innerText = numQuestoesPersonalizada;

  mostrarTela("telaQuestoes");
  mostrarPainel();
  atualizarPainel("—", "—", "—");
}

function finalizar() {
  quizFinalizado = true;
  const acertos = respostasUsuario.filter(
    (r, i) => r === gabaritoFinal[i]
  ).length;

  // Calcula acertos por área (apenas para provas do ENEM de 90 questões)
  let acertosArea1 = 0; // Linguagens (dia 1) ou Natureza (dia 2)
  let acertosArea2 = 0; // Humanas (dia 1) ou Matemática (dia 2)
  let acertosLinguaEstrangeira = 0; // Apenas dia 1

  if (gabaritoFinal.length === 90) {
    if (diaSelecionado === 1) {
      // DIA 1: Linguagens e Humanas
      // Questões 6-45 = Linguagens (excluindo as 5 primeiras que são língua estrangeira)
      for (let i = 5; i < 45; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i]) {
          acertosArea1++;
        }
      }

      // Últimas 45 questões = Humanas
      for (let i = 45; i < 90; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i]) {
          acertosArea2++;
        }
      }

      // Primeiras 5 questões = Língua Estrangeira (Inglês ou Espanhol)
      for (let i = 0; i < 5; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i]) {
          acertosLinguaEstrangeira++;
        }
      }
    } else if (diaSelecionado === 2) {
      // DIA 2: Natureza e Matemática
      // Primeiras 45 questões = Ciências da Natureza
      for (let i = 0; i < 45; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i]) {
          acertosArea1++;
        }
      }

      // Últimas 45 questões = Matemática
      for (let i = 45; i < 90; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i]) {
          acertosArea2++;
        }
      }
    }
  }

  ocultarPainel();

  // Atualiza informações do resultado
  document.getElementById("numAcertos").innerText = acertos;
  document.getElementById("totalFinal").innerText = gabaritoFinal.length;

  // Atualiza contadores por área
  if (gabaritoFinal.length === 90) {
    if (diaSelecionado === 1) {
      // Dia 1: Mostra Língua Estrangeira, Linguagens e Humanas
      document.getElementById("acertosLinguagens").innerText = acertosArea1;
      document.getElementById("acertosHumanas").innerText = acertosArea2;
      document.getElementById("acertosLinguaEstrangeira").innerText = acertosLinguaEstrangeira;
      document.getElementById("labelArea1").innerText = "Linguagens";
      document.getElementById("labelArea2").innerText = "Humanas";
      document.getElementById("totalArea1").innerText = "40";
      document.getElementById("totalArea2").innerText = "45";
      document.getElementById("iconArea1").className = "bi bi-book-fill text-primary fs-4 mb-2";
      document.getElementById("iconArea2").className = "bi bi-people-fill text-warning fs-4 mb-2";
      document.getElementById("cardLinguaEstrangeira").style.display = "block";
    } else if (diaSelecionado === 2) {
      // Dia 2: Mostra Natureza e Matemática (esconde Língua Estrangeira)
      document.getElementById("acertosLinguagens").innerText = acertosArea1;
      document.getElementById("acertosHumanas").innerText = acertosArea2;
      document.getElementById("labelArea1").innerText = "Ciências da Natureza";
      document.getElementById("labelArea2").innerText = "Matemática";
      document.getElementById("totalArea1").innerText = "45";
      document.getElementById("totalArea2").innerText = "45";
      document.getElementById("iconArea1").className = "bi bi-gear-fill text-success fs-4 mb-2";
      document.getElementById("iconArea2").className = "bi bi-calculator-fill text-info fs-4 mb-2";
      document.getElementById("cardLinguaEstrangeira").style.display = "none";
    }
    document.getElementById("contadoresPorArea").style.display = "block";
  } else {
    document.getElementById("contadoresPorArea").style.display = "none";
  }

  // Gera a tabela de resultados
  gerarTabelaResultados();

  // Salva o resultado no localStorage
  salvarResultadoNoLocalStorage();

  mostrarTela("telaResultado");
}

function recomecarMesmaProva() {
  if (provaSelecionada && provaSelecionada !== "personalizada") {
    // Reset das respostas mas mantém configurações
    respostasUsuario = [];
    questao = 1;
    quizFinalizado = false;
    
    // Reconstrói o gabarito com as mesmas configurações
    if (diaSelecionado === 1 && idiomaSelecionado) {
      const dados = gabaritosDia1[provaSelecionada];
      gabaritoFinal = [...dados[idiomaSelecionado], ...dados.resto];
    } else if (diaSelecionado === 2) {
      gabaritoFinal = gabaritosDia2[provaSelecionada];
    }
    
    // Inicia novamente
    document.getElementById("qNum").innerText = questao;
    document.getElementById("totalQuestoes").innerText = gabaritoFinal.length;
    mostrarTela("telaQuestoes");
    mostrarPainel();
    atualizarPainel("—", "—", "—");
  } else if (provaSelecionada === "personalizada") {
    // Para provas personalizadas, simplesmente reinicia
    respostasUsuario = [];
    questao = 1;
    quizFinalizado = false;
    
    document.getElementById("qNum").innerText = questao;
    document.getElementById("totalQuestoes").innerText = gabaritoFinal.length;
    mostrarTela("telaQuestoes");
    mostrarPainel();
    atualizarPainel("—", "—", "—");
  } else {
    // Fallback para reload completo
    location.reload();
  }
}

function gerarTabelaResultados() {
  const tabela = document.getElementById("tabela");
  tabela.innerHTML = "";

  for (let i = 0; i < gabaritoFinal.length; i++) {
    if (i % 10 === 0) {
      const linha = tabela.insertRow();
    }

    const correta = gabaritoFinal[i];
    const marcada = respostasUsuario[i] || "-";
    const acertou = correta === marcada;

    const celula = tabela.rows[tabela.rows.length - 1].insertCell();
    celula.className = `resultado-cell ${
      acertou ? "cell-success" : "cell-error"
    }`;
    celula.innerHTML = `
                    <div><strong>${i + 1}</strong></div>
                    <div>${marcada}</div>
                    ${
                      acertou
                        ? ""
                        : `<small class="text-light">(${correta})</small>`
                    }
                `;
  }
}

function salvarResultadoPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  // Configurações
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const margin = 15;
  let yPos = margin;
  
  // Calcula estatísticas
  const acertos = respostasUsuario.filter((r, i) => r === gabaritoFinal[i]).length;
  const erros = gabaritoFinal.length - acertos;
  const percentual = ((acertos / gabaritoFinal.length) * 100).toFixed(1);
  
  // Título
  doc.setFontSize(20);
  doc.setFont(undefined, 'bold');
  doc.text("RELATÓRIO DE DESEMPENHO - ENEM", pageWidth / 2, yPos, { align: 'center' });
  yPos += 10;
  
  // Data e hora
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  const dataHora = new Date().toLocaleString('pt-BR');
  doc.text(`Data: ${dataHora}`, pageWidth / 2, yPos, { align: 'center' });
  yPos += 15;
  
  // Informações da prova
  doc.setFontSize(12);
  doc.setFont(undefined, 'bold');
  doc.text("INFORMAÇÕES DA PROVA", margin, yPos);
  yPos += 7;
  
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  
  if (provaSelecionada && provaSelecionada !== "personalizada") {
    doc.text(`Prova: ENEM ${anoSelecionado || '2025'} - Dia ${diaSelecionado || '1'}`, margin, yPos);
    yPos += 6;
    doc.text(`Cor da Prova: ${provaSelecionada.charAt(0).toUpperCase() + provaSelecionada.slice(1)}`, margin, yPos);
    yPos += 6;
    if (idiomaSelecionado) {
      doc.text(`Idioma: ${idiomaSelecionado.charAt(0).toUpperCase() + idiomaSelecionado.slice(1)}`, margin, yPos);
      yPos += 6;
    }
  } else {
    doc.text("Prova: Personalizada", margin, yPos);
    yPos += 6;
  }
  
  doc.text(`Total de Questões: ${gabaritoFinal.length}`, margin, yPos);
  yPos += 12;
  
  // Resumo do Desempenho
  doc.setFontSize(12);
  doc.setFont(undefined, 'bold');
  doc.text("RESUMO DO DESEMPENHO", margin, yPos);
  yPos += 7;
  
  doc.setFontSize(11);
  doc.setFont(undefined, 'normal');
  doc.setTextColor(0, 128, 0);
  doc.text(`✓ Acertos: ${acertos} (${percentual}%)`, margin, yPos);
  yPos += 6;
  
  doc.setTextColor(255, 0, 0);
  doc.text(`✗ Erros: ${erros} (${(100 - percentual).toFixed(1)}%)`, margin, yPos);
  yPos += 10;
  
  doc.setTextColor(0, 0, 0);
  
  // Desempenho por área (se for prova do ENEM de 90 questões)
  if (gabaritoFinal.length === 90) {
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text("DESEMPENHO POR ÁREA", margin, yPos);
    yPos += 7;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    
    if (diaSelecionado === 1) {
      // Dia 1: Calcula acertos por área
      let acertosLinguaEstrangeira = 0;
      let acertosLinguagens = 0;
      let acertosHumanas = 0;
      
      for (let i = 0; i < 5; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i]) acertosLinguaEstrangeira++;
      }
      for (let i = 5; i < 45; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i]) acertosLinguagens++;
      }
      for (let i = 45; i < 90; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i]) acertosHumanas++;
      }
      
      doc.text(`Língua Estrangeira: ${acertosLinguaEstrangeira}/5 (${((acertosLinguaEstrangeira/5)*100).toFixed(1)}%)`, margin, yPos);
      yPos += 6;
      doc.text(`Linguagens: ${acertosLinguagens}/40 (${((acertosLinguagens/40)*100).toFixed(1)}%)`, margin, yPos);
      yPos += 6;
      doc.text(`Humanas: ${acertosHumanas}/45 (${((acertosHumanas/45)*100).toFixed(1)}%)`, margin, yPos);
      yPos += 12;
    } else if (diaSelecionado === 2) {
      // Dia 2: Calcula acertos por área
      let acertosNatureza = 0;
      let acertosMatematica = 0;
      
      for (let i = 0; i < 45; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i]) acertosNatureza++;
      }
      for (let i = 45; i < 90; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i]) acertosMatematica++;
      }
      
      doc.text(`Ciências da Natureza: ${acertosNatureza}/45 (${((acertosNatureza/45)*100).toFixed(1)}%)`, margin, yPos);
      yPos += 6;
      doc.text(`Matemática: ${acertosMatematica}/45 (${((acertosMatematica/45)*100).toFixed(1)}%)`, margin, yPos);
      yPos += 12;
    }
  }
  
  // Detalhamento das respostas
  doc.setFontSize(12);
  doc.setFont(undefined, 'bold');
  doc.text("DETALHAMENTO DAS RESPOSTAS", margin, yPos);
  yPos += 7;
  
  doc.setFontSize(8);
  doc.setFont(undefined, 'normal');
  
  // Cabeçalho da tabela
  const colWidth = 18;
  const startX = margin;
  
  for (let i = 0; i < gabaritoFinal.length; i++) {
    if (yPos > pageHeight - 30) {
      doc.addPage();
      yPos = margin;
      doc.setFontSize(12);
      doc.setFont(undefined, 'bold');
      doc.text("DETALHAMENTO DAS RESPOSTAS (continuação)", margin, yPos);
      yPos += 7;
      doc.setFontSize(8);
      doc.setFont(undefined, 'normal');
    }
    
    if (i % 10 === 0 && i > 0) {
      yPos += 8;
    }
    
    const col = i % 10;
    const x = startX + (col * colWidth);
    
    const correta = gabaritoFinal[i];
    const marcada = respostasUsuario[i] || "-";
    const acertou = correta === marcada;
    
    // Desenha célula
    if (acertou) {
      doc.setFillColor(200, 255, 200);
    } else {
      doc.setFillColor(255, 200, 200);
    }
    
    doc.rect(x, yPos, colWidth - 1, 8, 'F');
    doc.setTextColor(0, 0, 0);
    
    doc.setFont(undefined, 'bold');
    doc.text(`${i + 1}`, x + 2, yPos + 3);
    doc.setFont(undefined, 'normal');
    doc.text(marcada, x + 2, yPos + 6.5);
    
    if (!acertou) {
      doc.setFontSize(7);
      doc.text(`(${correta})`, x + 7, yPos + 6.5);
      doc.setFontSize(8);
    }
  }
  
  // Rodapé
  const totalPages = doc.internal.pages.length - 1;
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(
      `Página ${i} de ${totalPages} - Gerado em ${dataHora}`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }
  
  // Salva o PDF
  const nomeArquivo = provaSelecionada !== "personalizada" 
    ? `ENEM_${anoSelecionado || '2025'}_${provaSelecionada}_${Date.now()}.pdf`
    : `Prova_Personalizada_${Date.now()}.pdf`;
  
  doc.save(nomeArquivo);
  
  // Feedback visual
  alert("PDF salvo com sucesso!");
}

function salvarResultadoNoLocalStorage() {
  if (provaSelecionada && provaSelecionada !== "personalizada" && diaSelecionado) {
    const resultado = {
      dia: diaSelecionado,
      ano: anoSelecionado || 2025,
      cor: provaSelecionada,
      idioma: idiomaSelecionado,
      gabaritoFinal: gabaritoFinal,
      respostasUsuario: respostasUsuario,
      dataRealizacao: new Date().toISOString()
    };
    
    localStorage.setItem(`resultadoDia${diaSelecionado}`, JSON.stringify(resultado));
    
    // Atualiza visibilidade dos botões na tela inicial
    atualizarBotoesResultados();
  }
}

function atualizarBotoesResultados() {
  const resultadoDia1 = localStorage.getItem('resultadoDia1');
  const resultadoDia2 = localStorage.getItem('resultadoDia2');
  
  const btnDia1 = document.getElementById('btnResultadoDia1');
  const btnDia2 = document.getElementById('btnResultadoDia2');
  
  if (btnDia1) {
    btnDia1.style.display = resultadoDia1 ? 'block' : 'none';
  }
  if (btnDia2) {
    btnDia2.style.display = resultadoDia2 ? 'block' : 'none';
  }
}

function abrirResultadoSalvo(dia) {
  const resultadoSalvo = localStorage.getItem(`resultadoDia${dia}`);
  
  if (!resultadoSalvo) {
    alert('Nenhum resultado encontrado para este dia.');
    return;
  }
  
  const resultado = JSON.parse(resultadoSalvo);
  
  // Restaura as variáveis globais
  anoSelecionado = resultado.ano;
  diaSelecionado = resultado.dia;
  provaSelecionada = resultado.cor;
  idiomaSelecionado = resultado.idioma;
  gabaritoFinal = resultado.gabaritoFinal;
  respostasUsuario = resultado.respostasUsuario;
  quizFinalizado = true;
  
  // Calcula e exibe o resultado
  const acertos = respostasUsuario.filter((r, i) => r === gabaritoFinal[i]).length;
  
  // Calcula acertos por área
  let acertosArea1 = 0;
  let acertosArea2 = 0;
  let acertosLinguaEstrangeira = 0;

  if (gabaritoFinal.length === 90) {
    if (diaSelecionado === 1) {
      for (let i = 5; i < 45; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i]) acertosArea1++;
      }
      for (let i = 45; i < 90; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i]) acertosArea2++;
      }
      for (let i = 0; i < 5; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i]) acertosLinguaEstrangeira++;
      }
    } else if (diaSelecionado === 2) {
      for (let i = 0; i < 45; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i]) acertosArea1++;
      }
      for (let i = 45; i < 90; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i]) acertosArea2++;
      }
    }
  }
  
  // Atualiza informações do resultado
  document.getElementById("numAcertos").innerText = acertos;
  document.getElementById("totalFinal").innerText = gabaritoFinal.length;

  // Atualiza contadores por área
  if (gabaritoFinal.length === 90) {
    if (diaSelecionado === 1) {
      document.getElementById("acertosLinguagens").innerText = acertosArea1;
      document.getElementById("acertosHumanas").innerText = acertosArea2;
      document.getElementById("acertosLinguaEstrangeira").innerText = acertosLinguaEstrangeira;
      document.getElementById("labelArea1").innerText = "Linguagens";
      document.getElementById("labelArea2").innerText = "Humanas";
      document.getElementById("totalArea1").innerText = "40";
      document.getElementById("totalArea2").innerText = "45";
      document.getElementById("iconArea1").className = "bi bi-book-fill text-primary fs-4 mb-2";
      document.getElementById("iconArea2").className = "bi bi-people-fill text-warning fs-4 mb-2";
      document.getElementById("cardLinguaEstrangeira").style.display = "block";
    } else if (diaSelecionado === 2) {
      document.getElementById("acertosLinguagens").innerText = acertosArea1;
      document.getElementById("acertosHumanas").innerText = acertosArea2;
      document.getElementById("labelArea1").innerText = "Ciências da Natureza";
      document.getElementById("labelArea2").innerText = "Matemática";
      document.getElementById("totalArea1").innerText = "45";
      document.getElementById("totalArea2").innerText = "45";
      document.getElementById("iconArea1").className = "bi bi-gear-fill text-success fs-4 mb-2";
      document.getElementById("iconArea2").className = "bi bi-calculator-fill text-info fs-4 mb-2";
      document.getElementById("cardLinguaEstrangeira").style.display = "none";
    }
    document.getElementById("contadoresPorArea").style.display = "block";
  } else {
    document.getElementById("contadoresPorArea").style.display = "none";
  }

  // Gera a tabela de resultados
  gerarTabelaResultados();

  mostrarTela("telaResultado");
}

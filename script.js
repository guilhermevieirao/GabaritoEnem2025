// CONFIGURAÇÃO DOS GABARITOS
const gabaritos = {
  verde: {
    ingles: ["D", "D", "A", "D", "E"],
    espanhol: ["B", "D", "A", "D", "C"],
    resto: [
      "E",
      "D",
      "C",
      "C",
      "E",
      "B",
      "E",
      "B",
      "C",
      "E",
      "C",
      "A",
      "E",
      "B",
      "C",
      "A",
      "E",
      "D",
      "C",
      "E",
      "D",
      "B",
      "A",
      "B",
      "A",
      "B",
      "D",
      "E",
      "B",
      "B",
      "C",
      "B",
      "A",
      "A",
      "B",
      "D",
      "D",
      "C",
      "C",
      "A",
      "C",
      "E",
      "E",
      "D",
      "C",
      "A",
      "D",
      "B",
      "D",
      "E",
      "C",
      "A",
      "D",
      "E",
      "D",
      "E",
      "C",
      "A",
      "B",
      "A",
      "C",
      "B",
      "A",
      "D",
      "A",
      "B",
      "B",
      "C",
      "B",
      "C",
      "E",
      "A",
      "E",
      "E",
      "D",
      "D",
      "B",
      "C",
      "D",
      "D",
      "E",
      "C",
      "B",
      "B",
      "A",
    ],
  },
  branca: {
    ingles: ["E", "A", "D", "D", "D"],
    espanhol: ["D", "C", "B", "A", "D"],
    resto: [
      "C",
      "E",
      "E",
      "D",
      "C",
      "A",
      "E",
      "B",
      "C",
      "A",
      "E",
      "D",
      "B",
      "C",
      "E",
      "C",
      "B",
      "E",
      "B",
      "C",
      "B",
      "A",
      "B",
      "A",
      "C",
      "E",
      "D",
      "B",
      "D",
      "E",
      "B",
      "C",
      "A",
      "B",
      "A",
      "D",
      "D",
      "C",
      "A",
      "B",
      "A",
      "D",
      "B",
      "D",
      "E",
      "E",
      "D",
      "E",
      "C",
      "E",
      "E",
      "D",
      "C",
      "C",
      "A",
      "D",
      "B",
      "A",
      "D",
      "A",
      "B",
      "B",
      "C",
      "A",
      "B",
      "A",
      "C",
      "B",
      "B",
      "A",
      "C",
      "D",
      "D",
      "E",
      "C",
      "C",
      "B",
      "C",
      "E",
      "A",
      "E",
      "E",
      "D",
      "D",
      "B",
    ],
  },
  azul: {
    ingles: ["D", "D", "D", "E", "A"],
    espanhol: ["B", "A", "D", "D", "C"],
    resto: [
      "E",
      "C",
      "D",
      "C",
      "E",
      "B",
      "C",
      "E",
      "C",
      "A",
      "E",
      "D",
      "A",
      "E",
      "B",
      "C",
      "B",
      "C",
      "B",
      "E",
      "B",
      "A",
      "B",
      "A",
      "B",
      "D",
      "E",
      "B",
      "C",
      "E",
      "D",
      "A",
      "B",
      "C",
      "A",
      "B",
      "A",
      "D",
      "D",
      "C",
      "E",
      "D",
      "E",
      "C",
      "A",
      "D",
      "C",
      "E",
      "E",
      "D",
      "C",
      "A",
      "D",
      "B",
      "D",
      "E",
      "B",
      "B",
      "A",
      "C",
      "D",
      "D",
      "E",
      "C",
      "B",
      "A",
      "D",
      "A",
      "B",
      "B",
      "C",
      "A",
      "B",
      "A",
      "C",
      "E",
      "E",
      "D",
      "D",
      "B",
      "C",
      "B",
      "C",
      "E",
      "A",
    ],
  },
  amarela: {
    ingles: ["A", "E", "D", "D", "D"],
    espanhol: ["D", "B", "A", "C", "D"],
    resto: [
      "C",
      "E",
      "C",
      "E",
      "D",
      "A",
      "E",
      "D",
      "A",
      "E",
      "B",
      "C",
      "B",
      "E",
      "B",
      "C",
      "E",
      "C",
      "B",
      "D",
      "E",
      "B",
      "C",
      "E",
      "D",
      "B",
      "A",
      "B",
      "A",
      "B",
      "C",
      "D",
      "D",
      "C",
      "C",
      "A",
      "A",
      "B",
      "B",
      "A",
      "C",
      "A",
      "D",
      "E",
      "D",
      "E",
      "A",
      "D",
      "B",
      "D",
      "E",
      "C",
      "E",
      "E",
      "D",
      "C",
      "C",
      "D",
      "D",
      "E",
      "C",
      "C",
      "B",
      "C",
      "E",
      "A",
      "B",
      "B",
      "A",
      "C",
      "A",
      "B",
      "A",
      "C",
      "E",
      "E",
      "D",
      "D",
      "B",
      "B",
      "A",
      "D",
      "A",
      "B",
      "B",
    ],
  },
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

// FUNÇÕES DE NAVEGAÇÃO ENTRE TELAS
function mostrarTela(telaId) {
  document
    .querySelectorAll(".tela-secao")
    .forEach((tela) => tela.classList.add("hidden"));
  document.getElementById(telaId).classList.remove("hidden");
}

// CONFIGURAÇÃO INICIAL
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("switchAudio")
    .addEventListener("change", (e) => (audioHabilitado = e.target.checked));
  document
    .getElementById("switchEfeitos")
    .addEventListener("change", (e) => (efeitosHabilitados = e.target.checked));
    
  // Listeners para mudança de método de gabarito
  document.addEventListener('change', function(e) {
    if (e.target.name === 'metodoGabarito') {
      alternarMetodoGabarito();
    }
  });
  
  // Mostra o ícone do Easter Egg na inicialização
  mostrarEasterEggIcon();
});

function alternarMetodoGabarito() {
  const metodoManual = document.getElementById('metodoManual').checked;
  const configManual = document.getElementById('configManual');
  const configTexto = document.getElementById('configTexto');
  
  if (metodoManual) {
    configManual.classList.remove('d-none');
    configTexto.classList.add('d-none');
  } else {
    configManual.classList.add('d-none');
    configTexto.classList.remove('d-none');
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
  if (ano === 'anteriores') {
    alert('Edições anteriores do ENEM estarão disponíveis em breve!');
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
  
  if (dia === 1) {
    // Primeiro dia - funciona normalmente
    mostrarTela("telaCor");
    document.getElementById("mensagemSegundoDia").classList.add("d-none");
    habilitarBotoesCor(true);
  } else if (dia === 2) {
    // Segundo dia - mostra como bloqueado
    mostrarTela("telaCor");
    document.getElementById("mensagemSegundoDia").classList.remove("d-none");
    habilitarBotoesCor(false);
  }
  ocultarPainel();
}

function habilitarBotoesCor(habilitar) {
  const botoes = ['btnVerde', 'btnBranca', 'btnAzul', 'btnAmarela'];
  
  botoes.forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (habilitar) {
      btn.disabled = false;
      btn.style.opacity = '1';
      btn.style.cursor = 'pointer';
    } else {
      btn.disabled = true;
      btn.style.opacity = '0.5';
      btn.style.cursor = 'not-allowed';
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
  if (diaSelecionado === 2) {
    alert('Gabaritos do segundo dia estarão disponíveis em 16/11/2025');
    return;
  }
  
  provaSelecionada = cor;
  mostrarTela("telaIdioma");
  ocultarPainel();
}

function definirIdioma(idioma) {
  // Só processa idioma para provas com cores (não personalizada)
  if (provaSelecionada && provaSelecionada !== "personalizada") {
    const dados = gabaritos[provaSelecionada];
    gabaritoFinal = [...dados[idioma], ...dados.resto];
    iniciarResposta();
  }
}

function iniciarResposta() {
  quizFinalizado = false;
  questao = 1;
  document.getElementById("qNum").innerText = questao;
  document.getElementById("totalQuestoes").innerText = gabaritoFinal.length;
  mostrarTela("telaQuestoes");
  mostrarPainel();
}

function responder(letra) {
  if (quizFinalizado) return;

  respostasUsuario.push(letra);
  const correta = gabaritoFinal[respostasUsuario.length - 1];
  const acertou = letra === correta;

  atualizarPainel(respostasUsuario.length, correta, letra);

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
    document.getElementById("qNum").innerText = ++questao;
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
  document.getElementById("qNum").innerText = --questao;
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
    const provasSalvas = JSON.parse(localStorage.getItem('provasSalvas')) || {};
    const timestamp = new Date().toISOString();
    
    provasSalvas[nome] = {
      gabarito: gabarito,
      numQuestoes: gabarito.length,
      dataCriacao: timestamp,
      dataModificacao: timestamp
    };
    
    localStorage.setItem('provasSalvas', JSON.stringify(provasSalvas));
    return true;
  } catch (error) {
    console.error('Erro ao salvar prova:', error);
    return false;
  }
}

function carregarProvaDoLocalStorage(nome) {
  try {
    const provasSalvas = JSON.parse(localStorage.getItem('provasSalvas')) || {};
    return provasSalvas[nome] || null;
  } catch (error) {
    console.error('Erro ao carregar prova:', error);
    return null;
  }
}

function listarProvasSalvas() {
  try {
    const provasSalvas = JSON.parse(localStorage.getItem('provasSalvas')) || {};
    return Object.keys(provasSalvas).map(nome => ({
      nome: nome,
      ...provasSalvas[nome]
    }));
  } catch (error) {
    console.error('Erro ao listar provas:', error);
    return [];
  }
}

function excluirProvaSalva(nome) {
  try {
    const provasSalvas = JSON.parse(localStorage.getItem('provasSalvas')) || {};
    delete provasSalvas[nome];
    localStorage.setItem('provasSalvas', JSON.stringify(provasSalvas));
    return true;
  } catch (error) {
    console.error('Erro ao excluir prova:', error);
    return false;
  }
}

function iniciarProvaPersonalizada() {
  ocultarEasterEgg();
  mostrarTela("telaPersonalizadaConfig");
}

function processarProvaPersonalizada() {
  const metodoManual = document.getElementById('metodoManual').checked;
  
  if (metodoManual) {
    iniciarDefinicaoGabarito();
  } else {
    processarGabaritoTexto();
  }
}

function processarGabaritoTexto() {
  const textoGabarito = document.getElementById('gabaritoTexto').value;
  
  if (!textoGabarito.trim()) {
    alert('Por favor, digite o gabarito.');
    return;
  }
  
  // Remove espaços, quebras de linha e converte para maiúsculo
  const gabaritoLimpo = textoGabarito
    .replace(/[\s\n\r]/g, '')
    .toUpperCase();
  
  // Valida se contém apenas A, B, C, D, E
  const regex = /^[ABCDE]+$/;
  if (!regex.test(gabaritoLimpo)) {
    alert('O gabarito deve conter apenas as letras A, B, C, D ou E.');
    return;
  }
  
  if (gabaritoLimpo.length === 0) {
    alert('O gabarito não pode estar vazio.');
    return;
  }
  
  if (gabaritoLimpo.length > 200) {
    alert('O gabarito não pode ter mais de 200 questões.');
    return;
  }
  
  // Converte string para array
  gabaritoPersonalizado = gabaritoLimpo.split('');
  numQuestoesPersonalizada = gabaritoPersonalizado.length;
  
  // Vai direto para o quiz
  iniciarQuizPersonalizado();
}

function abrirProvasSalvas() {
  const provas = listarProvasSalvas();
  
  if (provas.length === 0) {
    alert('Nenhuma prova salva encontrada.');
    return;
  }
  
  ocultarEasterEgg();
  mostrarTela("telaProvasSalvas");
  atualizarListaProvasSalvas();
}

function atualizarListaProvasSalvas() {
  const container = document.getElementById('listaProvasSalvas');
  const provas = listarProvasSalvas();
  
  container.innerHTML = '';
  
  if (provas.length === 0) {
    container.innerHTML = '<div class="text-center p-4" style="color: #ccc;"><i class="bi bi-folder-x me-2"></i>Nenhuma prova salva encontrada.</div>';
    return;
  }
  
  provas.forEach(prova => {
    const data = new Date(prova.dataCriacao).toLocaleString('pt-BR');
    const div = document.createElement('div');
    div.className = 'prova-salva-item mb-3 p-3';
    div.style.cssText = 'background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: 8px;';
    
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
  const novoNome = prompt(`Digite o novo nome para a prova "${nomeAtual}":`, nomeAtual);
  
  if (!novoNome || novoNome.trim() === '' || novoNome.trim() === nomeAtual) {
    return;
  }
  
  const nomeNovo = novoNome.trim();
  
  // Verifica se já existe uma prova com esse nome
  const provaExistente = carregarProvaDoLocalStorage(nomeNovo);
  if (provaExistente) {
    alert('Já existe uma prova com este nome. Escolha outro nome.');
    return;
  }
  
  // Carrega a prova atual
  const prova = carregarProvaDoLocalStorage(nomeAtual);
  if (!prova) {
    alert('Erro ao carregar a prova.');
    return;
  }
  
  // Salva com o novo nome
  prova.dataModificacao = new Date().toISOString();
  const sucesso = salvarProvaNoLocalStorage(nomeNovo, prova.gabarito);
  
  if (sucesso) {
    // Remove a prova antiga
    excluirProvaSalva(nomeAtual);
    atualizarListaProvasSalvas();
    alert('Nome da prova alterado com sucesso!');
  } else {
    alert('Erro ao alterar o nome da prova.');
  }
}

function carregarProva(nome) {
  const prova = carregarProvaDoLocalStorage(nome);
  
  if (!prova) {
    alert('Erro ao carregar a prova.');
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
      alert('Prova excluída com sucesso!');
    } else {
      alert('Erro ao excluir a prova.');
    }
  }
}

function limparTodasProvas() {
  const provas = listarProvasSalvas();
  
  if (provas.length === 0) {
    alert('Não há provas para excluir.');
    return;
  }
  
  if (confirm(`Tem certeza que deseja excluir TODAS as ${provas.length} provas salvas? Esta ação não pode ser desfeita!`)) {
    try {
      localStorage.removeItem('provasSalvas');
      atualizarListaProvasSalvas();
      alert('Todas as provas foram excluídas com sucesso!');
    } catch (error) {
      console.error('Erro ao limpar provas:', error);
      alert('Erro ao excluir as provas.');
    }
  }
}

// EASTER EGG
function mostrarEasterEgg() {
  const overlay = document.getElementById('easterEggOverlay');
  
  // Marca como usado e esconde o ícone permanentemente
  easterEggUsado = true;
  ocultarEasterEgg();
  
  // Mostra o overlay
  overlay.classList.add('show');
  
  // Remove após 2 segundos
  setTimeout(() => {
    overlay.classList.remove('show');
  }, 2000);
}

function mostrarEasterEggIcon() {
  const icon = document.getElementById('easterEggIcon');
  if (icon && !easterEggUsado) {
    icon.style.display = 'flex';
  }
}

function ocultarEasterEgg() {
  const icon = document.getElementById('easterEggIcon');
  if (icon) {
    icon.style.display = 'none';
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
    document.getElementById("questaoGabarito").textContent = questaoGabaritoAtual;

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
  const nomeProva = prompt('Deseja salvar esta prova? Digite um nome (ou deixe em branco para não salvar):');
  if (nomeProva && nomeProva.trim()) {
    const sucesso = salvarProvaNoLocalStorage(nomeProva.trim(), gabaritoPersonalizado);
    if (sucesso) {
      alert(`Prova "${nomeProva.trim()}" salva com sucesso!`);
    } else {
      alert('Erro ao salvar a prova.');
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

  ocultarPainel();

  // Atualiza informações do resultado
  document.getElementById("numAcertos").innerText = acertos;
  document.getElementById("totalFinal").innerText = gabaritoFinal.length;

  // Gera a tabela de resultados
  gerarTabelaResultados();

  mostrarTela("telaResultado");
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

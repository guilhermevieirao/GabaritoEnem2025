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
  branco: {
  ingles: ["E", "A", "D", "D", "D"],
  espanhol: ["D", "C", "B", "A", "D"],
  resto: [
    "C","E","E","D","C",
    "A","E","B","C","A",
    "E","C","B","C","E",
    "C","B","E","B","C",
    "B","A","B","A","C",
    "E","D","B","D","E",
    "B","C","A","B","A",
    "D","D","C","A","B",
    "A","D","B","D","E",
    "E","D","E","C","E",
    "E","D","C","C","A",
    "D","B","A","D","A",
    "B","B","C","A","B",
    "A","C","B","B","A",
    "C","D","D","E","C",
    "C","B","C","E","A",
    "E","E","D","D","B"
  ]
},
  azul: {
  ingles: ["D", "D", "D", "E", "A"],
  espanhol: ["B", "A", "D", "D", "C"],
  resto: [
    "E","C","D","C","E",
    "B","C","E","C","A",
    "E","C","A","E","B",
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
  amarelo: {
  ingles: ["A", "E", "D", "D", "D"],
  espanhol: ["D", "B", "A", "C", "D"],
  resto: [
    "C","E","C","E","D",
    "A","E","C","A","E",
    "B","C","B","E","B",
    "C","E","C","B","D",
    "E","B","C","E","D",
    "B","A","B","A","B",
    "C","D","D","C","C",
    "A","A","B","B","A",
    "C","A","D","E","D",
    "E","A","D","B","D",
    "E","C","E","E","D",
    "C","C","D","D","E",
    "C","C","B","C","E",
    "A","B","B","A","C",
    "A","B","A","C","E",
    "E","D","D","B","B",
    "A","D","A","B","B"
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
  "D","X","E","E","X","B","D","D","D","E",
  "B","C","A","D","D","B","C","E","C","C",
  "A","C","E","C","D","E","B","E","C","C",
  "D","B","A","E","A","B","A","B","C","C",
  "B","E","A","D","D","E","B","E","D","A"
],

  cinza: [
  "C","D","A","E","A","A","C","B","D","D",
  "E","C","E","E","B","D","E","A","B","B",
  "C","B","B","D","X","E","E","X","B","B",
  "D","C","D","C","B","A","A","B","D","D",
  "C","D","C","E","A","A","D","D","B","B",
  "C","E","C","E","C","C","B","D","D","D",
  "E","C","A","C","E","A","B","D","E","B",
  "E","C","C","D","B","A","B","E","A","A",
  "A","X","C","C","B","E","A","D","D","E"
],

  azul: [
  "D","D","C","D","C","B","D","D","C","D",
  "A","E","A","A","E","A","E","C","E","E",
  "B","D","B","B","C","C","D","C","B","B",
  "B","D","X","B","B","D","C","E","A","E",
  "E","X","A","B","A","C","B","E","C","E",
  "C","C","A","D","D","B","E","C","B","D",
  "D","D","A","C","B","E","C","C","D","E",
  "A","B","B","A","D","E","D","E","A","B",
  "E","A","A","X","C","C","B","E","A","D"
],

  amarelo: [
  "C","B","D","D","C","D","A","E","A","A",
  "A","E","C","B","B","C","E","A","E","E",
  "B","D","E","E","X","A","B","B","B","D",
  "X","C","D","C","B","B","B","D","C","E",
  "A","D","D","C","D","C","E","C","C","A",
  "D","D","B","E","B","C","A","C","E","C",
  "B","D","D","D","B","A","D","E","E","A",
  "B","B","E","C","C","D","A","B","E","A",
  "D","D","E","B","E","A","A","X","C","C"
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

  document.getElementById("switchAudio").addEventListener("change", (e) => {
    audioHabilitado = e.target.checked;
    localStorage.setItem("audioHabilitado", audioHabilitado);
  });
  document.getElementById("switchEfeitos").addEventListener("change", (e) => {
    efeitosHabilitados = e.target.checked;
    localStorage.setItem("efeitosHabilitados", efeitosHabilitados);
  });

  // Mostra o ícone do Easter Egg na inicialização
  mostrarEasterEggIcon();

  // Atualiza visibilidade dos botões de resultados salvos
  atualizarBotoesResultados();
});

document.addEventListener("keydown", (e) => {
  // Tela de questões - responder com A, B, C, D, E
  if (
    !quizFinalizado &&
    ["A", "B", "C", "D", "E"].includes(e.key.toUpperCase()) &&
    !document.getElementById("telaQuestoes").classList.contains("hidden")
  ) {
    responder(e.key.toUpperCase());
  }

  // Tela de questões - voltar questão com Backspace
  if (
    !quizFinalizado &&
    e.key === "Backspace" &&
    !document.getElementById("telaQuestoes").classList.contains("hidden")
  ) {
    e.preventDefault();
    voltarQuestao();
  }

  // Tela de questão anulada - avançar com Space
  if (
    e.key === " " &&
    !document.getElementById("telaQuestaoAnulada").classList.contains("hidden")
  ) {
    e.preventDefault();
    avancarQuestaoAnulada();
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

  // Atualiza o texto do botão branco/cinza baseado no dia
  const btnBranco = document.getElementById("btnBranco");
  const textosDia1 = btnBranco.querySelectorAll(".cor-dia1");
  const textosDia2 = btnBranco.querySelectorAll(".cor-dia2");

  if (dia === 1) {
    textosDia1.forEach((el) => el.classList.remove("d-none"));
    textosDia2.forEach((el) => el.classList.add("d-none"));
    btnBranco.classList.remove("btn-cinza-mode");
  } else if (dia === 2) {
    textosDia1.forEach((el) => el.classList.add("d-none"));
    textosDia2.forEach((el) => el.classList.remove("d-none"));
    btnBranco.classList.add("btn-cinza-mode");
  }

  ocultarPainel();
}

function habilitarBotoesCor(habilitar) {
  const botoes = ["btnVerde", "btnBranco", "btnAzul", "btnAmarelo"];

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
  // No dia 2, se selecionou 'branco', mapeia para 'cinza'
  if (diaSelecionado === 2 && cor === "branco") {
    provaSelecionada = "cinza";
  } else {
    provaSelecionada = cor;
  }

  // Primeiro dia tem seleção de idioma, segundo dia vai direto para as questões
  if (diaSelecionado === 1) {
    mostrarTela("telaIdioma");
    ocultarPainel();
  } else if (diaSelecionado === 2) {
    // Segundo dia: usa o array único de 90 questões
    gabaritoFinal = gabaritosDia2[provaSelecionada];
    iniciarResposta();
  }
}

function definirIdioma(idioma) {
  if (provaSelecionada) {
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

  // Verifica se a primeira questão é anulada
  verificarQuestaoAnulada();
}

function verificarQuestaoAnulada() {
  const respostaGabarito = gabaritoFinal[respostasUsuario.length];

  if (respostaGabarito === "X") {
    // Questão anulada - mostra tela especial
    const numeroQuestao =
      diaSelecionado === 2
        ? respostasUsuario.length + 91
        : respostasUsuario.length + 1;
    document.getElementById("numQuestaoAnulada").innerText = numeroQuestao;
    mostrarTela("telaQuestaoAnulada");
    mostrarPainel();
  } else {
    // Questão normal
    mostrarTela("telaQuestoes");
    mostrarPainel();
  }
}

function avancarQuestaoAnulada() {
  // Registra "X" como resposta para questão anulada
  respostasUsuario.push("X");

  if (respostasUsuario.length === gabaritoFinal.length) {
    finalizar();
  } else {
    questao++;
    const numeroExibido = diaSelecionado === 2 ? questao + 90 : questao;
    document.getElementById("qNum").innerText = numeroExibido;

    // Verifica se a próxima questão também é anulada
    verificarQuestaoAnulada();
  }
}

function responder(letra) {
  if (quizFinalizado) return;

  respostasUsuario.push(letra);
  const correta = gabaritoFinal[respostasUsuario.length - 1];
  const acertou = letra === correta;

  const numeroQuestao =
    diaSelecionado === 2
      ? respostasUsuario.length + 90
      : respostasUsuario.length;
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

    // Verifica se a próxima questão é anulada
    verificarQuestaoAnulada();
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

function finalizar() {
  quizFinalizado = true;

  // Conta questões anuladas (marcadas com "X")
  const questoesAnuladas = gabaritoFinal.filter((r) => r === "X").length;
  const questoesValidas = gabaritoFinal.length - questoesAnuladas;

  // Calcula acertos (excluindo anuladas)
  let acertos = 0;
  for (let i = 0; i < gabaritoFinal.length; i++) {
    if (gabaritoFinal[i] !== "X" && respostasUsuario[i] === gabaritoFinal[i]) {
      acertos++;
    }
  }

  // Calcula acertos por área (apenas para provas do ENEM de 90 questões)
  let acertosArea1 = 0; // Linguagens (dia 1) ou Natureza (dia 2)
  let acertosArea2 = 0; // Humanas (dia 1) ou Matemática (dia 2)
  let acertosLinguaEstrangeira = 0; // Apenas dia 1
  let anuladasArea1 = 0;
  let anuladasArea2 = 0;
  let anuladasLinguaEstrangeira = 0;

  if (gabaritoFinal.length === 90) {
    if (diaSelecionado === 1) {
      // DIA 1: Linguagens e Humanas
      // Questões 6-45 = Linguagens (excluindo as 5 primeiras que são língua estrangeira)
      for (let i = 5; i < 45; i++) {
        if (gabaritoFinal[i] === "X") {
          anuladasArea1++;
        } else if (respostasUsuario[i] === gabaritoFinal[i]) {
          acertosArea1++;
        }
      }

      // Últimas 45 questões = Humanas
      for (let i = 45; i < 90; i++) {
        if (gabaritoFinal[i] === "X") {
          anuladasArea2++;
        } else if (respostasUsuario[i] === gabaritoFinal[i]) {
          acertosArea2++;
        }
      }

      // Primeiras 5 questões = Língua Estrangeira (Inglês ou Espanhol)
      for (let i = 0; i < 5; i++) {
        if (gabaritoFinal[i] === "X") {
          anuladasLinguaEstrangeira++;
        } else if (respostasUsuario[i] === gabaritoFinal[i]) {
          acertosLinguaEstrangeira++;
        }
      }
    } else if (diaSelecionado === 2) {
      // DIA 2: Natureza e Matemática
      // Primeiras 45 questões = Ciências da Natureza
      for (let i = 0; i < 45; i++) {
        if (gabaritoFinal[i] === "X") {
          anuladasArea1++;
        } else if (respostasUsuario[i] === gabaritoFinal[i]) {
          acertosArea1++;
        }
      }

      // Últimas 45 questões = Matemática
      for (let i = 45; i < 90; i++) {
        if (gabaritoFinal[i] === "X") {
          anuladasArea2++;
        } else if (respostasUsuario[i] === gabaritoFinal[i]) {
          acertosArea2++;
        }
      }
    }
  }

  ocultarPainel();

  // Calcula percentual total (apenas sobre questões válidas)
  const percentualTotal =
    questoesValidas > 0
      ? ((acertos / questoesValidas) * 100).toFixed(1)
      : "0.0";

  // Atualiza informações do resultado
  document.getElementById("numAcertos").innerText = acertos;
  document.getElementById("totalFinal").innerText = questoesValidas;
  document.getElementById("percentualTotal").innerText = `${percentualTotal}%`;

  // Atualiza dia e cor da prova
  document.getElementById("diaProvaResultado").innerText =
    diaSelecionado === 1 ? "Dia 1" : "Dia 2";
  const corNome =
    provaSelecionada.charAt(0).toUpperCase() + provaSelecionada.slice(1);
  const corExibicao =
    diaSelecionado === 2 && provaSelecionada === "branco" ? "Cinza" : corNome;
  document.getElementById("corProvaResultado").innerText = corExibicao;

  // Atualiza contadores por área
  if (gabaritoFinal.length === 90) {
    if (diaSelecionado === 1) {
      // Dia 1: Mostra Língua Estrangeira, Linguagens e Humanas
      const totalLinguaEst = 5 - anuladasLinguaEstrangeira;
      const totalLinguagens = 40 - anuladasArea1;
      const totalHumanas = 45 - anuladasArea2;

      const percentLinguaEst =
        totalLinguaEst > 0
          ? ((acertosLinguaEstrangeira / totalLinguaEst) * 100).toFixed(1)
          : "0.0";
      const percentLinguagens =
        totalLinguagens > 0
          ? ((acertosArea1 / totalLinguagens) * 100).toFixed(1)
          : "0.0";
      const percentHumanas =
        totalHumanas > 0
          ? ((acertosArea2 / totalHumanas) * 100).toFixed(1)
          : "0.0";

      document.getElementById(
        "acertosLinguagens"
      ).innerText = `${acertosArea1} (${percentLinguagens}%)`;
      document.getElementById(
        "acertosHumanas"
      ).innerText = `${acertosArea2} (${percentHumanas}%)`;
      document.getElementById(
        "acertosLinguaEstrangeira"
      ).innerText = `${acertosLinguaEstrangeira} (${percentLinguaEst}%)`;
      document.getElementById("labelArea1").innerText = "Linguagens";
      document.getElementById("labelArea2").innerText = "Humanas";
      document.getElementById("totalArea1").innerText = totalLinguagens;
      document.getElementById("totalArea2").innerText = totalHumanas;
      document.getElementById("iconArea1").className =
        "bi bi-book-fill text-primary fs-4 mb-2";
      document.getElementById("iconArea2").className =
        "bi bi-people-fill text-warning fs-4 mb-2";
      document.getElementById("cardLinguaEstrangeira").style.display = "block";

      // Atualiza total de língua estrangeira
      const spanLinguaEst = document.querySelector(
        "#cardLinguaEstrangeira .card-body span:last-child"
      );
      if (spanLinguaEst) spanLinguaEst.innerHTML = ` de ${totalLinguaEst}`;
    } else if (diaSelecionado === 2) {
      // Dia 2: Mostra Natureza e Matemática (esconde Língua Estrangeira)
      const totalNatureza = 45 - anuladasArea1;
      const totalMatematica = 45 - anuladasArea2;

      const percentNatureza =
        totalNatureza > 0
          ? ((acertosArea1 / totalNatureza) * 100).toFixed(1)
          : "0.0";
      const percentMatematica =
        totalMatematica > 0
          ? ((acertosArea2 / totalMatematica) * 100).toFixed(1)
          : "0.0";

      document.getElementById(
        "acertosLinguagens"
      ).innerText = `${acertosArea1} (${percentNatureza}%)`;
      document.getElementById(
        "acertosHumanas"
      ).innerText = `${acertosArea2} (${percentMatematica}%)`;
      document.getElementById("labelArea1").innerText = "Ciências da Natureza";
      document.getElementById("labelArea2").innerText = "Matemática";
      document.getElementById("totalArea1").innerText = totalNatureza;
      document.getElementById("totalArea2").innerText = totalMatematica;
      document.getElementById("iconArea1").className =
        "bi bi-gear-fill text-success fs-4 mb-2";
      document.getElementById("iconArea2").className =
        "bi bi-calculator-fill text-info fs-4 mb-2";
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
  if (provaSelecionada) {
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
  } else {
    // Fallback para reload completo
    location.reload();
  }
}

function gerarTabelaResultados() {
  const tabela = document.getElementById("tabela");
  tabela.innerHTML = "";

  // Determina o offset de numeração (91 para dia 2, 1 para dia 1)
  const numeroOffset = diaSelecionado === 2 ? 91 : 1;

  for (let i = 0; i < gabaritoFinal.length; i++) {
    if (i % 10 === 0) {
      const linha = tabela.insertRow();
    }

    const correta = gabaritoFinal[i];
    const marcada = respostasUsuario[i] || "-";
    const numeroQuestao = numeroOffset + i;

    // Verifica se é questão anulada
    const isAnulada = correta === "X";
    const acertou = !isAnulada && correta === marcada;

    const celula = tabela.rows[tabela.rows.length - 1].insertCell();

    if (isAnulada) {
      // Questão anulada - cor amarela/laranja
      celula.className = "resultado-cell cell-anulada";
      celula.innerHTML = `
        <div><strong>${numeroQuestao}</strong></div>
        <div style="font-size: 0.8rem;">ANULADA</div>
      `;
    } else {
      celula.className = `resultado-cell ${
        acertou ? "cell-success" : "cell-error"
      }`;
      celula.innerHTML = `
        <div><strong>${numeroQuestao}</strong></div>
        <div>${marcada}</div>
        ${acertou ? "" : `<small class="text-light">(${correta})</small>`}
      `;
    }
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
  const questoesAnuladas = gabaritoFinal.filter((r) => r === "X").length;
  const questoesValidas = gabaritoFinal.length - questoesAnuladas;

  let acertos = 0;
  for (let i = 0; i < gabaritoFinal.length; i++) {
    if (gabaritoFinal[i] !== "X" && respostasUsuario[i] === gabaritoFinal[i]) {
      acertos++;
    }
  }

  const erros = questoesValidas - acertos;
  const percentual =
    questoesValidas > 0
      ? ((acertos / questoesValidas) * 100).toFixed(1)
      : "0.0";

  // Título
  doc.setFontSize(20);
  doc.setFont(undefined, "bold");
  doc.text("RELATÓRIO DE DESEMPENHO - ENEM", pageWidth / 2, yPos, {
    align: "center",
  });
  yPos += 10;

  // Data e hora
  doc.setFontSize(10);
  doc.setFont(undefined, "normal");
  const dataHora = new Date().toLocaleString("pt-BR");
  doc.text(`Data: ${dataHora}`, pageWidth / 2, yPos, { align: "center" });
  yPos += 15;

  // Informações da prova
  doc.setFontSize(12);
  doc.setFont(undefined, "bold");
  doc.text("INFORMAÇÕES DA PROVA", margin, yPos);
  yPos += 7;

  doc.setFontSize(10);
  doc.setFont(undefined, "normal");

  if (provaSelecionada) {
    doc.text(
      `Caderno: ENEM ${anoSelecionado || "2025"} - Dia ${
        diaSelecionado || "1"
      }`,
      margin,
      yPos
    );
    yPos += 6;
    doc.text(
      `Cor do Caderno: ${
        provaSelecionada.charAt(0).toUpperCase() + provaSelecionada.slice(1)
      }`,
      margin,
      yPos
    );
    yPos += 6;
    if (idiomaSelecionado) {
      doc.text(
        `Idioma: ${
          idiomaSelecionado.charAt(0).toUpperCase() + idiomaSelecionado.slice(1)
        }`,
        margin,
        yPos
      );
      yPos += 6;
    }
  }

  doc.text(`Total de Questões: ${gabaritoFinal.length}`, margin, yPos);
  yPos += 6;

  if (questoesAnuladas > 0) {
    doc.setTextColor(255, 152, 0);
    doc.text(`Questões Anuladas: ${questoesAnuladas}`, margin, yPos);
    yPos += 6;
    doc.setTextColor(0, 0, 0);
    doc.text(`Questões Válidas: ${questoesValidas}`, margin, yPos);
    yPos += 6;
  }

  yPos += 6;

  // Resumo do Desempenho
  doc.setFontSize(12);
  doc.setFont(undefined, "bold");
  doc.text("RESUMO DO DESEMPENHO", margin, yPos);
  yPos += 7;

  doc.setFontSize(11);
  doc.setFont(undefined, "normal");
  doc.setTextColor(0, 128, 0);
  doc.text(`✓ Acertos: ${acertos} (${percentual}%)`, margin, yPos);
  yPos += 6;

  doc.setTextColor(255, 0, 0);
  doc.text(
    `✗ Erros: ${erros} (${(100 - percentual).toFixed(1)}%)`,
    margin,
    yPos
  );
  yPos += 6;

  if (questoesAnuladas > 0) {
    doc.setTextColor(255, 152, 0);
    doc.text(`⊗ Anuladas: ${questoesAnuladas}`, margin, yPos);
    yPos += 6;
  }

  yPos += 4;

  doc.setTextColor(0, 0, 0);

  // Desempenho por área (se for prova do ENEM de 90 questões)
  if (gabaritoFinal.length === 90) {
    doc.setFontSize(12);
    doc.setFont(undefined, "bold");
    doc.text("DESEMPENHO POR ÁREA", margin, yPos);
    yPos += 7;

    doc.setFontSize(10);
    doc.setFont(undefined, "normal");

    if (diaSelecionado === 1) {
      // Dia 1: Calcula acertos por área
      let acertosLinguaEstrangeira = 0;
      let acertosLinguagens = 0;
      let acertosHumanas = 0;

      for (let i = 0; i < 5; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i])
          acertosLinguaEstrangeira++;
      }
      for (let i = 5; i < 45; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i]) acertosLinguagens++;
      }
      for (let i = 45; i < 90; i++) {
        if (respostasUsuario[i] === gabaritoFinal[i]) acertosHumanas++;
      }

      doc.text(
        `Língua Estrangeira: ${acertosLinguaEstrangeira}/5 (${(
          (acertosLinguaEstrangeira / 5) *
          100
        ).toFixed(1)}%)`,
        margin,
        yPos
      );
      yPos += 6;
      doc.text(
        `Linguagens: ${acertosLinguagens}/40 (${(
          (acertosLinguagens / 40) *
          100
        ).toFixed(1)}%)`,
        margin,
        yPos
      );
      yPos += 6;
      doc.text(
        `Humanas: ${acertosHumanas}/45 (${((acertosHumanas / 45) * 100).toFixed(
          1
        )}%)`,
        margin,
        yPos
      );
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

      doc.text(
        `Ciências da Natureza: ${acertosNatureza}/45 (${(
          (acertosNatureza / 45) *
          100
        ).toFixed(1)}%)`,
        margin,
        yPos
      );
      yPos += 6;
      doc.text(
        `Matemática: ${acertosMatematica}/45 (${(
          (acertosMatematica / 45) *
          100
        ).toFixed(1)}%)`,
        margin,
        yPos
      );
      yPos += 12;
    }
  }

  // Detalhamento das respostas
  doc.setFontSize(12);
  doc.setFont(undefined, "bold");
  doc.text("DETALHAMENTO DAS RESPOSTAS", margin, yPos);
  yPos += 7;

  doc.setFontSize(8);
  doc.setFont(undefined, "normal");

  // Cabeçalho da tabela
  const colWidth = 18;
  const startX = margin;

  for (let i = 0; i < gabaritoFinal.length; i++) {
    if (yPos > pageHeight - 30) {
      doc.addPage();
      yPos = margin;
      doc.setFontSize(12);
      doc.setFont(undefined, "bold");
      doc.text("DETALHAMENTO DAS RESPOSTAS (continuação)", margin, yPos);
      yPos += 7;
      doc.setFontSize(8);
      doc.setFont(undefined, "normal");
    }

    if (i % 10 === 0 && i > 0) {
      yPos += 8;
    }

    const col = i % 10;
    const x = startX + col * colWidth;

    const correta = gabaritoFinal[i];
    const marcada = respostasUsuario[i] || "-";
    const isAnulada = correta === "X";
    const acertou = !isAnulada && correta === marcada;

    // Desenha célula
    if (isAnulada) {
      doc.setFillColor(255, 152, 0); // Laranja para anuladas
    } else if (acertou) {
      doc.setFillColor(200, 255, 200); // Verde para acertos
    } else {
      doc.setFillColor(255, 200, 200); // Vermelho para erros
    }

    doc.rect(x, yPos, colWidth - 1, 8, "F");
    doc.setTextColor(0, 0, 0);

    doc.setFont(undefined, "bold");
    doc.text(`${i + 1}`, x + 2, yPos + 3);
    doc.setFont(undefined, "normal");

    if (isAnulada) {
      doc.setFontSize(6);
      doc.text("ANUL", x + 2, yPos + 6.5);
      doc.setFontSize(8);
    } else {
      doc.text(marcada, x + 2, yPos + 6.5);

      if (!acertou) {
        doc.setFontSize(7);
        doc.text(`(${correta})`, x + 7, yPos + 6.5);
        doc.setFontSize(8);
      }
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
      { align: "center" }
    );
  }

  // Salva o PDF
  const nomeArquivo = `ENEM_${
    anoSelecionado || "2025"
  }_${provaSelecionada}_${Date.now()}.pdf`;

  doc.save(nomeArquivo);

  // Feedback visual
  alert("PDF salvo com sucesso!");
}

function salvarResultadoNoLocalStorage() {
  if (provaSelecionada && diaSelecionado) {
    const resultado = {
      dia: diaSelecionado,
      ano: anoSelecionado || 2025,
      cor: provaSelecionada,
      idioma: idiomaSelecionado,
      gabaritoFinal: gabaritoFinal,
      respostasUsuario: respostasUsuario,
      dataRealizacao: new Date().toISOString(),
    };

    localStorage.setItem(
      `resultadoDia${diaSelecionado}`,
      JSON.stringify(resultado)
    );

    // Atualiza visibilidade dos botões na tela inicial
    atualizarBotoesResultados();
  }
}

function atualizarBotoesResultados() {
  const resultadoDia1 = localStorage.getItem("resultadoDia1");
  const resultadoDia2 = localStorage.getItem("resultadoDia2");

  const btnDia1 = document.getElementById("btnResultadoDia1");
  const btnDia2 = document.getElementById("btnResultadoDia2");

  if (btnDia1) {
    if (resultadoDia1) {
      btnDia1.classList.remove("d-none");
    } else {
      btnDia1.classList.add("d-none");
    }
  }
  if (btnDia2) {
    if (resultadoDia2) {
      btnDia2.classList.remove("d-none");
    } else {
      btnDia2.classList.add("d-none");
    }
  }
}

function abrirResultadoSalvo(dia) {
  const resultadoSalvo = localStorage.getItem(`resultadoDia${dia}`);

  if (!resultadoSalvo) {
    alert("Nenhum resultado encontrado para este dia.");
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
  const acertos = respostasUsuario.filter(
    (r, i) => r === gabaritoFinal[i]
  ).length;

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
        if (respostasUsuario[i] === gabaritoFinal[i])
          acertosLinguaEstrangeira++;
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

  // Calcula e mostra percentual total
  const percentualTotal = ((acertos / gabaritoFinal.length) * 100).toFixed(1);
  document.getElementById("percentualTotal").innerText = `${percentualTotal}%`;

  // Atualiza contadores por área
  if (gabaritoFinal.length === 90) {
    if (diaSelecionado === 1) {
      const percentLinguaEst = ((acertosLinguaEstrangeira / 5) * 100).toFixed(
        1
      );
      const percentLinguagens = ((acertosArea1 / 40) * 100).toFixed(1);
      const percentHumanas = ((acertosArea2 / 45) * 100).toFixed(1);

      document.getElementById(
        "acertosLinguagens"
      ).innerText = `${acertosArea1} (${percentLinguagens}%)`;
      document.getElementById(
        "acertosHumanas"
      ).innerText = `${acertosArea2} (${percentHumanas}%)`;
      document.getElementById(
        "acertosLinguaEstrangeira"
      ).innerText = `${acertosLinguaEstrangeira} (${percentLinguaEst}%)`;
      document.getElementById("labelArea1").innerText = "Linguagens";
      document.getElementById("labelArea2").innerText = "Humanas";
      document.getElementById("totalArea1").innerText = "40";
      document.getElementById("totalArea2").innerText = "45";
      document.getElementById("iconArea1").className =
        "bi bi-book-fill text-primary fs-4 mb-2";
      document.getElementById("iconArea2").className =
        "bi bi-people-fill text-warning fs-4 mb-2";
      document.getElementById("cardLinguaEstrangeira").style.display = "block";
    } else if (diaSelecionado === 2) {
      const percentNatureza = ((acertosArea1 / 45) * 100).toFixed(1);
      const percentMatematica = ((acertosArea2 / 45) * 100).toFixed(1);

      document.getElementById(
        "acertosLinguagens"
      ).innerText = `${acertosArea1} (${percentNatureza}%)`;
      document.getElementById(
        "acertosHumanas"
      ).innerText = `${acertosArea2} (${percentMatematica}%)`;
      document.getElementById("labelArea1").innerText = "Ciências da Natureza";
      document.getElementById("labelArea2").innerText = "Matemática";
      document.getElementById("totalArea1").innerText = "45";
      document.getElementById("totalArea2").innerText = "45";
      document.getElementById("iconArea1").className =
        "bi bi-gear-fill text-success fs-4 mb-2";
      document.getElementById("iconArea2").className =
        "bi bi-calculator-fill text-info fs-4 mb-2";
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

// FUNÇÕES PARA INSERIR RESPOSTAS EM LOTE
function abrirInsercaoRespostas() {
  document.getElementById("modalInsercaoRespostas").style.display = "flex";
  document.getElementById("textoRespostas").value = "";
  document.getElementById("textoRespostas").focus();
}

function fecharInsercaoRespostas() {
  document.getElementById("modalInsercaoRespostas").style.display = "none";
}

function inserirRespostasEmLote() {
  const textoRespostas = document.getElementById("textoRespostas").value.trim();

  if (!textoRespostas) {
    alert("Por favor, digite as respostas.");
    return;
  }

  // Remove espaços, quebras de linha e converte para maiúsculo
  const respostasLimpas = textoRespostas.replace(/[\s\n\r]/g, "").toUpperCase();

  // Valida se contém apenas A, B, C, D, E
  const regex = /^[ABCDE]+$/;
  if (!regex.test(respostasLimpas)) {
    alert("O texto deve conter apenas as letras A, B, C, D ou E.");
    return;
  }

  // Verifica se a quantidade de respostas está correta
  const respostasArray = respostasLimpas.split("");
  const questoesFaltando = gabaritoFinal.length - respostasUsuario.length;

  if (respostasArray.length > questoesFaltando) {
    alert(
      `Você tem ${questoesFaltando} questão(ões) restante(s), mas inseriu ${respostasArray.length} respostas.`
    );
    return;
  }

  // Insere as respostas uma por uma
  let contador = 0;
  for (let resposta of respostasArray) {
    if (respostasUsuario.length >= gabaritoFinal.length) {
      break;
    }
    responder(resposta);
    contador++;
  }

  // Fecha o modal
  fecharInsercaoRespostas();

  // Feedback visual
  alert(`${contador} resposta(s) inserida(s) com sucesso!`);
}

// Listener para fechar o modal ao clicar fora
document.addEventListener("click", function (event) {
  const modal = document.getElementById("modalInsercaoRespostas");
  if (event.target === modal) {
    fecharInsercaoRespostas();
  }
});

// Listener para fechar o modal com ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    fecharInsercaoRespostas();
  }
});

// ========== EVENT LISTENERS PARA BOTÕES ==========

// Easter Egg
document
  .getElementById("easterEggIcon")
  ?.addEventListener("click", mostrarEasterEgg);

// Tela Ano
document
  .getElementById("btnAno2025")
  ?.addEventListener("click", () => selecionarAno(2025));
document
  .getElementById("btnAnoAnteriores")
  ?.addEventListener("click", () => selecionarAno("anteriores"));
document
  .getElementById("btnResultadoDia1")
  ?.addEventListener("click", () => abrirResultadoSalvo(1));
document
  .getElementById("btnResultadoDia2")
  ?.addEventListener("click", () => abrirResultadoSalvo(2));

// Tela Dia
document
  .getElementById("btnDia1")
  ?.addEventListener("click", () => selecionarDia(1));
document
  .getElementById("btnDia2")
  ?.addEventListener("click", () => selecionarDia(2));
document.getElementById("btnVoltarAno")?.addEventListener("click", voltarAno);

// Tela Cor
document
  .getElementById("btnVerde")
  ?.addEventListener("click", () => selecionaProva("verde"));
document
  .getElementById("btnBranco")
  ?.addEventListener("click", () => selecionaProva("branco"));
document
  .getElementById("btnAzul")
  ?.addEventListener("click", () => selecionaProva("azul"));
document
  .getElementById("btnAmarelo")
  ?.addEventListener("click", () => selecionaProva("amarelo"));
document.getElementById("btnVoltarDia")?.addEventListener("click", voltarDia);

// Tela Idioma
document
  .getElementById("btnIngles")
  ?.addEventListener("click", () => definirIdioma("ingles"));
document
  .getElementById("btnEspanhol")
  ?.addEventListener("click", () => definirIdioma("espanhol"));
document.getElementById("btnVoltarCor")?.addEventListener("click", voltarCor);

// Tela Questão Anulada
document
  .getElementById("btnAvancarAnulada")
  ?.addEventListener("click", avancarQuestaoAnulada);

// Tela Questões - Alternativas
document.querySelectorAll(".btn-alternativa").forEach((btn) => {
  btn.addEventListener("click", function () {
    const alternativa = this.getAttribute("data-alternativa");
    if (alternativa) {
      responder(alternativa);
    }
  });
});

// Tela Questões - Navegação
document
  .getElementById("btnVoltarInicio1")
  ?.addEventListener("click", voltarInicio);
document
  .getElementById("btnVoltarQuestao")
  ?.addEventListener("click", voltarQuestao);
document
  .getElementById("btnAbrirInsercao")
  ?.addEventListener("click", abrirInsercaoRespostas);

// Tela Resultado
document
  .getElementById("btnSalvarPDF")
  ?.addEventListener("click", salvarResultadoPDF);
document
  .getElementById("btnVoltarInicio2")
  ?.addEventListener("click", voltarInicio);
document
  .getElementById("btnRecomecar")
  ?.addEventListener("click", recomecarMesmaProva);

// Modal Inserção
document
  .getElementById("btnFecharModal")
  ?.addEventListener("click", fecharInsercaoRespostas);
document
  .getElementById("btnInserirLote")
  ?.addEventListener("click", inserirRespostasEmLote);

# 📚 Sistema de Correção de Provas ENEM 2025

Um sistema interativo e moderno para correção de provas do ENEM 2025, desenvolvido com HTML, CSS e JavaScript puro. O sistema permite correção automática das provas oficiais do ENEM 2025.

## 🌟 Características Principais

- ✅ **Correção Automática** dos cadernos do ENEM 2025 (1º e 2º dia)
- 📊 **Análise por Área** com estatísticas detalhadas
- 🎨 **Interface Moderna** com tema escuro e animações
- 🔊 **Feedback Sonoro** para acertos e erros
- ⚡ **Efeitos Visuais** com flash colorido nas respostas
- 📱 **Responsivo** para diferentes dispositivos
- ⌨️ **Suporte a Teclado** (A, B, C, D, E)
- 📄 **Exportação em PDF** com relatório completo
- 🔄 **Recomeçar com Mesmos Parâmetros** mantendo cor e idioma

## 🎯 Funcionalidades

### 📋 **Cadernos Oficiais do ENEM 2025**
- **Dia 1 - 4 Cores**: Caderno Verde, Branco, Azul e Amarelo
- **Dia 2 - 4 Cores**: Caderno Verde, Cinza, Azul e Amarelo
- **2 Dias Completos**: Primeiro dia (Linguagens/Humanas) e Segundo dia (Natureza/Matemática)
- **2 Idiomas**: Inglês e Espanhol (questões 1-5 do 1º dia)
- **90 Questões** por caderno completo
- **Gabaritos** já configurados para ambos os dias

### 📊 **Análise de Desempenho por Área**
- **Dia 1**: 
  - Língua Estrangeira (5 questões)
  - Linguagens (40 questões)
  - Humanas (45 questões)
- **Dia 2**:
  - Ciências da Natureza (45 questões)
  - Matemática (45 questões)
- **Cálculo automático** de percentual por área
- **Indicadores visuais** com cores e ícones específicos

### 📊 **Sistema de Resultados**
- **Pontuação Detalhada** com número de acertos e percentual total
- **Desempenho por Área** com cards informativos e porcentagens
- **Tabela Visual Otimizada** 
  - No PC: Sem barras de rolagem horizontal (layout otimizado)
  - No Mobile: Células menores com barras de rolagem (se necessário)
- **Numeração Contínua** (Dia 1: 1-90, Dia 2: 91-180)
- **Indicação de Erros** com resposta correta entre parênteses
- **Cores Intuitivas**: Verde (acerto) e Vermelho (erro)
- **Exportação em PDF** com relatório completo e profissional
- **Salvamento Automático** do resultado no navegador
- **Acesso Rápido** ao último resultado via botão na tela inicial

### 🎛️ **Controles e Configurações**
- **Switch de Áudio**: Liga/desliga sons de feedback (salvo no localStorage)
- **Switch de Efeitos**: Liga/desliga animações visuais (salvo no localStorage)
- **Navegação**: Voltar questão, ir ao início, recomeçar com mesmos parâmetros
- **Painel Lateral**: Informações da última questão respondida
- **Preferências Persistentes**: Configurações salvas mesmo após fechar o navegador

## 🚀 Como Usar

### **1. Cadernos Oficiais do ENEM 2025**
1. Abra o arquivo `index.html` no navegador
2. Escolha **"ENEM 2025"** na tela inicial
3. Escolha o **dia da prova** (Primeiro ou Segundo Dia)
4. Escolha a **cor do seu caderno**:
   - **Dia 1**: Verde, Branco, Azul ou Amarelo
   - **Dia 2**: Verde, Cinza, Azul ou Amarelo
5. **Apenas no 1º dia**: Selecione o **idioma** (Inglês ou Espanhol)
6. Responda as **90 questões** clicando nos botões ou usando o teclado
7. **Opcionalmente**, use o botão **"Inserir Respostas"** para colar um bloco de respostas (ex: "ABCDEABCDEA...")
8. Veja seu **resultado final** com estatísticas por área
9. **Exporte em PDF** clicando em "Salvar PDF"

> **✅ Disponível**: Ambos os dias do ENEM 2025 com gabaritos completos!

### **2. Acessando Resultados Salvos**
1. Na **tela inicial**, encontre os botões:
   - **"Resultado Dia 1"** (quando disponível)
   - **"Resultado Dia 2"** (quando disponível)
2. **Clique** no botão do dia desejado
3. Veja o resultado anterior completo
4. **Exporte** o resultado em PDF novamente se necessário

> **💡 Dica**: O resultado anterior é sobrescrito sempre que você conclui uma nova prova do mesmo dia

## 🎮 Controles

### **Teclado**
- **A, B, C, D, E**: Seleciona alternativas
- **Enter**: Confirma seleção (onde aplicável)

### **Mouse/Touch**
- **Clique**: Seleciona alternativas e navega
- **Botões**: Todas as ações principais

## 📁 Estrutura do Projeto

```
proj/
├── index.html          # Página principal com todas as telas
├── script.js           # Lógica principal e gabaritos
├── style.css           # Estilos e tema escuro
└── README.md          # Este arquivo
```

## 🎨 Interface

### **Telas Disponíveis:**
1. **Seleção de Ano**: Escolha entre ENEM 2025 ou Edições Anteriores
2. **Seleção de Dia**: Escolha entre Primeiro ou Segundo Dia
3. **Seleção de Cor**: Escolha do cader (Verde/Branco/Azul/Amarelo)
4. **Seleção de Idioma**: Inglês ou Espanhol para questões 1-5 (apenas 1º dia)
5. **Questões**: Interface principal de resposta
6. **Resultado**: Pontuação e tabela detalhada

### **Painel Lateral:**
- Exibe informações da última questão respondida
- Mostra resposta correta vs resposta marcada
- Atualiza em tempo real durante o quiz

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica moderna
- **CSS3**: Estilização avançada com variáveis CSS
- **JavaScript ES6+**: Lógica reativa e manipulação do DOM
- **Bootstrap 5**: Framework CSS para responsividade
- **Bootstrap Icons**: Ícones modernos e consistentes
- **Local Storage**: Persistência de dados no navegador

## 📊 Dados das Provas

### **Gabaritos ENEM 2025 - 1º Dia:**
- ✅ **Caderno Verde**: Completo (90 questões)
- ✅ **Caderno Branco**: Completo (90 questões)  
- ✅ **Caderno Azul**: Completo (90 questões)
- ✅ **Caderno Amarelo**: Completo (90 questões)

**Estrutura do 1º Dia:**
- Questões 1-5: Língua Estrangeira (Inglês/Espanhol)
- Questões 6-45: Linguagens e Códigos
- Questões 46-90: Ciências Humanas

### **Gabaritos ENEM 2025 - 2º Dia:**
- ✅ **Caderno Verde**: Completo (90 questões)
- ✅ **Caderno Cinza**: Completo (90 questões)  
- ✅ **Caderno Azul**: Completo (90 questões)
- ✅ **Caderno Amarelo**: Completo (90 questões)

**Estrutura do 2º Dia:**
- Questões 1-45: Ciências da Natureza (Biologia, Física, Química)
- Questões 46-90: Matemática

## 💾 Armazenamento de Dados

O sistema utiliza **Local Storage** do navegador para persistência de dados sem necessidade de servidor. Todos os dados são salvos automaticamente.

### **Chaves localStorage Utilizadas:**

| Chave | Tipo | Descrição |
|-------|------|----------|
| `audioHabilitado` | Boolean | Estado do switch de áudio (true/false) |
| `efeitosHabilitados` | Boolean | Estado do switch de efeitos visuais (true/false) |
| `resultadoDia1` | JSON | Resultado da última prova do 1º dia realizada |
| `resultadoDia2` | JSON | Resultado da última prova do 2º dia realizada |

### **Estrutura - Resultados Salvos:**
```json
{
  "resultadoDia1": {
    "dia": 1,
    "ano": 2025,
    "cor": "verde",
    "idioma": "ingles",
    "gabaritoFinal": ["A", "B", "C", "D", "E", ...],
    "respostasUsuario": ["A", "A", "C", "E", "D", ...],
    "dataRealizacao": "2025-11-10T14:30:00.000Z"
  }
}
```

### **Limite de Armazenamento:**
- Típico: 5-10 MB por domínio
- Compatível com navegadores modernos (Chrome, Firefox, Safari, Edge)
- Dados persistem entre sessões do navegador

## 🎯 Funcionalidades Especiais

### **Sistema de Feedback:**
- **Sons**: Diferentes para acerto/erro
- **Efeitos Visuais**: Flash verde/vermelho na tela
- **Animações**: Transições suaves entre telas

### **Validações:**
- Confirmações de ações importantes

### **Acessibilidade:**
- Suporte completo ao teclado
- Cores contrastantes
- Ícones descritivos
- Feedback visual claro

## 🔄 Estados da Aplicação

### **Variáveis Globais Principais:**

| Variável | Tipo | Descrição |
|----------|------|----------|
| `anoSelecionado` | String | Ano do caderno ('2025' ou 'anteriores') |
| `diaSelecionado` | Number | Dia do caderno (1 ou 2) |
| `provaSelecionada` | String | Cor do caderno - Dia 1: 'verde', 'branco', 'azul', 'amarelo' / Dia 2: 'verde', 'cinza', 'azul', 'amarelo' |
| `idiomaSelecionado` | String | Idioma do caderno (apenas 1º dia: 'ingles' ou 'espanhol') |
| `gabaritoFinal` | Array | Gabarito completo do caderno ativo |
| `respostasUsuario` | Array | Respostas marcadas pelo usuário |
| `questao` | Number | Questão atual (0-89) |
| `quizFinalizado` | Boolean | Status da conclusão do quiz |
| `audioHabilitado` | Boolean | Estado do switch de áudio |
| `efeitosHabilitados` | Boolean | Estado do switch de efeitos visuais |

### **Estados de Tela:**
1. `telaInicial` - Menu principal
2. `selecionarDia` - Escolha do dia (1º ou 2º)
3. `selecionarCor` - Escolha da cor do caderno
4. `selecionarIdioma` - Escolha do idioma (apenas 1º dia)
5. `jogo` - Interface de respondimento
6. `resultado` - Exibição dos resultados

## 🎵 Recursos de Áudio

### **Sons Incluídos:**
- **Acerto**: Som positivo de confirmação
- **Erro**: Som de alerta suave
- **Controle**: Switch para habilitar/desabilitar

## 📱 Responsividade

### **Breakpoints Suportados:**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### **Adaptações:**
- Layout flexível com Bootstrap Grid
- Botões otimizados para touch
- Texto legível em todas as telas
- Navegação adaptativa

## 🚀 Instalação e Uso

1. **Clone ou baixe** os arquivos do projeto
2. **Abra** o arquivo `index.html` em qualquer navegador moderno
3. **Não requer** servidor web ou instalação adicional
4. **Funciona offline** após primeiro carregamento

## 🔜 Próximas Atualizações

- 🏆 **Comparação Entre Provas**: Histórico completo de todas as provas realizadas
- 🌍 **Mais Edições Anteriores**: Gabaritos de ENEM 2024, 2023, etc.
- 🎨 **Temas Personalizáveis**: Opções de cores e modo claro
- 🤖 **Simulador IA**: Previsão de nota baseada em desempenho

## 📞 Suporte

Para dúvidas, sugestões ou reportar problemas:
- Verifique se o navegador suporta JavaScript e Local Storage
- Certifique-se de que JavaScript está habilitado
- Teste em um navegador atualizado (Chrome, Firefox, Safari, Edge)

---

**📚 ENEM 2025 - Sistema de Correção**  
*Desenvolvido para facilitar a correção e estudo das provas do ENEM*
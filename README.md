# 📚 Sistema de Correção de Provas ENEM 2025

Um sistema interativo e moderno para correção de provas do ENEM 2025, desenvolvido com HTML, CSS e JavaScript puro. O sistema permite correção automática das provas oficiais do primeiro dia do ENEM 2025 e criação de provas personalizadas.

## 🌟 Características Principais

- ✅ **Correção Automática** das provas do ENEM 2025 (1º dia)
- 🎨 **Interface Moderna** com tema escuro e animações
- 🔊 **Feedback Sonoro** para acertos e erros
- ⚡ **Efeitos Visuais** com flash colorido nas respostas
- 💾 **Armazenamento Local** de provas personalizadas
- 📱 **Responsivo** para diferentes dispositivos
- ⌨️ **Suporte a Teclado** (A, B, C, D, E)

## 🎯 Funcionalidades

### 📋 **Provas Oficiais do ENEM 2025**
- **4 Cores de Prova**: Verde, Branca, Azul e Amarela
- **2 Idiomas**: Inglês e Espanhol (questões 1-5)
- **90 Questões** por prova completa
- **Gabaritos Oficiais** já configurados

> **📅 Em Breve**: Gabaritos do segundo dia do ENEM 2025 serão adicionados após a divulgação oficial.

### 🛠️ **Provas Personalizadas**
- **Criação Livre** de provas com até 200 questões
- **Dois Métodos de Criação**:
  - **Manual**: Definição questão por questão
  - **Texto**: Inserção rápida como string (ex: "ABCDEABCDE...")
- **Salvamento Local** no navegador
- **Gerenciamento Completo**: Criar, Editar, Excluir, Renomear

### 📊 **Sistema de Resultados**
- **Pontuação Detalhada** com número de acertos
- **Tabela Visual** mostrando resultado de cada questão
- **Indicação de Erros** com resposta correta
- **Cores Intuitivas**: Verde (acerto) e Vermelho (erro)

### 🎛️ **Controles e Configurações**
- **Switch de Áudio**: Liga/desliga sons de feedback
- **Switch de Efeitos**: Liga/desliga animações visuais
- **Navegação**: Voltar questão, ir ao início, recomeçar
- **Painel Lateral**: Informações da última questão respondida

## 🚀 Como Usar

### **1. Provas Oficiais do ENEM 2025**
1. Abra o arquivo `index.html` no navegador
2. Escolha **"ENEM 2025"** na tela inicial
3. Escolha o **dia da prova** (Primeiro ou Segundo Dia)
4. Escolha a **cor da sua prova** (Verde, Branca, Azul ou Amarela)
5. Selecione o **idioma** das primeiras 5 questões (Inglês ou Espanhol) - apenas 1º dia
6. Responda as **90 questões** clicando nos botões ou usando o teclado
7. Veja seu **resultado final** com pontuação detalhada

> **⚠️ Importante**: O segundo dia estará disponível apenas em **16/11/2025**

### **2. Criando Prova Personalizada**
1. Na tela inicial, clique em **"Prova Personalizada"**
2. Escolha o **método de criação**:
   - **Manual**: Digite o número de questões (1-200) → Defina resposta questão por questão
   - **Texto**: Cole/digite o gabarito completo (ex: "ABCDEABCDE..." ou "abcde abcde a...")
3. **Salve a prova** com um nome personalizado
4. **Responda a prova** criada

> **💡 Dica**: No método texto, espaços e quebras de linha são ignorados. Apenas letras A-E são aceitas (maiúsculas ou minúsculas).

### **3. Gerenciando Provas Salvas**
1. Na tela inicial, clique em **"Provas Salvas"**
2. **Visualize** todas as provas criadas
3. **Jogue** uma prova salva (▶️)
4. **Edite o nome** de uma prova (✏️)
5. **Exclua** provas individuais (🗑️)
6. **Limpe todas** as provas de uma vez

## 🎮 Controles

### **Teclado**
- **A, B, C, D, E**: Seleciona alternativas
- **Enter**: Confirma seleção (onde aplicável)
- **Backspace/←**: Volta questão anterior (no gabarito personalizado)

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
3. **Seleção de Cor**: Escolha da prova (Verde/Branca/Azul/Amarela)
4. **Seleção de Idioma**: Inglês ou Espanhol para questões 1-5 (apenas 1º dia)
5. **Questões**: Interface principal de resposta
6. **Resultado**: Pontuação e tabela detalhada
7. **Config. Personalizada**: Definição de número de questões
8. **Definir Gabarito**: Criação do gabarito personalizado
9. **Provas Salvas**: Gerenciamento de provas criadas

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
- ✅ **Prova Verde**: Completa (90 questões)
- ✅ **Prova Branca**: Completa (90 questões)  
- ✅ **Prova Azul**: Completa (90 questões)
- ✅ **Prova Amarela**: Completa (90 questões)

**Estrutura por prova:**
- Questões 1-5: Língua Estrangeira (Inglês/Espanhol)
- Questões 6-90: Linguagens e Códigos, Ciências Humanas

> **⏳ Aguardando**: Gabaritos do 2º dia (Matemática e Ciências da Natureza) serão adicionados após divulgação oficial.

## 💾 Armazenamento de Dados

### **Local Storage:**
- **Chave**: `provasSalvas`
- **Formato**: JSON com metadados
- **Dados salvos**: 
  - Nome da prova
  - Gabarito completo
  - Número de questões
  - Data de criação
  - Data de modificação

### **Estrutura dos Dados:**
```json
{
  "provasSalvas": {
    "Minha Prova": {
      "gabarito": ["A", "B", "C", "D", "E"],
      "numQuestoes": 5,
      "dataCriacao": "2025-11-10T10:30:00.000Z",
      "dataModificacao": "2025-11-10T10:30:00.000Z"
    }
  }
}
```

## 🎯 Funcionalidades Especiais

### **Sistema de Feedback:**
- **Sons**: Diferentes para acerto/erro
- **Efeitos Visuais**: Flash verde/vermelho na tela
- **Animações**: Transições suaves entre telas

### **Validações:**
- Verificação de CEP válido (8 dígitos)
- Nomes únicos para provas salvas
- Limites de questões (1-200)
- Confirmações de exclusão

### **Acessibilidade:**
- Suporte completo ao teclado
- Cores contrastantes
- Ícones descritivos
- Feedback visual claro

## 🔄 Estados da Aplicação

### **Variáveis Globais:**
- `anoSelecionado`: Ano da prova (2025 ou 'anteriores')
- `diaSelecionado`: Dia da prova (1 ou 2)
- `provaSelecionada`: Cor da prova atual
- `gabaritoFinal`: Gabarito ativo
- `respostasUsuario`: Respostas do usuário
- `questao`: Questão atual
- `quizFinalizado`: Status do quiz
- `audioHabilitado`: Estado do áudio
- `efeitosHabilitados`: Estado dos efeitos

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

- 📅 **Gabaritos 2º Dia**: Matemática e Ciências da Natureza (16/11/2025)
- 📈 **Estatísticas**: Análise de desempenho por área
- 📊 **Relatórios**: Exportação de resultados
- 🎨 **Temas**: Opções de personalização visual

## 📞 Suporte

Para dúvidas, sugestões ou reportar problemas:
- Verifique se o navegador suporta JavaScript e Local Storage
- Certifique-se de que JavaScript está habilitado
- Teste em um navegador atualizado (Chrome, Firefox, Safari, Edge)

---

**📚 ENEM 2025 - Sistema de Correção**  
*Desenvolvido para facilitar a correção e estudo das provas do ENEM*

> **Disclaimer**: Este é um projeto independente não oficial. Os gabaritos são baseados nos divulgados oficialmente pelo INEP.
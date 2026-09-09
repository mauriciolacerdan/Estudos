# Agentes de Código: AGENTS.md, Rules e Skills

Os três mecanismos abaixo resolvem o mesmo problema geral — **comportamento consistente do agente dentro de um projeto** — mas em escopos diferentes. Ver também `IA.md` para onde eles se encaixam no ecossistema geral de IA (RAG, Tools, MCP, Memory).

<br>

## Visão geral (tabela canônica)

| Recurso            | Escopo                                                                  | Função principal                                                                         |
| ------------------ | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **AGENTS.md**      | Projeto — portátil entre agentes (Cursor, Codex, Claude Code, OpenCode) | Instruções gerais do projeto: estrutura, stack, convenções                               |
| **Rules (`.mdc`)** | Específico do Cursor                                                    | Padrões de código, sempre ativos ou condicionais por tipo de arquivo                     |
| **Skills**         | Qualquer agente compatível                                              | Procedimento passo a passo para uma tarefa específica, carregado só quando necessário    |
| **MCP**            | Qualquer agente compatível                                              | Ferramentas e acesso a dados/sistemas externos — não é regra nem conhecimento, é conexão |

Resumo em uma frase por conceito:

- **AGENTS.md** → instruções gerais do projeto.
- **Rules** → regras específicas do Cursor.
- **Skills** → procedimentos especializados sob demanda.
- **MCP** → ferramentas e contexto externo.

<br><br><br>

# Plano de Contexto do Projeto

O **Plano de Contexto** é um documento de alto nível que apresenta à IA a **visão geral do projeto e como ele deve ser construído**. Ele serve para reduzir ambiguidades e permitir que o agente entenda o produto antes de começar a implementar funcionalidades.

Diferente do `AGENTS.md`, que contém **instruções práticas para o agente seguir**, o Plano de Contexto descreve principalmente **o que é o projeto, por que ele existe, o que deve ser construído e como sua arquitetura será organizada**.

**O que deve conter:**

- **Objetivo:** o que o projeto pretende alcançar.
- **Problema:** qual problema o produto resolve.
- **Público-alvo:** para quem o produto é desenvolvido.
- **Escopo:** funcionalidades e entregas planejadas.
- **Arquitetura:** como o projeto será estruturado e quais responsabilidades cada parte terá.
- **Stack:** tecnologias, versões, banco de dados e integrações.
- **Requisitos:** funcionais e não funcionais.
- **Funcionalidades futuras:** recursos desejáveis que não fazem parte do MVP.
- **Critérios de sucesso:** como determinar se o projeto está funcionando e atingindo seus objetivos.

**Exemplo de estrutura:**

```md
# 1. Nome do Projeto

Viajei

# 2. Visão Geral

Aplicativo mobile para controle e divisão de gastos durante viagens.

# 3. Problema

Dificuldade de acompanhar despesas e dividir os custos entre participantes.

# 4. Público-alvo

Jovens adultos, casais, famílias e grupos de amigos.

# 5. Objetivos

Permitir registrar, organizar e dividir os gastos de uma viagem.

# 6. Funcionalidades

- Cadastro/login
- Criar viagem
- Adicionar gastos
- Adicionar participantes
- Visualizar gastos
- Dividir despesas
- Finalizar viagem
- Exportar relatório

# 7. Requisitos Técnicos

- React Native + Expo
- Supabase + PostgreSQL
- iOS e Android

# 8. Arquitetura

- components/ → componentes reutilizáveis
- screens/ → telas
- services/ → integrações externas
- hooks/ → lógica reutilizável
- utils/ → funções auxiliares

# 9. Requisitos Não Funcionais

- Segurança dos dados
- Responsividade
- Boa experiência de uso
- Código escalável e manutenível

# 10. Funcionalidades Futuras

- Push notifications
- PDF
- Gamificação
- Multilíngue

# 11. Critérios de Sucesso

- Usuário consegue criar e finalizar uma viagem
- Gastos podem ser registrados em menos de 20 segundos
- Usuários conseguem visualizar o total gasto e a divisão das despesas
```

**Plano de Contexto vs. AGENTS.md:**

- **Plano de Contexto** → explica **o projeto**: objetivo, problema, funcionalidades, arquitetura e requisitos.
- **AGENTS.md** → explica **como o agente deve trabalhar no projeto**: comandos, convenções, restrições e instruções.
- **Rules** → define **padrões específicos do Cursor**.
- **Skills** → define **como executar tarefas específicas**.
- **MCP** → fornece **ferramentas e acesso a sistemas externos**.

Na prática, o Plano de Contexto funciona como a **visão arquitetural e estratégica do projeto**, enquanto `AGENTS.md`, Rules e Skills transformam essa visão em instruções e procedimentos que o agente consegue aplicar durante o desenvolvimento.

<br><br><br>

# AGENTS.md

Arquivo de instruções portátil entre diferentes agentes de código (ao contrário das Rules, que são só do Cursor).

**O que informar nele:**

- Estrutura do projeto, stack e versões
- Padrões de código e convenções de nomenclatura
- Como rodar, testar e validar
- O que o agente deve/não deve fazer

**Hierarquia:** pode existir em vários níveis — um `AGENTS.md` na raiz com regras gerais, e outros em subpastas (`frontend/AGENTS.md`, `backend/AGENTS.md`) complementando.

**Boas práticas:**

- Só instruções relevantes para o agente (não é documentação para humanos — isso é papel do README)
- Instruções claras e acionáveis, sem regras contraditórias
- Não duplicar Rules específicas de uma ferramenta
- Manter atualizado conforme o projeto evolui

<br><br><br>

# Rules (Cursor / VSCode)

````md
## Regras no Cursor

No Cursor, regras são arquivos que fornecem contexto permanente ao agente, como padrões de código, convenções do projeto, versões e outras instruções.

O Cursor entende melhor regras escritas em inglês, então é recomendado converter para esse idioma.

**Cuidado ao criar Roules pois ela tambem consome tokens então o objetivo é criar regras simples e direta.**

## Utilizando regras

Para utilizar uma regra, cite o arquivo usando `@` no chat e depois descreva o que deseja fazer. O Cursor utilizará a regra como contexto e seguirá suas instruções.

Você pode citar mais de uma regra na mesma conversa.

## Como criar

1. Crie a pasta `.cursor/rules/` na raiz do projeto.
   Exemplo: `C:\Estudos\.cursor\rules\`
2. Adicione um arquivo `.mdc`.
   Exemplo: `typescript-standards.mdc`
3. Utilize frontmatter YAML + o conteúdo da regra.

## Formato básico

```md
---
description: Breve descrição do que a regra faz
globs: **/*.ts
alwaysApply: false
---

## Título da regra

Seu conteúdo aqui...
```
````

## Quando a regra vale

| Configuração                            | Uso                                                                  |
| --------------------------------------- | -------------------------------------------------------------------- |
| `alwaysApply: true`                     | Aplicada em todas as conversas do projeto                            |
| `globs: **/*.ts` + `alwaysApply: false` | Aplicada quando arquivos que correspondem ao padrão estão envolvidos |

Exemplos de `globs`: `**/*.ts`, `**/*.tsx`, `backend/**/*.py`.

## Boas práticas

- Uma preocupação por regra, evitando arquivos gigantes.
- Preferir regras com menos de ~50 linhas.
- Utilizar instruções acionáveis e, se possível, exemplos de ✅/❌.
- Manter cada regra abaixo de 500 linhas.

## Exemplo rápido

```md
---
description: Padrões TypeScript do projeto
globs: **/*.ts
alwaysApply: false
---

# TypeScript

- Preferir `const` a `let`
- Tipar retornos de funções públicas
- Não usar `any`; usar `unknown` e estreitar o tipo
```

## Regras automáticas

Os arquivos `cursor-rules.mdc` e `self-improvement.mdc` podem ser utilizados como regras para ajudar o Cursor a criar e atualizar regras automaticamente com base no código ou nos prompts.

Quando quiser que o Cursor crie ou melhore regras automaticamente, cite esses arquivos usando `@` e informe o que deseja. Também é possível pedir para atualizar as regras em inglês.

## Regras para projetos novos

O arquivo `rules.mdc` pode ser utilizado como exemplo ou base para iniciar um novo projeto que ainda não possui regras definidas.

## Criando regras com IA

Você também pode pedir ao ChatGPT ou a outra IA para criar regras específicas para o seu projeto.

<br><br><br>

# Skills

Conhecimento especializado + procedimento passo a passo para uma tarefa específica — carregado sob demanda (diferente de Rules, que ficam sempre ou condicionalmente ativas).

**Melhores Skills para ajudar: `https://sujeitoprogramador.com/melhores-skills-que-todo-programador-precisa-usar-em-2026/`**

**Estrutura típica:**

```
skills/
└── create-react-native-screen/
    └── SKILL.md
```

**Skill vs prompt:** um prompt ("crie uma tela de login") deixa o agente descobrir sozinho o processo; a skill já define os passos (analisar arquitetura → checar componentes existentes → usar autenticação existente → seguir padrão de formulário → validar → testar → checar erros de TS). Skill = conhecimento transformado em procedimento reutilizável.

**Quando criar uma:** tarefa realmente recorrente e complexa (criar tela, criar API, debug, testes, code review, changelog, pipeline de deploy).

**Boas práticas:** uma responsabilidade por skill, passos de execução e critérios de validação claros, evitar skills gigantes, reutilizar entre projetos quando fizer sentido.

<br>

## Fluxo combinado

```
AGENTS.md (contexto geral do projeto)
Rules      (padrões específicos do Cursor)
Skills     (procedimentos especializados)
MCP        (ferramentas e sistemas externos)
        ↓
      AGENTE
        ↓
Planeja → lê contexto (AGENTS.md) → aplica padrões (Rules)
→ usa procedimento (Skills) → aciona ferramentas (MCP)
→ modifica código → valida
```

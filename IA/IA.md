# Guia Rápido de IA para Desenvolvedor

<br>

## AI Agents e IA para programação

**Panorama geral:**

- **Modelos multimodais** (texto + imagem + áudio) — ex: GPT-4o.
- **Agentes autônomos** que usam ferramentas para executar tarefas, não só conversar.
- **Padrões de integração** (function calling, MCP) que facilitam conectar IA a sistemas reais.

**O que é um LLM:** treinado para prever o próximo token ("palavra"). Nesse processo, aprende padrões complexos de linguagem, código e raciocínio — é isso que sustenta o comportamento sofisticado que você vê.

```
texto → tokens → representações numéricas → Transformer / atenção → próximo token
```

- **Token:** pedaço de texto, tem que prestar muita atenção para não usar atoa.
- **Context window:** quanto texto o modelo "enxerga" por vez (ex: 128k tokens), e é **muito importante** acompanhar para a ia não alucinar.

> Nota: esses "vetores numéricos" internos do Transformer são diferentes dos **embeddings usados no RAG** (que servem pra busca semântica em documentos) — mesma ideia matemática, uso diferente. Ver seção "Como estender um LLM".

**Chatbot vs Workflow vs Agente:**

- **Chatbot:** só conversa. Responde e para.
- **Workflow automatizado:** passos fixos predefinidos.
- **Agente:** planeja uma meta, decide quais Tools/MCP usar, executa e itera até concluir.

**Loop típico:** agir → observar resultado → decidir próximo passo → repetir.

**Multi-agentes:** existem, mas são situacionais — um agente único bem projetado resolve a maioria dos casos.

**Aplicado a código, dois níveis:**

- **Assistente de código:** sugere/completa trechos enquanto você digita no editor.
- **Coding Agent:** recebe uma tarefa completa e sozinho planeja, edita, testa e corrige em loop — usando Rules/Skills do ambiente (Cursor, Claude Code) pra saber como se comportar no seu projeto.

**Riscos:** código pode parecer certo e ter bug de lógica/segurança; o modelo pode inventar bibliotecas que não existem (alucinação); dependência excessiva atrofia aprendizado.

**Regra prática:** use para acelerar, mas sempre entenda o código antes de aceitar.

**Produtos reais (mesmos conceitos, aplicados):**

| Produto         | Categoria                  | Diferencial                                                                                |
| --------------- | -------------------------- | ------------------------------------------------------------------------------------------ |
| **ChatGPT**     | Chat genérico (LLM puro)   | Não enxerga seu código/arquivos por padrão — você cola o contexto manualmente.             |
| **Cursor**      | Assistente de código (IDE) | Enxerga o projeto aberto; você guia passo a passo.                                         |
| **Claude Code** | Coding Agent (terminal)    | Mais autônomo que o Cursor: executa a tarefa inteira sem supervisão linha a linha.         |
| **NotebookLM**  | Aplicação de RAG pronta    | Responde só com base nos documentos que você sobe, citando a fonte. Não serve para código. |

---

<br>

## Conceitos essenciais

| Termo                  | O que é                                                                                                                                                                     |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Prompt Engineering** | Escrever instruções claras. Base importante, mas sozinho não sustenta um sistema de IA — depende também de contexto, dados e tools.                                         |
| **Temperatura**        | Controla aleatoriedade da resposta (0 = direto, 1 = criativo).                                                                                                              |
| **Inferência**         | Ato de usar o modelo treinado (o que você faz e paga via API).                                                                                                              |
| **Structured Output**  | Pedir que a resposta venha em JSON (não texto livre), pra seu código consumir direto — ex: `{ "titulo": "...", "data": "..." }`. Essencial pra conectar IA à lógica do app. |

---

<br>

## Como estender um LLM puro

Um LLM sozinho só conversa. Dois grupos de mecanismos resolvem isso — um do **sistema de IA** (nível geral), outro do **ambiente de coding agent** (Cursor, Claude Code):

**Sistema de IA:**

| Mecanismo                    | Resolve                                     | Ideia central                                                                                                                                                                                                                               |
| ---------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **RAG**                      | Falta de dados atualizados/próprios         | Busca informação numa base própria (via embeddings) e injeta no prompt antes da resposta.                                                                                                                                                   |
| **Tools / Function Calling** | Falta de capacidade de agir                 | O LLM devolve um JSON pedindo pro seu backend executar uma função real.                                                                                                                                                                     |
| **MCP**                      | Integrar muitas fontes de forma padronizada | Protocolo "USB-C da IA" — conecta ferramentas/dados de forma uniforme. Não é agente, nem LLM, nem RAG — só um padrão de conexão. Só compensa com várias fontes reutilizáveis; pra 1 integração pontual, function calling direto já resolve. |
| **Memory**                   | Contexto some quando a sessão acaba         | Diferente de _context_ (o que está disponível _nesta_ execução): memory é o que persiste _entre_ execuções — ex: "usuário prefere TypeScript".                                                                                              |

**Sistema de coding agent** (específico de ferramentas como Cursor/Claude Code, não é conceito universal de IA):

| Mecanismo  | Resolve                                          | Ideia central                                                                                               |
| ---------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| **Rules**  | Comportamento inconsistente do agente no projeto | Instrução fixa, sempre ativa. Ex: `.cursorrules`, `CLAUDE.md`.                                              |
| **Skills** | Instrução especializada só quando precisa        | Pacote de instruções carregado sob demanda (ex: skill de "gerar PDF" só entra em uso se você pedir um PDF). |

**Em ferramentas como o cursor e vscode normalmente tem o plan mode que ajuda a desenvolver de forma mais organizada por planos**

**Spec Kit é uma metodologia/ferramenta para desenvolvimento de software orientado por especificações usando IA. `https://github.com/github/spec-kit`**

**Como funciona o RAG na prática:**

1. Documento vira pedaços (**chunking**).
2. Cada pedaço vira vetor (**embedding**).
3. Vetores ficam num **vector database**.
4. Pergunta do usuário busca os pedaços mais parecidos (**retrieval**).
5. Esses pedaços entram no prompt.

**Quando NÃO usar RAG:** não é obrigatório em toda aplicação de IA. Use só quando o modelo precisa de conhecimento externo, privado, atualizado ou específico (ex: "responda com base nos documentos internos do Over"). Pra perguntas genéricas ("explique o que é uma FlatList"), RAG é desperdício.

**Exemplo de Function Calling:**

```json
{ "tool": "buscar_corrida", "params": { "id_usuario": "123" } }
```

Seu Node.js recebe o JSON, executa a função real (ex: consulta o Firestore) e devolve o resultado.

**Resumindo a relação:** RAG dá dados, Tools dão ação, MCP padroniza a conexão entre elas, Memory dá continuidade entre sessões — e Rules/Skills (só dentro de coding agents) definem como o agente se comporta no seu código.

---

<br>

## IA local

Rodar o modelo localmente (Ollama, LM Studio) em vez de depender de uma API hospedada na nuvem.

**Vantagens:** privacidade total, sem custo por token, latência menor.
**Desvantagens:** exige hardware (GPU/RAM), modelos menores, mais configuração. Técnica associada: **quantização** (reduz precisão do modelo pra caber em hardware menor).

---

<br>

## Como colocar IA em um aplicativo

```
App (React Native)
   ↓
Backend (Node.js / Firebase Cloud Functions)
   ↓
Chamada à API do LLM (OpenAI/Claude/Gemini)
   ↓ (opcional)
RAG: busca em vector DB antes de montar o prompt
   ↓
Resposta processada → volta pro app
```

**Pontos-chave:**

- Nunca chame a API do LLM direto do app mobile — sempre pelo backend, pra não expor a chave e controlar custo/segurança.
- Cache de respostas frequentes reduz custo.
- Log de prompts/respostas/custo desde o início evita surpresa de fatura.

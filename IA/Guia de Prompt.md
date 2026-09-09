# Guia de Prompt para Devs

🧠 **Princípios de um bom Prompt**

1. **Contexto claro** ✅

   Sempre diga qual linguagem/framework/etc está usando.

   Ex: “Estou usando React Native com TypeScript e Zustand.”

2. **Objetivo direto** ✅

   Diga o que você quer no final.

   Ex: “Preciso de uma função que calcule o IMC e retorne um status (‘Magro’, ‘Normal’, etc).”

3. **Formato de saída desejado** ✅

   Peça a resposta no formato certo (ex: função, explicação, apenas o trecho, etc).

4. **Evite genérico** 🚫**, seja específico** ✅

   Não diga “me ajude com um erro”, diga **qual erro**, onde acontece, e **o que você já tentou**.

### 🛠️ Estrutura de Prompt Profissional

```markdown
Estou trabalhando em [contexto: linguagem, lib, projeto].  
Quero [objetivo exato ou tarefa].  
Aqui está o código relevante (se houver):  
[trecho de código]

Me dê [tipo de resposta: sugestão, código funcional, explicação, etc].
```

Exemplo:

```markdown
Estou usando Next.js 15 com App Router, Prisma 6.6 e PostgreSQL.
Tenho uma página de login que salva o token em cookie após login....
Preciso proteger a rota /dashboard para só permitir acesso se o token for válido.

Como posso verificar isso usando middleware ou server actions?
```

### 🔁 Tipos de Prompts úteis

| Tipo de Prompt               | Exemplo                                                                                                                                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Geração de código**        | “Crie um hook React para detectar cliques fora de um componente (aplicando os 4 princípios passado acima)”                                                                                                    |
| **Refatoração**              | “Melhore esse código para ser mais legível e com menos repetições, facilitando a manutenção e testes automatizados e use Pattern Composition, lembre de ser especifico, passar objetivo claro e saida clara.” |
| **Explicação**               | “Explique passo a passo o que essa função em Go está fazendo, analisando cada detalhe.”                                                                                                                       |
| **Teste unitário**           | “Crie testes para esse service em TypeScript usando Vitest.. (fornece exemplo, contexto, versões..).”                                                                                                         |
| **Melhorias de performance** | “Esse código em Prisma pode ser otimizado? Com base em performance e escalabilidade quais alternativas podemos aplicar para melhoria e porque de cada melhoria.”                                              |

### 🧩 Prompt específico para usar com Cursor (ou VsCode Copilot)

No Cursor ou Copilot, o contexto do seu código já é capturado automaticamente, então foque em **objetivo direto** e **limites claros**. Exemplos:

✅ “Adicione tipagem explícita a essa função. (forneça o código ou arquivo ou deixe claro onde) ”

✅ “Extraia isso (forneça o código ou arquivo ou deixe claro onde) em um hook reutilizável.”

✅ “Reescreva o componente header aplicando Composition Pattern facilitando a reutilizaçõa e manutenção no componente.”

Evite:

🚫 “Me ajude com isso aqui” (vago demais).

🚫 “O que você acha?” (não é claro o que deseja).

🚫 “Crie um componente login”. (vago demais).

🧠 > Lembre-se do primeiro tópico que vimos aqui no conteúdo os **Princípios de um bom Prompt**

```markdown
Contexto:
[Explique o que está usando e fazendo]

Objetivo:
[O que você quer obter? Código? Refatoração? Explicação? Testes? Qual arquitetura aplicar
detalhe bem]

Código (opcional):
[Coloque aqui o trecho de código necessário ou cite onde está o código caso ele
tenha a referencia]

Saída esperada:
[Defina o tipo de retorno – função pronta, explicação com passo a passo, etc.]
```

## 🧩 Exemplos:

### “Se eu precisasse pedir para criar um componente HERO para minha landing page de uma clinica odontológica”

```markdown
Crie um componente Hero para uma landing page de clínica odontológica que tem
como objetivo mostrar os beneficios e um CTA claro para agendar um horário gratuitamente

Requisitos:

- Usar Next.js 15 com App Router
- Utilizar Shadcn UI para os componentes, botões e tipografia
- Estrutura com TailwindCSS responsiva (mobile-first)
- Incluir chamada para ação (CTA)
- Boa semântica (acessibilidade e SEO)
- Imagem otimizada com next/image
- Organize o código em pastas separadas: components/ui`, components/hero, lib, types, etc.
- Separe os componentes usando composition pattern
- Escreva com boas práticas para fácil manutenção e testes futuros

Quero o código com:

- Componente principal
- Sub componentes para montar o hero.
```

### 🎯 Prompt com Formulário de Agendamento (com React Hook Form + Zod)

```markdown
Adicione um formulário de agendamento rápido dentro do Hero da landing page de clínica odontológica.

Requisitos:

- Use React Hook Form com integração ao Zod
- Campos: nome, e-mail, telefone e data de agendamento
- Valide os dados com Zod (ex: e-mail válido, telefone obrigatório)
- Use componentes do Shadcn UI (`Input`, `Button`, `Label`)
- Após envio, simule envio com `setTimeout` e exiba toast de confirmação
- Todos os campos devem ter acessibilidade com `aria-*`
- Estilize com Tailwind para ser responsivo (mobile-first)
- Organize os arquivos separando o schema Zod, form component e UI components

Formato:

- Zod schema em `lib/validators/appointment.ts`
- Formulário em `components/forms/AppointmentForm.tsx`
- Usar toast do Shadcn
```

### 📦 Prompt para Organização e Componentização

```markdown
Quero organizar os componentes da landing page de forma escalável, pensando em reutilização e manutenção futura.

Estrutura esperada:

- `/components/hero/Hero.tsx`
- `/components/forms/AppointmentForm.tsx`
- `/lib/validators/appointment.ts` (com schema Zod)
- `/components/ui/Button.tsx` (botão customizado baseado no Shadcn)
- `/components/ui/Input.tsx` (componente de input adaptado)
- `/app/page.tsx` usando Server Component para montar a landing page

Explique o porquê dessa estrutura e como facilitará testes e manutenção.
```

```markdown
Quero uma landing page completa com foco em conversão para uma clínica odontológica.

Tecnologias:

- Next.js 15 com App Router
- TailwindCSS
- Shadcn UI
- React Hook Form + Zod
- next/image otimizado
- SEO otimizado para ser bem reanqueado pelos buscadores

Componentes esperados:

- Hero com título chamativo, imagem e call to action aplique vieses cognitivos para atrair atenção do usuário
- Formulário de agendamento com validações (nome, e-mail, telefone, data)
- Toast de confirmação (usando a biblioteca `sonner`)
- Tudo responsivo e acessível (aplicando mobile first)

Organize os arquivos em:

- `/components/hero/`
- `/components/forms/`
- `/lib/validators/`
- `/components/ui/` para botões/inputs adaptados
- `/app/page.tsx` integrando tudo

Use boas práticas, componentes reaproveitáveis, e explique o motivo das escolhas técnicas.
```

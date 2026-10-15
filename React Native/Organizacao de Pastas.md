# Guia de organização
Objetivo: manter o código fácil de encontrar, entender, testar e modificar. A estrutura deve acompanhar o tamanho do projeto; não crie pastas sem necessidade.

## Estrutura recomendada

```text
src/
├── screens/       # Telas do app (Home, Tasks, Profile)
│   └── Home/
│       ├── index.tsx
│       └── styles.ts
├── components/    # Componentes reutilizáveis (Button, Input, Card)
├── services/      # Integrações externas: Firebase, APIs e backend
├── navigation/    # Stacks, tabs e configuração do React Navigation
├── hooks/         # Hooks personalizados reutilizáveis (useAuth, useTasks)
├── types/         # Tipos compartilhados do TypeScript
├── utils/         # Funções auxiliares independentes (datas, formatação)
├── constants/     # Valores fixos compartilhados
└── lib/           # Configuração e instâncias de bibliotecas (ex.: Firebase)
```

## Pastas essenciais

- **`screens/`ou`pages/`** — cada tela fica em sua própria pasta. `index.tsx` contém a tela; `styles.ts` contém seus estilos, se for útil separá-los.
- **`components/`** — peças de interface reutilizáveis. Componentes usados só por uma tela podem ficar dentro da pasta dessa tela.
- **`services/`** — concentra o acesso ao Firebase e a APIs. Evite espalhar consultas ao banco diretamente pelas telas.
- **`navigation/`ou`routes/`** — centraliza a configuração de navegação.
- **`types/`** — guarda tipos compartilhados. Tipos usados por apenas uma funcionalidade podem ficar próximos dela.

As pastas `hooks/`, `utils/`, `constants/` e `lib/` são úteis quando houver código que justifique separá-las.

## Boas práticas

1. **Separe responsabilidades:** telas cuidam da interface; serviços cuidam das integrações; funções de negócio ficam em módulos apropriados.
2. **Prefira nomes claros e consistentes:** por exemplo, `getUserTasks`, `TaskCard.tsx` ou `task-card.tsx`. Escolha um padrão e mantenha-o.
3. **Evite arquivos gigantes:** extraia componentes ou funções quando isso melhorar a compreensão — não apenas para reduzir linhas.
4. **Não duplique lógica:** reutilize código quando houver uma responsabilidade realmente compartilhada.
5. **Trate erros:** considere falhas de rede, autenticação e banco; não deixe `catch` vazio.
6. **Valide dados externos:** TypeScript ajuda durante o desenvolvimento, mas não valida sozinho os dados recebidos do Firebase ou de APIs em tempo de execução.
7. **Use ferramentas de qualidade:** ESLint para identificar problemas e Prettier para padronizar a formatação.
8. **Teste o que é importante:** especialmente regras de negócio, validações e fluxos críticos.
9. **Refatore aos poucos:** faça mudanças pequenas e teste o app após cada etapa.
10. **Não crie abstrações prematuramente:** uma arquitetura maior não é automaticamente melhor.

## Quando o projeto crescer: `features/`

Se uma funcionalidade ficar complexa, agrupe seus arquivos por domínio:

```text
src/
├── features/
│   └── tasks/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       ├── screens/
│       └── types.ts
├── components/    # Componentes compartilhados entre funcionalidades
└── navigation/
```

`features/tasks/` reúne o que pertence a tarefas. `components/` na raiz fica para componentes realmente compartilhados. Não é necessário adotar essa abordagem para todas as funcionalidades desde o início.

## Regra prática

- **`screens`** = telas do aplicativo.
- **`components`** = peças de interface reutilizáveis.
- **`services`** = acesso a sistemas externos.
- **`features`** = agrupamento por funcionalidade, quando o projeto crescer.

Para React Native CLI com React Navigation, essa estrutura é uma convenção, não uma regra obrigatória. O mais importante é manter consistência e separar responsabilidades.

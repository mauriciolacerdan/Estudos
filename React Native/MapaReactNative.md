# Mapa React Native — Base de Conhecimento

> Documento consolidado para consulta rápida. Gerado a partir dos projetos em `React Native/` e arquivos auxiliares (`README.md`, `Backend.md`, `Ideias.md`, `AGENTS.md`).

---

## **DOCUMENTAÇÕES**

Dentro de cada documento eu ja coloquei as documentações necessarias.

- [React Native](https://reactnative.dev/) - Documentação oficial
- [React Hooks](https://react.dev/reference/react) - Hooks do React
- [Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) - Programação assíncrona

## EMULADORES E FERRAMENTAS REACT NATIVE

Baixar [Node.js E JDK11](https://nodejs.org/)
Baixar emulador e arquivos necessarios(guia de baixar e config no site do que for usar)
Analisar métricas do código: `npx unlighthouse -site <url-site>`

#### - Emulador([Android Studio](https://developer.android.com/studio)/[Xcode](https://developer.apple.com/xcode/)):

- Criar novo projeto:
  `npx @react-native-community/cli init Nomedoapp  (dar [cd pastadoprojeto])`

- Instalar projeto (Com Emulador aberto) :
  `npx react-native run-android` Mac: `npx react-native run-ios`

- Abrir Metro(Se o app ja tiver instalado no emulador):
  `npx react-native start`

#### - [Expo Go:](https://docs.expo.dev/)

- Criar novo projeto:
  `npx create-expo-app@latest nomedoapp -t` (-t projeto personalisado (blank)) (dar [cd pastadoprojeto])

- Abrir Projeto:
  `npx expo start`
  limpar cache: `npx expo start -c`

Após abrir o projeto, não se preocupe com a organização do código.  
O foco aqui é ser **didático** e facilitar o aprendizado, não seguir padrões de produção.



## Visão geral dos estudos

Os estudos seguem uma progressão prática: exercícios isolados → sandbox de fundamentos → projetos focados → apps completos com backend/Firebase → app TypeScript em evolução.

| Métrica | Valor |
|---------|-------|
| Projetos analisados | 6 |
| Período de evolução | Fundamentos (Expo/JS) → Apps nativos (CLI/TS) |
| Stack dominante | React Navigation 7, styled-components, Firebase, Axios |
| Maior projeto | Devpost (~22 arquivos src, Firebase completo) |
| Projeto mais recente | Produtivo (RN 0.83, TS, arquitetura modular) |

**Filosofia dos estudos:** código didático com comentários extensos, priorizando aprendizado sobre padrões de produção (conforme `README.md`).

---

## Inventário dos projetos

Resumo — detalhes completos em [`INVENTARIO-PROJETOS.md`](INVENTARIO-PROJETOS.md).

| # | Projeto | Objetivo | Complexidade |
|---|---------|----------|--------------|
| 1 | **AppEstudosRN** | Sandbox de fundamentos RN | Alto (amplitude) |
| 2 | **CarrinhoDeCompras** | Context + Stack + FlatList | Baixo–Médio |
| 3 | **Devpost** | Rede social com Firebase Nativo | Alto |
| 4 | **FinancaspessoaisAPP** | Finanças com API REST + JWT | Alto |
| 5 | **Prática-GERAL** | Exercícios isolados | Baixo |
| 6 | **Produtivo** | Produtividade (TS + Firebase) | Médio–Alto (WIP) |

---

## Conceitos aprendidos por categoria

### Fundamentos React Native
- Componentes nativos: `View`, `Text`, `TextInput`, `ScrollView`, `Image`, `Switch`, `Button`, `TouchableOpacity`, `Alert`, `ActivityIndicator`, `SafeAreaView`, `StatusBar`
- Props e composição de componentes
- `Keyboard.dismiss()`, `keyboardType`
- Expo Go vs React Native CLI

**Referência:** `AppEstudosRN/src/Pages/Home/Home.js`

---

### Componentes
- Componentes reutilizáveis (`Product`, `CardItem`, `PostList`, `BalanceItem`, `HistoricoList`)
- Componentes de layout (Header, CustomDrawer)
- Separação visual/lógica (`index.tsx` + `styles.tsx`)

**Referência:** `Devpost/src/components/`, `Produtivo/src/Components/`

---

### Estilização
- `StyleSheet.create` — estilos imperativos
- `styled-components/native` — componentes estilizados
- Props transient em styled (`$active`, `$color`) para estados
- Temas escuros customizados (Devpost, Produtivo)

**Referência:** `Prática-GERAL/App.js` (StyleSheet), `Devpost/src/components/PostList/styles.tsx` (styled)

---

### Hooks
| Hook | Onde aprendeu | Nível |
|------|---------------|-------|
| `useState` | AppEstudosRN | Dominado |
| `useEffect` | AppEstudosRN, FinancaspessoaisAPP | Dominado |
| `useMemo` | AppEstudosRN | Iniciante |
| `useRef` | Prática-GERAL, AppEstudosRN | Intermediário |
| `useContext` | CarrinhoDeCompras | Dominado |
| `useLayoutEffect` | Devpost | Intermediário |
| `useFocusEffect` | Devpost | Intermediário |
| `useCallback` | Devpost | Intermediário |
| `useIsFocused` | FinancaspessoaisAPP | Intermediário |

---

### Navegação
- **Stack:** telas empilhadas, params entre rotas
- **Tab:** bottom tabs com ícones, `tabBarHideOnKeyboard`
- **Drawer:** menu lateral customizado
- **Aninhada:** Tab → Stack → telas modais
- **Condicional:** auth routes vs app routes com loading

**Referência Stack simples:** `CarrinhoDeCompras/src/routes/index.js`  
**Referência Tab+Stack:** `Devpost/src/routes/app.routes.tsx`  
**Referência Drawer:** `FinancaspessoaisAPP/src/Rotas/app.routes.js`  
**Referência aninhada completa:** `AppEstudosRN/src/Rotas/`  
**Referência auth guard:** `Produtivo/src/Routes/Routes.tsx`

---

### Context API
- Provider global envolvendo app
- Estado compartilhado (carrinho)
- Fluxo de autenticação (signIn, signUp, signOut, loading)

**Referência carrinho:** `CarrinhoDeCompras/src/contexts/CartContext.js`  
**Referência auth:** `Produtivo/src/Context/AuthContext.tsx`

---

### Gerenciamento de Estado
- Estado local com `useState` (padrão principal)
- Context API para estado global (carrinho, auth)
- Sem Redux, Zustand ou React Query

**Referência:** CarrinhoDeCompras (estado compartilhado mais claro)

---

### AsyncStorage
- Persistir string simples (`@nome`)
- Persistir objeto JSON (usuário logado)
- Persistir token JWT
- Restaurar sessão ao abrir app
- Limpar no logout

**Referência básica:** `AppEstudosRN/src/Pages/Home/Home.js`  
**Referência sessão:** `Devpost/src/contexts/auth.tsx`  
**Referência token:** `FinancaspessoaisAPP/src/Context/auth.js`

---

### Firebase Authentication
| SDK | Projeto | Operações |
|-----|---------|-----------|
| Web (Expo Go) | AppEstudosRN | createUser, signIn, onAuthStateChanged, signOut |
| Nativo (CLI) | Produtivo, Devpost | createUser, signIn, signOut + doc Firestore users |

**Referência Web:** `AppEstudosRN/src/Pages/Home/Home.js`  
**Referência Nativo:** `Produtivo/src/Context/AuthContext.tsx`  
**Documentação:** `AppEstudosRN/src/Pages/Home/Firebase users/Firebase.md`

---

### Firestore
- CRUD: add, set, update, delete, get
- Queries: where, orderBy, limit, startAfter
- Tempo real: onSnapshot
- Subcollections: users/{uid}/tasks
- Coleções auxiliares (likes)
- Timestamps: FieldValue.serverTimestamp()

**Referência CRUD Web:** `AppEstudosRN/src/Pages/Home/Firebase users/ListUsers.js`  
**Referência queries avançadas:** `Devpost/src/pages/Home/index.tsx`  
**Referência realtime:** `Devpost/src/pages/Search/index.tsx`  
**Referência subcollections:** `Produtivo/src/Components/TaskModal/index.tsx`

---

### API REST
- axios.create com baseURL
- GET, POST, DELETE
- Headers Authorization Bearer
- Consumo de APIs públicas (ViaCEP, AwesomeAPI, Sujeito Programador)
- Backend próprio Node + Express + Prisma

**Referência GET simples:** `AppEstudosRN/src/Pages/Sobre/API.js`  
**Referência APIs públicas:** `Prática-GERAL/src/BuscadorCep/api.js`  
**Referência CRUD autenticado:** `FinancaspessoaisAPP/src/paginas/Home/index.js`  
**Backend:** `FinancaspessoaisAPP/src/backend-financas-main/`

---

### Axios
- Instância configurada
- Interceptors via defaults.headers
- Tratamento de erro try/catch

**Referência:** `AppEstudosRN/src/Pages/Sobre/API.js`, `FinancaspessoaisAPP/src/Context/auth.js`

---

### Listas
- FlatList básica com keyExtractor e renderItem
- ListEmptyComponent, ListFooterComponent
- FlatList horizontal
- Paginação infinita (onEndReached + startAfter)
- Pull-to-refresh (refreshing + onRefresh)

**Referência básica:** `CarrinhoDeCompras/src/pages/Cart/index.js`  
**Referência avançada:** `Devpost/src/pages/Home/index.tsx`

---

### FlatList
→ Ver seção **Listas** acima.

---

### Formulários
- Inputs controlados
- Picker, Slider, Switch
- Validação com Alert
- Confirmação antes de submit
- Keyboard dismiss
- Toggle login/cadastro

**Referência básica:** `Prática-GERAL/App.js`  
**Referência com API:** `FinancaspessoaisAPP/src/paginas/new/index.js`  
**Referência complexo:** `Produtivo/src/Components/TaskModal/index.tsx`

---

### Upload de Imagens
- Seleção galeria/câmera (Expo ImagePicker)
- Seleção galeria nativa (react-native-image-picker)
- Upload Firebase Storage (putFile)
- Propagar URL para Firestore

**Referência seleção:** `AppEstudosRN/src/Pages/Home/Home.js`  
**Referência upload:** `Devpost/src/pages/Profile/index.tsx`

---

### Manipulação de Arquivos
- URI local de imagem
- putFile para Firebase Storage
- getDownloadURL

**Referência:** `Devpost/src/pages/Profile/index.tsx`

---

### Realtime Database
- Documentado teoricamente em `Firebase.md`
- **Não implementado** em código

---

### Paginação
- Firestore: limit + startAfter + lastItem state
- onEndReachedThreshold

**Referência:** `Devpost/src/pages/Home/index.tsx`

---

### Refresh Control
- refreshing + onRefresh em FlatList
- Recarregar feed do zero

**Referência:** `Devpost/src/pages/Home/index.tsx`

---

### Modais
- Modal slide fullscreen
- Modal fade transparent
- Modal com formulário interno
- Fechar ao tocar fora (TouchableWithoutFeedback)

**Referência básica:** `Prática-GERAL/App.js`  
**Referência calendário:** `FinancaspessoaisAPP/src/Components/CalendarModal/Index.js`  
**Referência formulário:** `Produtivo/src/Components/TaskModal/index.tsx`

---

### Animações
- Animated API: timing, sequence, parallel, loop, interpolate
- react-native-animatable

**Referência:** `AppEstudosRN/src/Pages/Home/Home.js`

---

### Date-fns
- format(date, "dd/MM/yyyy") — datas para API
- formatDistance — "há X minutos" com locale ptBR

**Referência tempo relativo:** `Devpost/src/components/PostList/index.tsx`  
**Referência formatação:** `FinancaspessoaisAPP/src/paginas/Home/index.js`

---

### TypeScript
- Arquivos .tsx/.ts
- Tipos de domínio (Task)
- Props tipadas
- tsconfig do React Native

**Referência:** `Produtivo/src/Pages/Tarefas/Index.tsx`, `Devpost/` (projeto inteiro)

---

### Testes
- Jest configurado
- Smoke test: renderizar App sem crash

**Referência:** `Devpost/__tests__/App.test.tsx`

---

### Android
- Expo run:android
- RN CLI run:android
- multiDexEnabled para Firebase (documentado)
- usesCleartextTraffic (padrão RN 0.83)

**Referência:** `AppEstudosRN/.../Firebase.md`, `Produtivo/android/`

---

### iOS
- Scripts run:ios presentes
- Platform.OS checks (Login FinancaspessoaisAPP)
- Podfile presente em Devpost/Produtivo

**Referência:** `FinancaspessoaisAPP/src/paginas/Signin/Index.js` (KeyboardAvoidingView por plataforma)

---

### Arquitetura
- Monolito didático (AppEstudosRN, Prática-GERAL)
- Modular por pastas (Devpost, Produtivo, FinancaspessoaisAPP)
- Padrão: Context → Routes → Pages → Components
- Backend embutido (FinancaspessoaisAPP)

**Referência arquitetura madura:** `Produtivo/src/`

---

### Performance
- Cleanup isActive em useEffect
- scrollEnabled={false} em FlatList aninhada
- Paginação limit(5) em vez de carregar tudo
- **Não estudado:** memo, useCallback sistemático, FlashList, profiling

---

### Boas Práticas
- Loading states antes de renderizar conteúdo
- Validação de campos antes de submit
- Cleanup de listeners (onSnapshot, useFocusEffect)
- Separação styles/index
- Comentários explicativos no código

**Referência:** `Produtivo/src/Context/AuthContext.tsx` (comentários), `Devpost/src/routes/index.tsx` (loading)

---

## Projetos de referência escolhidos

| Categoria | Projeto escolhido | Por quê |
|-----------|-------------------|---------|
| Fundamentos | AppEstudosRN | Maior cobertura de componentes e hooks num só lugar |
| Context (carrinho) | CarrinhoDeCompras | Foco exclusivo, código limpo |
| Context (auth) | Produtivo | Comentários didáticos + TypeScript |
| Navegação simples | CarrinhoDeCompras | Stack mínimo funcional |
| Navegação avançada | Devpost | Tab + Stack + params + header dinâmico |
| Drawer | FinancaspessoaisAPP | Integrado em app completo |
| Firebase Web | AppEstudosRN | Funciona no Expo Go, CRUD documentado |
| Firebase Nativo | Devpost | Storage + paginação + realtime + likes |
| Firestore subcollections | Produtivo | Único projeto com essa estrutura |
| API REST + JWT | FinancaspessoaisAPP | Full-stack com backend real |
| Axios básico | Prática-GERAL | APIs públicas, tratamento de erro |
| FlatList básica | CarrinhoDeCompras | ListEmptyComponent, Footer |
| FlatList avançada | Devpost | Paginação + refresh |
| Formulários | Produtivo (TaskModal) | Mais campos e validações |
| Upload imagens | Devpost | Fluxo completo Storage → Firestore |
| Modais | Produtivo | Modal + calendário + time picker |
| Animações | AppEstudosRN | Animated API com exemplos comentados |
| TypeScript | Produtivo | Tipos de domínio explícitos |
| Testes | Devpost | Jest configurado e funcional |
| Styled Components | Devpost | Cobertura total com TS |
| Date-fns | Devpost (relativo), FinancaspessoaisAPP (format) | Casos distintos |
| Calendário | Produtivo | Seleção de data em formulário |

---

## Conceitos repetidos e como foram consolidados

| Tema | Repetições | Decisão |
|------|------------|---------|
| useState/useEffect | 6 projetos | Mantido AppEstudosRN como índice; outros são aplicações |
| Context API | 4 projetos | Separado: carrinho (CarrinhoDeCompras) vs auth (Produtivo) |
| Firebase Auth | 3 projetos | Web (AppEstudosRN) e Nativo (Produtivo) — SDKs diferentes |
| AsyncStorage | 4 projetos | Três casos: string, JSON user, JWT — cada um com referência |
| FlatList | 5 projetos | Dois níveis: básico (Carrinho) e avançado (Devpost) |
| Modal | 4 projetos | Dois níveis: básico (Prática-GERAL) e complexo (Produtivo) |
| styled-components | 4 projetos | Devpost como referência principal |
| Rotas auth/app | 3 projetos | Produtivo (melhor documentado) |
| Login/signup UI | 3 projetos | Produtivo (toggle na mesma tela) |

---

## Conhecimentos dominados

Você demonstra segurança prática em:

1. **Componentes e layout RN** — todos os building blocks nativos
2. **Hooks essenciais** — useState, useEffect, useContext, useRef
3. **Navegação** — Stack, Tab, Drawer, params, rotas condicionais
4. **Context API** — carrinho e fluxo de autenticação
5. **AsyncStorage** — persistência local e sessão
6. **FlatList** — listas básicas e com componentes customizados
7. **Formulários** — inputs controlados, validação, picker, slider
8. **Axios** — GET/POST/DELETE, baseURL, APIs públicas
9. **Styled Components e StyleSheet** — estilização funcional
10. **Modais básicos** — abrir/fechar, animações slide/fade
11. **Loading states** — ActivityIndicator em auth e telas
12. **Expo workflow** — criar, rodar, expo-image-picker

---

## Conhecimentos intermediários

Estudados com implementação real, mas com lacunas:

1. **Firebase Nativo** — auth + firestore + storage (Devpost, Produtivo)
2. **Firestore avançado** — paginação, likes, onSnapshot, subcollections
3. **API REST autenticada** — JWT, CRUD com backend (FinancaspessoaisAPP)
4. **TypeScript em RN** — tipos básicos, props, arquivos .tsx
5. **Upload de imagens** — picker → storage → firestore
6. **date-fns e calendários** — formatação e seleção de datas
7. **useFocusEffect / useLayoutEffect** — recarregar telas, header dinâmico
8. **Animações Animated** — sequence/parallel (parcialmente comentadas)
9. **Arquitetura modular** — pastas Pages/Components/Routes (Produtivo/Devpost)
10. **Testes** — smoke test apenas, sem cobertura de lógica

---

## Lacunas de aprendizado

| Área | Prioridade |
|------|------------|
| Gerenciamento de estado avançado (Zustand, React Query) | Alta |
| Testes unitários e de integração | Alta |
| Push notifications (FCM) | Alta |
| Deep linking | Média |
| Offline-first / cache | Média |
| Performance (memo, FlashList, profiling) | Média |
| Publicação nas stores (Play Store / App Store) | Alta |
| Animações avançadas (Reanimated 3) | Média |
| Acessibilidade | Média |
| i18n | Baixa |
| Realtime Database (implementação) | Baixa |
| CI/CD para mobile | Média |

---

## O que já consigo desenvolver sozinho

Com base no que está implementado nos projetos:

| Tipo de app | Capacidade |
|-------------|------------|
| App com listas e formulários | ✅ Sim |
| App com navegação Stack/Tab/Drawer | ✅ Sim |
| App com carrinho / estado global (Context) | ✅ Sim |
| App com login Firebase (email/senha) | ✅ Sim (Web e Nativo) |
| App social com posts, likes e feed | ✅ Sim (modelo Devpost) |
| App conectado a API REST própria | ✅ Sim (modelo FinancaspessoaisAPP) |
| App com upload de foto de perfil | ✅ Sim |
| App com filtros por data e calendário | ✅ Sim |
| App TypeScript com arquitetura modular | ⚠️ Parcial (Produtivo incompleto) |
| App com pagamentos / PIX | ❌ Não |
| App com push notifications | ❌ Não |
| App publicado na loja | ❌ Não evidenciado |

---

## Próximos estudos de maior ROI

Ordem sugerida para retorno profissional:

1. **Completar Produtivo** — implementar Home, Metas e Settings; consolidar TS + Firebase subcollections em app funcional de ponta a ponta.

2. **React Query ou Zustand** — substituir fetch manual em useEffect; padrão usado em apps profissionais.

3. **Testes automatizados** — unit tests para Context, services e componentes críticos.

4. **Push Notifications (FCM)** — essencial para apps reais; Firebase já está no stack.

5. **Publicação Android** — gerar AAB, configurar signing, publicar na Play Store (experiência prática).

6. **Performance de listas** — migrar FlatList para FlashList em feeds; usar React.memo onde necessário.

7. **Reanimated 3** — animações performáticas (dependência já instalada no AppEstudosRN).

8. **VanControl (Ideias.md)** — aplicar todo o stack aprendido em produto real com backend PostgreSQL + Firebase auth/notifications.

---

## Avaliação objetiva do nível atual

### Classificação: **Júnior avançado / Pleno inicial em React Native**

| Dimensão | Nota (1–5) | Comentário |
|----------|------------|------------|
| Fundamentos RN | 5 | Cobertura excelente e prática |
| Navegação | 4 | Domina Stack, Tab, Drawer e composição |
| Estado (Context) | 4 | Sólido; falta lib de estado server-side |
| Firebase | 4 | Web + Nativo; falta FCM e Realtime DB prático |
| API REST | 4 | CRUD autenticado funcional |
| TypeScript | 3 | Usa TS mas sem tipagem rigorosa em todos os projetos |
| Arquitetura | 3 | Boa em Devpost/Produtivo; monolitos didáticos no início |
| Testes | 1 | Apenas smoke test |
| Performance | 2 | Paginação básica; sem otimizações avançadas |
| Publicação/DevOps | 1 | Não evidenciado |

**Resumo:** Você tem base sólida para construir apps mobile funcionais com autenticação, listas, formulários, Firebase e API REST. O diferencial está na variedade de projetos práticos e na documentação inline. O salto para nível pleno exige testes, publicação, gerenciamento de estado server-side e completar um app TypeScript end-to-end.

---

## Índice de consulta rápida

| Conceito | Projeto / Arquivo |
|----------|-------------------|
| **API REST** | `FinancaspessoaisAPP/src/paginas/Home/index.js` |
| **API REST (GET simples)** | `AppEstudosRN/src/Pages/Sobre/API.js` |
| **API pública (CEP)** | `Prática-GERAL/src/BuscadorCep/api.js` |
| **API pública (moedas)** | `Prática-GERAL/src/Conversor/Api.js` |
| **AsyncStorage (básico)** | `AppEstudosRN/src/Pages/Home/Home.js` |
| **AsyncStorage (sessão)** | `Devpost/src/contexts/auth.tsx` |
| **AsyncStorage (JWT)** | `FinancaspessoaisAPP/src/Context/auth.js` |
| **Axios (config)** | `AppEstudosRN/src/Pages/Sobre/API.js` |
| **Animações (Animated)** | `AppEstudosRN/src/Pages/Home/Home.js` |
| **Backend Node/Prisma** | `FinancaspessoaisAPP/src/backend-financas-main/` |
| **Calendário** | `Produtivo/src/Components/TaskModal/index.tsx` |
| **Calendário (filtro)** | `FinancaspessoaisAPP/src/Components/CalendarModal/Index.js` |
| **Context API (carrinho)** | `CarrinhoDeCompras/src/contexts/CartContext.js` |
| **Context API (auth)** | `Produtivo/src/Context/AuthContext.tsx` |
| **date-fns (relativo)** | `Devpost/src/components/PostList/index.tsx` |
| **date-fns (format)** | `FinancaspessoaisAPP/src/paginas/new/index.js` |
| **DateTimePicker** | `Produtivo/src/Components/TaskModal/index.tsx` |
| **Drawer Navigator** | `FinancaspessoaisAPP/src/Rotas/app.routes.js` |
| **Expo ImagePicker** | `AppEstudosRN/src/Pages/Home/Home.js` |
| **Firebase Auth (Web)** | `AppEstudosRN/src/Pages/Home/Home.js` |
| **Firebase Auth (Nativo)** | `Produtivo/src/Context/AuthContext.tsx` |
| **Firebase (documentação)** | `AppEstudosRN/src/Pages/Home/Firebase users/Firebase.md` |
| **Firestore CRUD (Web)** | `AppEstudosRN/src/Pages/Home/Firebase users/ListUsers.js` |
| **Firestore (paginação)** | `Devpost/src/pages/Home/index.tsx` |
| **Firestore (realtime)** | `Devpost/src/pages/Search/index.tsx` |
| **Firestore (subcollections)** | `Produtivo/src/Pages/Tarefas/Index.tsx` |
| **Firebase Storage** | `Devpost/src/pages/Profile/index.tsx` |
| **FlatList (básica)** | `CarrinhoDeCompras/src/pages/Cart/index.js` |
| **FlatList (paginação)** | `Devpost/src/pages/Home/index.tsx` |
| **Formulários** | `Prática-GERAL/App.js` |
| **Formulário complexo** | `Produtivo/src/Components/TaskModal/index.tsx` |
| **Hooks (todos)** | `AppEstudosRN/src/Pages/Home/Home.js` |
| **Image Picker (nativo)** | `Devpost/src/pages/Profile/index.tsx` |
| **Insomnia/SQL (backend)** | `Backend.md` |
| **Likes (Firestore)** | `Devpost/src/components/PostList/index.tsx` |
| **Loading states** | `Devpost/src/routes/index.tsx` |
| **Modal (básico)** | `Prática-GERAL/App.js` |
| **Modal (formulário)** | `Produtivo/src/Components/TaskModal/index.tsx` |
| **Navegação (params)** | `AppEstudosRN/src/Pages/Sobre/Sobre.js` |
| **Navegação (Stack)** | `CarrinhoDeCompras/src/routes/index.js` |
| **Navegação (Tab+Stack)** | `Devpost/src/routes/app.routes.tsx` |
| **Navegação (Drawer+Tab+Stack)** | `AppEstudosRN/src/Rotas/Drawer.js` |
| **Navegação (auth guard)** | `Produtivo/src/Routes/Routes.tsx` |
| **Picker / Slider** | `AppEstudosRN/src/Pages/Home/Home.js` |
| **Refresh Control** | `Devpost/src/pages/Home/index.tsx` |
| **Styled Components** | `Devpost/src/components/PostList/styles.tsx` |
| **StyleSheet** | `Prática-GERAL/App.js` |
| **Testes (Jest)** | `Devpost/__tests__/App.test.tsx` |
| **TypeScript** | `Produtivo/src/Pages/Tarefas/Index.tsx` |
| **useFocusEffect** | `Devpost/src/pages/Home/index.tsx` |
| **useIsFocused** | `FinancaspessoaisAPP/src/paginas/Home/index.js` |
| **useLayoutEffect** | `Devpost/src/pages/NewPost/index.tsx` |
| **useRef** | `Prática-GERAL/App.js` |
| **Ideias futuras (VanControl)** | `Pratica e desafios/Ideias.md` |

---

## Documentos relacionados

- [`INVENTARIO-PROJETOS.md`](INVENTARIO-PROJETOS.md) — detalhamento de cada projeto
- [`INVENTARIO-CONCEITOS.md`](INVENTARIO-CONCEITOS.md) — catálogo deduplicado de conceitos
- [`README.md`](README.md) — mapa da pasta e comandos
- [`Backend.md`](Backend.md) — Insomnia, Beekeeper, SQL
- [`AGENTS.md`](AGENTS.md) — regras de auditoria dos estudos

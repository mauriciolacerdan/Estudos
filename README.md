# **==== GUIA ESTUDOS ====**

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)

### Descrição

Repositório pessoal de estudo e referência com foco em **React Native**, além de anotações de **JavaScript**, **HTML** e **CSS**. Aqui organizo o conhecimento para facilitar consultas e revisões futuras.

## MAPA DO PROJETO

```
┌── 🎨 HTML-CSS                   # Estudos
├── 📚 Java Script (HTML)         # Estudos
├── 🔗 Git-GitHub-VScode.md       # Estudos/Guia rápido
├── 📄 Guia-perguntas-entrevista.pdf  # PDF
├── 📱 React Native/
│   │
│   ├── 📋 README                         # Guia
│   ├── 🎯 Desafios-Praticas/...         # Exercícios
│   └── 📱 AppEstudosRN/                  # App principal (foco)
│       │
│       ├── App.js              # Ponto de entrada principal
│       ├── package.json         # Dependências e scripts
│       ├── app.json             # Configuração Expo
│       ├── index.js             # Entry point
│       ├── src/                # Código fonte
│       │   │   ├── Home/       # Tela principal (Todos os outros conhecimentos)
│       │   │   ├── Sobre/      # Tela sobre (Props, Navigation...)
│       │   │   └── FilmesAPI/  # Sistema de filmes(API,ReqHTTP,Loading,Modal...)
│       │   └── Rotas/          # Navegação
│       │       ├── Drawer.js   # Menu lateral
│       │       ├── Tab.js      # Navegação por abas
│       │       └── Stack.js    # Navegação em pilha
│       ├── assets/              # Imagens e recursos
│       └── node_modules/        # Dependências
```

## **DOCUMENTAÇÕES**

Dentro de cada documento eu ja coloquei as documentações necessarias.

- [React Native](https://reactnative.dev/) - Documentação oficial
- [React Hooks](https://react.dev/reference/react) - Hooks do React
- [Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) - Programação assíncrona

## EMULADORES E FERRAMENTAS REACT NATIVE

Baixar [Node.js E JDK11](https://nodejs.org/)
Baixar emulador e arquivos necessarios(guia de baixar e config no site do que for usar)

#### - Emulador([Android Studio](https://developer.android.com/studio)/[Xcode](https://developer.apple.com/xcode/)):

- Criar novo projeto:
  npx react-native init seuApp (dar [cd pastadoprojeto])

- Abrir projeto (Com Emulador aberto) :
  `npx react-native run-android` Mac: `npx react-native run-ios`

#### - [Expo Go:](https://docs.expo.dev/)

- Criar novo projeto:
  `npx create-expo-app@latest nomedoapp -t` (-t projeto personalisado (blank)) (dar [cd pastadoprojeto])

- Abrir Projeto:
  `npx expo start`

Após abrir o projeto, não se preocupe com a organização do código.  
O foco aqui é ser **didático** e facilitar o aprendizado, não seguir padrões de produção.

### Tutorial ReadMe

[Tutorial](https://www.youtube.com/watch?v=k4Rsy8GbKE0&list=PLjgO-IdEUwwBGZvbRHgU-6aulW9Uy8CBM&index=4)

[Ideias](https://github.com/Fernanda-Kipper/Readme-Templates)

[Badges](https://github.com/Ileriayo/markdown-badges)

### **Licença**

Projeto educacional para fins de estudo e aprendizado. **Proibido uso comercial !**

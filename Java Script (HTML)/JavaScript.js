// JavaScript

// local storage usado para salvar dados no navegador
// Devtools ajuda encontrar erros
// Entender árvore DOM para acessar elementos na página

// ===== INTERAÇÕES COM USUARIO =====
let idade = prompt("Qual sua idade?"); // Caixa de diálogo
window.alert("alerta"); // Alerta na tela
window.confirm("me confirme"); // Caixa de confirmação
document.write("Idade: " + idade); // Escreve na tela

console.log(idade); // Exibe informações no console ou HTML

/* ===== LÓGICA COM LOOPS =====
for: Usado quando sei quantas vezes repetir
while: Usado quando não sei quantas vezes repetir
i: contador do loop
i++: incrementa 1
i % 2: par ou impar
i == j: diagonal principal
*/

// ===== ASYNC / AWAIT =====
async function buscarDados() {
  try {
    let resposta = await fetch("url");
    let dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.log("Erro");
  }
}

// ===== PROMISES =====
// Promise representa uma operação assíncrona
fetch("url")
  .then((resposta) => resposta.json())
  .then((dados) => {
    console.log(dados);
  })
  .catch((erro) => {
    console.log(erro);
  });
// Estados:
// pending   -> carregando
// fulfilled -> sucesso
// rejected  -> erro
// async/await é uma forma mais moderna de usar Promises

/* ===== VARIÁVEIS =====
variáveis: (armazenam number, strings e boolean)
var   => Visível em toda a função. Pode ser redeclarada e reatribuída.
let   => Visível apenas no bloco {} onde foi declarada. Pode ser reatribuída, mas não redeclarada.
const => Visível apenas no bloco. NÃO pode ser reatribuída nem redeclarada.
Use preferencialmente 'let' para evitar erros de escopo.
*/

/* ===== OBJETOS / DESESTRUTURAÇÃO =====
(coloca varios objetos dentro de uma variavel [Usuarios] (considerado uma lista)) */
let pessoa = {
  nome: "mauricio",
  idade: 27,
  altura: 1.85,
  cargo: "dev",
};
let Usuarios = [
  { nome: "maria", idade: 19 },
  { nome: "joao", idade: 15 },
  { nome: "pedro", idade: 16 },
];
const { nome, altura } = pessoa; // Desestruturação de objeto (pega propriedade mais fácil)
/* [...lista] dessa forma pega o resto dos itens de uma array ou objeto de forma fácil (spread) */

// ===== DESESTRUTURAÇÃO DE ARRAYS =====
const lista = ["João", "Maria", "Pedro"];
const [primeiro, segundo] = lista;
console.log(primeiro); // João
console.log(segundo); // Maria
// Muito usado em React e React Native

// ===== SPREAD OPERATOR (...) =====
// Copia arrays
const novaLista = [...lista];
// Copia objetos
const novaPessoa = {
  ...pessoa,
};
// Muito usado para atualizar estados no React

// ===== STRINGS =====
let inho = ["sheldon", "zon"];
let sobrenome = "zinho";
let mensagem = `meu nome é ${inho} ${sobrenome}`; //(tem que estar dentro da crase)

// Métodos úteis:
sobrenome.includes("zon"); //[includes] procura o 'zon' dentro da string e retorna booleano
sobrenome.startsWith("zi"); //[startsWith] verifica se o [sobrenome] começa com zi e retorna booleano
sobrenome.endsWith("ho"); //[endsWith] verifica se o [sobrenome] termina com ho

/* ===== TRUTHY E FALSY =====
Falsy (considerados false):
false
0
""
null
undefined
NaN
Exemplo:
if("") {
    console.log("Entrou");
}
// Não executa
Truthy:
Qualquer valor diferente dos acima
if("Maurício"){
    console.log("Entrou");
}
// Executa
*/

// ===== ARRAYS =====
// (Usar colchetes[] em arrays)
let lista2 = ["matheus", "lucas", "jose", 150]; //(os itens tem numerações começando com 0)
lista2[2]; // Acessa 'jose' dentro da lista
lista2.length; // Tamanho da array
lista2.indexOf("matheus"); // Retorna a numeração do 'matheus'
lista2[1] = "joao"; // Substitui item da numeração 1
lista2.push("maria"); // Adiciona no fim
lista2.shift(); // Remove primeiro item
lista2.pop(); // Remove último item
lista2.splice(1, 1); // Remove item específico
lista2.join(";"); // Retorna itens separados com ;

// Métodos modernos:
lista2.map((item) => {
  console.log(`passando: ${item}`);
}); //[map] percorre toda lista fazendo uma ação
let busca = lista2.find((item) => item === "lucas"); //[find] busca um item da lista (vai buscar o lucas)
//.includes() // verifica existência
let resultadoArray = lista2.filter((item) => item.length <= 4); // Filtra por tamanho (com 4 letras)
let { 0: matheus, 2: jose } = lista2; // Desestrutura (pega de forma mais fácil os itens)
//[...lista2] dessa forma pega todos os itens de uma array ou objeto de forma fácil (spread)
//[reduce] usado para reduzir um array em um único valor

// ===== MÉTODOS DE ARRAY (EXTRAS) =====
// some() -> pelo menos um item atende a condição
const numeros = [1, 2, 3, 4];
const existeMaiorQue3 = numeros.some((item) => item > 3);

console.log(existeMaiorQue3); // true
// every() -> todos os itens atendem a condição
const todosMaioresQue0 = numeros.every((item) => item > 0);
console.log(todosMaioresQue0); // true
// Muito usado em validações

/* ===== CONVERSAO DE DADOS =====
parseInt() string → inteiro
Number() string → número
String() valor → string
Boolean() valor → boolean */

/* ===== OPERADORES =====
Referencia e Outros: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators

ATRIBUIÇÃO:
let x = 5;
x += 3; // x = x + 3

COMPARAÇÕES:
= recebe, == igual, === identico
!= diferença (booleano 5 != 5 = false)
< e > maior ou menor que (booleano5>2 = true)
<= menor ou igual, >= maior que ou igual

OPERADORES:
! negação(oque nao é true é false)
&& conjunção(so da true se tiver valores iguais)
|| disjunção(apenas 1 true para dar true)

+ concatena (ou soma) exemplo('nome', + idade)

Aritméticos seguem ordem de precedência ((), *, /, +, -)
*/

// ===== OPERADOR TERNÁRIO =====
condição ? valorSeTrue : valorSeFalse;
let idadeExemplo = 20;
let resultadoIdade = idadeExemplo >= 18 ? "Maior de idade" : "Menor de idade";
console.log(resultadoIdade);
// Equivale a um if/else simples

/* ===== SELETORES / DOM (Eventos) =====
(DOM (Document Object Model) representa a estrutura da página e permite acessar/manipular elementos)
.createElement("button") // cria um elemento no html
.appendChild(botaoSair) // atrela ao que foi digitado

Eventos dom: https://developer.mozilla.org/en-US/docs/Web/Events (pega um evento exemplo [onclick]...)
.addEventListener("click") // executa função sempre que o evento ocorre

getElementById("id") Seleciona 1 elemento pelo id
getElementsByClassName("classe") Seleciona todos com uma classe
getElementsByTagName("tag") Seleciona todos com uma tag
querySelector("seletorCSS")	Seleciona o primeiro com seletor CSS
querySelectorAll("seletorCSS")	Seleciona todos com seletor CSS
*/

// ===== MANIPULAÇÃO DE ELEMENTOS =====
// Ler valor de um input
input.value;
// Alterar texto
element.innerHTML = "Olá";
// Alterar estilo
element.style.backgroundColor = "red";
// Ocultar elemento
element.style.display = "none";
// Mostrar elemento
element.style.display = "block";
// Desabilitar campo
input.disabled = true;
// Muito usado em formulários

// ===== FUNÇÕES ANÔNIMAS =====
//(usar chaves{} em funções)(nao esquecer de chamar a função no final)
// Arrow: () => {} nos parenteses a função recebe os argumentos;'seta'=> nome "arrow"; 'chaves'{}representa o corpo da função
const exemplo = () => {
  console.log("Função anônima executada!");
};

// Function: serve para criar um conjunto de ações e resolver problemas. [function abrir(){}] serve para colocar ação dentro da função abrir
function abrir() {} //([return] )

// ===== PARÂMETROS PADRÃO =====
function saudacao(nome = "Visitante") {
  console.log(`Olá ${nome}`);
}
saudacao(); // Olá Visitante
saudacao("Maurício"); // Olá Maurício
// Evita erros quando nenhum valor é enviado

// ===== CONDICIONAIS =====
//(usar chaves{} em condicionais)
// IF / ELSE:
if (condição) {
  // Código se a condição for verdadeira (true)
} else {
  // Código se a condição for falsa (false)
}
// ELSE IF:
if (condição1) {
  // Código
} else if (condição2) {
  // Código
} else {
  // Código se nenhuma for verdadeira
}

// ===== OPTIONAL CHAINING =====
// (?. evita erro ao acessar propriedades inexistentes)
const usuario = {
  nome: "Maurício",
};
console.log(usuario?.nome);
console.log(usuario?.endereco);
// Muito usado com APIs e Firebase

// ===== NULLISH COALESCING =====
// (?? define valor padrão)
let nomeValor = null;
let resultadoNome = nomeValor ?? "Visitante";
console.log(resultadoNome);
// Muito usado junto com Optional Chaining

// Switch:
// Define diferentes ações com base em casos (retorna um texto se digita o número de 1 a 2)
switch (valor) {
  case 1:
    // código
    break;
  case 2:
    // código
    break;
  default:
  // código
}

/* ===== LOOPS =====
While - Executa enquanto a condição for verdadeira (vai parar no 10)
let x = 0;
while(x < 10) {
   document.write("<br> O valor é " + x);
    x++; // adiciona 1 número quando repete o loop 
}

For - Executa até que a condição seja falsa (vai parar quando passar de 5)
for(let a = 0; a < 5; a++) {
    document.write("<br> Valor do A: " + a);
}*/

// ===== DATAS E HORAS (feito no console) =====
var data = new Date("March 10, 2018"); // Data específica (em branco = data atual)
data.getHours();
data.getMinutes();
data.getMonth(); // (getMonth() começa do zero, jan = 0)
Date.parse("March 10, 2018"); // transforma em milissegundos

var datanova = new Date();
// Exemplo de formatação:
datanova.getDate() +
  "/" +
  (datanova.getMonth() + 1) +
  "/" +
  datanova.getFullYear();
datanova.setHours(datanova.getHours() + 10); // Soma horas

// ===== TEMPORIZADORES =====
function acao() {
  document.write("Executando... <br/>");
}
setInterval(acao, 1000); // Executa a cada segundo
setTimeout(acao, 3000); // Executa após 3 segundos

// ===== JSON =====
// (JSON é o formato mais usado para troca de dados entre sistemas)
const usuario = {
  nome: "Maurício",
  idade: 20,
};
// Objeto -> Texto JSON
const texto = JSON.stringify(usuario);
// Texto JSON -> Objeto
const objeto = JSON.parse(texto);
console.log(objeto.nome);
// Muito usado com APIs e Firebase

// ===== IMPORT E EXPORT =====
// Exportar
export default App;
// Importar
import App from "./App";
// Muito usado em React, React Native e Node.js

// ===== REQUISIÇÕES HTTP (fetch) =====
let listElement = document.querySelector("#app");
let posts = [];
function nutriApp() {
  fetch("https://sujeitoprogramador.com/rn-api/?api=posts#downloadJSON=true") // Faz uma requisição HTTP para a API usando fetch (isso retorna uma Promise)
    .then((r) => r.json()) // Quando a resposta chegar, converte ela para JSON
    .then((json) => {
      posts = json; // Guarda os dados recebidos no array "posts"

      posts.map((item) => {
        let liElement = document.createElement("li");
        let titleElement = document.createElement("strong");
        let imgElement = document.createElement("img");
        let descriptionElement = document.createElement("a");
        let titleText = document.createTextNode(item.titulo);

        titleElement.appendChild(titleText);
        liElement.append(titleElement);

        imgElement.src = item.capa;
        liElement.appendChild(imgElement);

        let descriptionText = document.createTextNode(item.subtitulo);
        descriptionElement.appendChild(descriptionText);
        liElement.appendChild(descriptionElement);

        listElement.appendChild(liElement);
      });
    })
    .catch(() => {
      console.log("Deu algum erro"); // Se der erro na requisição [catch], mostra essa mensagem no console
    });
}
nutriApp();


// JavaScript

// local storage usado para salvar dados no navegador
// Devtools ajuda encontrar erros
// Entender arvore DOM para acessar elementos na pagina



/* ===== INTERAÇÕES COM USUARIO =====
let idade = prompt("Qual sua idade?"); //Caixa de dialogo
window.alert ("alerta"); //Alerta na tela
window.confirm ("me confieme"); //Caixa de confirmação
document.write("Idade: " + idadeUsuario); //Escreve na tela

console.log(idade); //Exibe informações no console ou HTML */



/* ===== VARIÁVEIS =====
variaveis: (armazenam number,strings e boolean)
var   => Visível em toda a função. Pode ser redeclarada e reatribuída.
let   => Visível apenas no bloco {} onde foi declarada. Pode ser reatribuída, mas não redeclarada.
const => Visível apenas no bloco. NÃO pode ser reatribuída nem redeclarada.
Use preferencialmente 'let' para evitar erros de escopo.
*/

/* ===== OBJETOS / DESESTRUTURAÇÃO =====
(coloca varios objetos dentro de uma variavel [Usuarios] (considerado uma lista))
let pessoa = {
    nome: "mauricio",
    idade: 27,
    altura: 1.85,
    cargo: "dev" };
let Usuarios = [
    {nome: 'maria', idade: 19},
    {nome: 'joao', idade: 15},
    {nome: 'pedro', idade: 16} ];
const {nome, altura} = pessoa; // Desestruturação de objeto (pega propriedade mais facil)
[...lista] dessa forma pega o resto dos itens de uma array ou objeto de forma facil(spread) */


/* ===== STRINGS =====
let inho = ["sheldon", "zon"];
let sobrename = "zinho";
let mensagem = `meu nome é ${inho} ${sobrename}`; //(tem que tar dentro da craze)

// Métodos úteis:
sobrename.includes("zon"); //[includes]procura o 'zon' dentro da strings ou array e retorna booleano
sobrename.startsWith("zi"); //[startsWith]verifica se o [sobrenome] começa com zi e retorna booleano
sobrename.endsWith("ho"); //[endsWith]verifica se o [sobrenome] termina com ho */


/* ===== ARRAYS =====
// (Usar colchetes[] em arrays)
let lista = ['matheus', 'lucas', 'jose', 150]; //(os itens tem numeraçoes começando com 0)
lista[2]; // Acessa 'jose' dentro da lista
lista.length; // Tamanho da array
lista.indexOf('matheus'); // Retorna a numeração do 'matheus'
lista[1] = 'joao'; // Substitui item da numeraçao 1
lista.push('maria'); // Adiciona no fim
lista.shift(); // Remove primeiro item
lista.pop(); // Remove último item
lista.splice(); // Remove especifico
lista.join(';'); // Retorna itens separado com ;

//Metodos modernos:
lista.map((item) => { console.log(`passando: ${item}`) }); //[map] percorre toda lista fazendo uma ação
let busca = lista.find((item) => item === "lucas"); //[find] busca um item da lista (vai buscar o lucas)
.includes() // verifica existencia
let resultado = lista.filter((item) => item.length <= 4); // Filtra por tamanho (com 4 letras)
let {0:matheus, 2:jose} = lista; // Desestroi (pega de forma mais facil os itens)
//[...lista] dessa forma pega todos os itens de uma array ou objeto de forma facil(spread)
//[reduce] usado para reduzir um array em um unico valor */



/* ===== CONVERSAO DE DADOS =====
parseInt() string → inteiro
Number() string → numero
String() valor → string
Boolean() valor → bolean */



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


/* ===== SELETORES / DOM (Eventos) =====
(DOM (Document Object Model) representa a estrutura da página e permite acessar/manipular elementos)
.createElement("button") // cria um elemento no html
.appendChild(botaoSair) // atrela ao que foi digitado

Eventos dom: https://developer.mozilla.org/en-US/docs/Web/Events (pega um evento exemplo [onclick]...)
.addEventListener("click") // executa função sempre que o envento ocorre

getElementById("id") Seleciona 1 elemento pelo id
getElementsByClassName("classe") Seleciona todos com uma classe
getElementsByTagName("tag") Seleciona todos com uma tag
querySelector("seletorCSS")	Seleciona o primeiro com seletor CSS
querySelectorAll("seletorCSS")	Seleciona todos com seletor CSS
*/



/* ===== FUNÇÕES ANÔNIMAS =====
//(usar chaves{} em funções)(nao esquecer de chamar a função no final)
// Arrow: () => {} nos parenteses a função recebe os argumentos;'seta'=> nome "arrow"; 'chaves'{}representa o corpo da função
const exemplo = () => {
    console.log("Função anônima executada!"); 
};

// Function: serve para criar um conjunto de ações e resolver problemas. [function abrir(){}] serve para colocar ação dentro da função abrir
function abrir(){
} ([return] interrompe uma função)
*/ 



/* ===== CONDICIONAIS =====
//(usar chaves{} em condicionais)
IF / ELSE:
if (condição) {
  // Código se a condição for verdadeira (true)
} else {
  // Código se a condição for falsa (false)
}
ELSE IF:
if (condição1) {
  // Código
} else if (condição2) {
  // Código
} else {
  // Código se nenhuma for verdadeira
}

Switch:
Define diferentes ações com base em casos (retorna um texto se digita o numero de 1 a 2)
switch(valor) {
  case 1:
    // código
    break;
  case 2:
    // código
    break;
  default:
    // código
}*/


/* ===== LOOPS =====
While - Executa enquanto a condição for verdadeira (vai parar no 10)
let x = 0;
while(x < 10) {
   document.write("<br> O valor é " + x);
    x++; //adiciona 1 nomero quando repete o loop 
}

For - Executa até que a condição seja falsa (vai parar quando passar de 5)
for(let a = 0; a < 5; a++) {
    document.write("<br> Valor do A: " + a);
}*/



/* ===== DATAS E HORAS (feito no console) =====
var data = new Date("March 10, 2018"); // Data específica (em branco = Data atual)
data.getHours(), getMinutes(), getMonth(), etc. //(getMonth() começa do zero (jan = 0))
Date.parse() transforma em milissegundos

Exemplo de formatação:
datanova.getDate()+"/"+(datanova.getMonth()+1)+"/"+datanova.getFullYear();
datanova.setHours(datanova.getHours() + 10); // Soma horas */


/* ===== TEMPORIZADORES =====
function acao() {
    document.write("Executando... <br/>");
}
setInterval(acao, 1000); // Executa a cada segundo
setTimeout(acao, 3000);  // Executa após 3 segundos */



// ===== REQUISIÇÕES HTTP (fetch) =====
let listElement = document.querySelector("#app");
let posts = [];
function nutriApp(){
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
        console.log("Deu algum erro");// Se der erro na requisição [catch], mostra essa mensagem no console
    });
}
nutriApp();
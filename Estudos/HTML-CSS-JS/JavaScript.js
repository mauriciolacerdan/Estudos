

/*[" "] ou [' ']para exibir um texto*/
/*[( )] para fazer uma função  e [+] para juntar funções*/

var curso = "javascript"; /* [var]variaveis: o curso se atribuiu a palavra java script, entao se digitar curso vai aparecer javascript */
var valor1 = 7;
var valor2 = 7;
valor1 + valor2; /*resultado: 12*/
(valor1 + valor2) / 2; /*resultado: 6*/
/*se as variaveis for atribuidas a numeros pode somar[soma] e fazer operações matematicas*/
var idade = prompt("qual sua idade?"); /*[prompt]abre uma caixa de dialogo entao tudo que eu digitar na caixa vai ser variavel[var] de [nome]*/
var sobrenome = prompt("qual seu sobrenome?");

//VAR, LET E CONS
/*
var: variavel visivel em toda função onde foi declarada, pode ser declarada e retribuida
let: finciona apenas dentro do bloco {} onde foi declarado. nao pode ser redeclarado no mesmo escopo mas pode ser reatribuido
const: nao permite reatribuição ou mudança de valor
(prioridade em usar o let pois nao pode ser acessado fora do bloco, evitando problemas)
*/


console.log(idade + sobrenome); /*[console.log]exibe oque eu digitar no console do navegador. (o console devolve string altomatico mas tem como fazer ele devolver um number)*/


document.write("infos: " + idade + sobrenome); /*[document.write("bem vindo")] escreve um texto na pagina html[document] pode usar [h1]*/
 

document.write("<img src='https://sujeitoprogramador.com/steve.png' alt='foto do steve' />"); /*com a tag [<img/>] coloca foto dentro do html (use [src] para localizar a foto) */


/*funcoes, if e else*/

var ola = document.getElementById('area'); /*[var] esta criando variavel(ola) e atrelando ela no elemento com [id='area'] que ta no document(html)*/

function abrir(){ /*[Function]serve para criar um conjunto de ações e resolver problemas. [function abrir()] serve para colocar ação dentro da função abrir  (continuação no html)*/

    var Nome = prompt("digite seu nome"); /*acria uma caixa de texto[prompt] e oque for digitado se atrela ao [Nome]  */

     if(Nome === '' || Nome === null){ola.innerHTML = "Clique no botao para acessar..."}

     else{ ola.innerHTML = "bem vindo" + Nome + " ";
        let botaoSair = document.createElement("button");
         botaoSair.innerText = "Sair da conta"; /*dentro do button vai inserir texto[innerText] escrito ["sair..."] */
         area.appendChild(botaoSair);/*adicionando[appendChild] [botaoSair] dentro da [area](no html)*/
         botaoSair.onclick = sair;
     } 
     /*se[if] [Nome] for igual[===] a texto em branco[''] ou [null]  vai acessar [ola.innerHTML] atrelar [=] a escrita ["clique..."].
     mais se for [else] vai acessar [ola.innerHTML] e atrelar a escrita e + Nome que for escrito, e vai criar (botaoSair) e criar[createElement] e atrelar no [button] dentro do [document]  e quando clicar[onclic] vai atrelar ou executar a [function sair()] (a baixo) */

function sair(){
    area.innerHTML = "voce saiu !!"
}
}

/*testes de Function*/
function mediaAluno(nota1, nota2)/*[function] vai mandar a (nota1, nota2)*/{
    var media = (nota1 + nota2) / 2; /*quando chamar a função [media] vai calcular a nota1 + nota2 e depois dividir/ o resultado por 2 */
    
    if(media >= 7){
        console.log("Aluno aprovado com a média: " + media)
    }/*se[if] a media for maior[>] ou = a 7 vai dar [console.log] com uma mensagel e mais o resultado*/
    else if(media < 7){
        console.log("Aluno reprovado com a média: " + media )
    } /*se nao se [else if] a media for menor[<] que 7 vai dar [console.log] com uma mensagel e mais o resultado */

    /*essa função nao tem botao para iniciar entao tem que testar pelo console */
} 
function aluno(nome, curso){
    var mensagem = "seja bem vindo " + nome + " ao curso de " + curso ;
    console.log(mensagem);
}


/*listas/Arrays (aula foi feita no console para ver como funciona)*/
var lista = ['matheus', 'lucas', 'jose', 150]; /*variavel que cria lista e dentro dos [] tem os itens dela. os itens tem numeraçoes começando com 0 exemplo: matheus=0, lucas=1, jose=2...*/
lista[2];/*dessa forma eu to acessado o jose[jose=2] dentro da lista */
lista.length; /*saber o tamanho da lista*/
lista.indexOf('matheus'); /*para saber em qual numeração o matheus esta se aparecer numeração negativo é por que item nao existe na lista*/
lista[1] = 'joao'; /*dessa forma muda o conteudo da numeração 1 de lucas para joao */
lista.push('maria') /*dessa forma coloca a maria dentro da lista*/ 
lista.shift() /*dessa forma tira o primeiro item da lista*/
lista.pop() /*tira o ultimo item da lista*/
lista.join(';') /*me envia a lista separando os itens com ;*/


/*loops*/
//[while]significa enquanto ou seja vai fazer o loop em quanto a condição for (x < 10)
// var x = 0;
// while(x < 10){
//    documents.write("<br> O valor da variavel é" + x);
//    x++; /*toda vez que for repitir o loop vai adicionar 1 numero na variavel 0 e quando alcançar o numero 10 vai parar de dar loop */ }

// [for]significa para, entao enquanto a variavel (a) for menor do que 5 ele vai executar oque tiver dentro {}
// for(a = 0; a < 5; a++) {document.write("<br> Valor do A é: " + a);}

// [switch] ele define casos ou seja caso o usuario digite um numero de 1 a 5 ele retorna uma frase


/*Data(criado no console para ficar mais visivel)*/
var data = new Date("march 10, 2018"); /*dessa forma cria uma data completa no console (se deixar () em branco vai criar data de hoje e se colocar milisegundos ou outro transforma em data automatico*/
data.getHours(17); /*dessa forma cria uma hora. [getMinutes]minutos [getMonth]mes...(no js começa a contar o mes em 0 entao precisa somar mais 1 para dar o mes certo*/
Date.parse(Date); /*transforma data em milisegundos*/
/* datanova.getDate()+"/"+(datanova.getMonth()+1)+"/"+datanova.getFullYear(); dessa forma faz a ordem do seu jeito (dentro do mes colocou +1 para ele somar mais 1 numero e bater no mes certo*/
/* datanova.setHours(datanova.getHours() + 10); dessa forma soma horas, data, minutos...*/


// setInterval (executa de tempo em tempos uma ação)

function acao(){
    document.write("Executando... <br/>")
}; /*função apenas para escrever no html*/

// setInterval(acao, 1000); /*(no [setInverval] voce coloca a funçao[acao] e o tempo em milisegundos) (tem como colocar a função dentro do set interval)*/

// setTimeout (executa a ação depois que o tempo passar)
// setTimeout(acao, 3000);


//Objetos (com [let] cria um objeto ou variavel chamado pessoa que tem caracteristicas)
let pessoa = {nome: "mauricio", idade: 27, altura: 1.85, cargo: "dev"};
let Usuarios = [
 {nome: 'maria', idade: 19,},
 {nome: 'joao', idade: 15,},
 {nome: 'pedro', idade: 16,},
]; /*tem como colocar varios objetos dentro de uma variavel [Usuarios] (é considerado uma lista no console tendo numeros de identificação) */


//strings (ajuda a juntar textos mais variaveis)
 let inho= "sheldon";
 let sobrename= "zinho";

 let mensagem = `meu nome é ${inho} ${sobrename}`; /*isso é uma strings e da forma abaixo nao é (`tem que der dentro da crase ``)*/
 //let stringe = "meu nome é "+ inho+" "+ sobrename;


//local storage usado para salvar coisas

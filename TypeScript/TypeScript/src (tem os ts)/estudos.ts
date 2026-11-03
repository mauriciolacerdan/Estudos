/*
Instalar TS na pasta do projeto: npm install --save-dev typescript

Compilar o arquivo .ts para JavaScript (.js), pois o navegador ou aplicativo não reconhece o TS, então é preciso converter para JS para ele reconhecer:
Compilar com versão mais antiga: tsc Estudos.ts
Compilar com versão específica: tsc Estudos.ts --target "ES2015" (vai compilar pela versão de 2015)
Compilar com a última versão: tsc Estudos.ts --target ESNext

Para ficar mais prático em projetos maiores, usa-se o tsconfig, pois lá você configura o TypeScript da forma que quiser:
Gerar tsconfig: tsc --init
Compilar com a versão definida no config: tsc
Compilar automaticamente (vai compilar e verificar erros automaticamente após uma alteração, na pasta build): tsc --watch

Para rodar o projeto no terminal (na pasta build, dos arquivos compilados): node Estudos.js
*/

// Type inference / tipagem dinâmica:
/* O TypeScript reconhece o tipo de uma variável e, se ela for string, você não pode adicionar number nela. Caso ela seja string e number, e o TypeScript identifique isso, aí sim você pode adicionar number à variável também. */
let curso = "typeScript";
let tecnologias = ["PHP", "React JS"];
tecnologias.push("React Native"); // TypeScript identificou que a variável é string e permitiu adicionar mais uma
tecnologias.push(2025); // Pelo fato de a variável não ter number, ele não aceita e gera um erro: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(curso);

// Tipando variável:

// Type string:
let tecnologia: string; // A variável sempre vai ser string
tecnologia = "ReactNative";
tecnologia = 15; // Como a variável tecnologia foi tipada como string, ele não permite number
console.log(tecnologia);

// Type number = (int, float, hex, binary):
let valor: number; // A variável sempre vai ser number
valor = "ReactNative"; // Como a variável valor foi tipada como number, ele não permite string
valor = 15;
console.log(valor);

// Type BOOLEAN
let estaAutenticado: boolean = true;
// estaAutenticado = false;

// Convertendo boolean:
let codeStatus: number = 1;
estaAutenticado = Boolean(codeStatus); // Se for diferente de 0 é true
console.log(estaAutenticado);

// Union Type
let userId: number | string; // Permite que a variável seja do tipo number ou string.
userId = 123;
// userId = "123";
console.log(userId);

// Type any permite que você armazene qualquer coisa. NÃO É LEGAL USAR! NÃO FAZ SENTIDO USAR TS NESSE CASO.
let preçoProduto;
preçoProduto = "fdfdf";
preçoProduto = 123123;
console.log(preçoProduto);

// Type array:
let numeros: number[]; // Array de number que só permite push de number também
numeros = [1, 32, 2, 43];
numeros.push(55);
console.log("Meus Números: ", numeros);

// Type array union:
let numeroes: (string | number)[]; // Array que permite string e number
numeroes = [1, "plamundo", 2, "43"];
numeroes.push(55, "ds");
console.log("Meus Números com string: ", numeroes);

// Tupla (não possui no JS, apenas no TS):
let aluno: [string, number, string]; // Array que recebe primeiro uma string, depois um number e depois uma string, seguindo essa ordem
aluno = ["Sujeito Programador", 123123, "ola"];
console.log(aluno);

// Type Object:
let novoUsuario: object = {
  // Apenas define que essa variável é um objeto
  nome: "Matheus",
  email: "mauricio@gmail.com",
};
console.log(novoUsuario);

// Type Enum:
enum DesignColors {
  // Cria uma lista de opções que pode ser usada depois. Pode ser atribuída a texto ou a number também.
  white = "#ffffff",
  black = "#000",
}
enum StatusPermission {
  // Outro exemplo
  ADMIN,
  USER,
  SUPPORT,
}
// console.log(DesignColors.black);
console.log(StatusPermission.ADMIN);

// Type null (tem o undefined também):
let nome: string | null; // Usado apenas em alguns casos, quando pode ser null ou outra coisa
nome = "Maurício";

// Type unknown (desconhecido): quando você não sabe o tipo que vai receber. Só pode atribuir outro unknown ou any a ele.
let total: unknown;
total = 100;
total = "540";
total = { total };

// Type assertions:
let statusAtual: unknown = 1;
let mudaStatus: number = 0;
mudaStatus = statusAtual as number; // Está afirmando que statusAtual é de fato um number. Isso é um type assertion.
console.log(mudaStatus);

// Functions
function login(username: string): boolean | string {
  // Precisa tipar o parâmetro username e também o retorno da função
  let menssage = "Bem vindo " + username;
  console.log(menssage);
  return username;
}
login("MauricioLacerda");

// Arrow functions
const retornoAPI = (url: string): void => {
  console.log("URL da API: ", url);
};
retornoAPI("https://sujeitoprogramador.com");

// Valor padrão ou opcional
function cadastro(
  email: string,
  senha: string,
  nome = "Aluno", // Quando coloca um =, ele retorna o que foi passado ou, caso não passe nada, retorna "Aluno"
  idade?: number, // Quando coloca um ?, o parâmetro pode ser number ou undefined, ou seja, é opcional
): void {
  let data = { email, senha, nome, idade };
  console.log(data);
}
cadastro("teste@teste.com", "123123" /* "Maurício" */ /*, 15*/); // Escolhi não passar nada.

// Rest params em funções
function totalVendas(...vendas: number[]): void {
  // Se eu não sei quantos parâmetros vou receber, uso ... e preciso tipar para ele saber o que vai receber
  const quantidadeVendas = vendas.length;
  console.log(`Você fez ${quantidadeVendas} vendas hoje!`);
}
totalVendas(10, 30, 50, 10);

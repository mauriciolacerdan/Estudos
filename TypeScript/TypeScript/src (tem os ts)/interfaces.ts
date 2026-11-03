/* 
Interface no TypeScript é um recurso usado para definir o formato que um objeto deve ter. Ela funciona como um contrato: diz quais propriedades e tipos são obrigatórios, mas não implementa nenhuma lógica. 
*/

interface LojaProps {
  nome: string;
  endereço?: string; //Com ? vira opcional
  numero: number;
  status: boolean;
}
const BurguerK: LojaProps = {
  //a nova variavel burguerK vai seguir o padrao da LojaProps, toda a tipagem e parametros passados, e cono endereço é opcional eu nao coloquei pois tenho essa opção
  nome: "Burguer K",
  numero: 31,
  status: false,
};
//console.log(BurguerK);
//Tem como passar para uma function tambem, no caso esta desconstruida(com endereço sendo opcional):
function novaLoja({ nome, endereço, numero, status }: LojaProps): void {
  console.log(`Loja ${nome} criada com sucesso!`);
  console.log(`Numero da loja: ${numero}`);
  console.log(`Status da loja: ${status}`);
}
novaLoja({
  nome: "Red Burguer",
  numero: 31,
  status: true,
});

// Funções na interface
interface CursoProps {
  id: string;
  nome: string;
  preço: number;
  promoção: (preço: number) => void; // A propriedade deve receber uma função que recebe um number e não retorna nada.
}
// Função que será passada para a propriedade "promoção" da interface.
function mostrarPromoção(preço: number): void {
  console.log(`Promoção no curso por apenas: R$ ${preço}`);
}
const novoCurso: CursoProps = {
  id: "1",
  nome: "Curso Typescript",
  preço: 750,
  promoção: mostrarPromoção, // Passando a função mostrarPromoção para a propriedade "promoção".
};
novoCurso.promoção(350); // Executando a função armazenada na propriedade "promoção".

// Readonly
interface ProdutoProps {
  readonly id: string; // O readonly permite apenas leitura. Após criar o objeto, esse valor não pode ser alterado.
  nome: string;
  descricao: string;
}
let produto1: ProdutoProps = {
  id: "1",
  nome: "Tenis Nike",
  descricao: "Super tenis descolado",
};
// produto1.id = "123"; // Erro: a propriedade id é readonly e não pode ser alterada.
produto1.nome = "Adidas"; // Outras propriedades podem ser alteradas normalmente.
console.log(produto1);

// Array (criando arrays com a mesma tipagem)
interface TecnologiaProps {
  id: string;
  nome: string;
  descricao?: string;
}
interface NomeProps {
  tecnologia: TecnologiaProps[]; // Array que só aceita objetos do tipo TecnologiaProps.
}
let frontend: NomeProps = {
  tecnologia: [
    {
      id: "123",
      nome: "React",
      descricao: "Biblioteca para criar interfaces",
    },
    {
      id: "32",
      nome: "VueJS",
    },
  ],
};
console.log(frontend.tecnologia);

// Extends
interface JogoProps {
  readonly id: string;
  nome: string;
  descricao: string;
  plataforma: string[];
}
const left4dead: JogoProps = {
  id: "123",
  nome: "Left 4 Dead 2",
  descricao: "Jogo de ação e tiro",
  plataforma: ["PS5", "PC"],
};
// console.log(left4dead);
interface DLC extends JogoProps {
  // Herda todas as propriedades de JogoProps e adiciona novas propriedades.
  novoConteudo: string[];
  jogoOriginal: JogoProps; // Deve receber um objeto que siga a interface JogoProps.
}
const left4DeadDLC: DLC = {
  id: "90",
  nome: "Left 4 Dead - Novos Mapas",
  descricao: "4 novos mapas para jogar online",
  plataforma: ["PS5", "PC"],
  novoConteudo: ["Modo Coop", "Mais 5 horas de jogo"],
  jogoOriginal: left4dead, // Recebendo o jogo original.
};
console.log(left4DeadDLC);

// Type Alias
type Uuid = number | string | null; // Criando um apelido para reutilizar essa tipagem.
function acessar(uuid: Uuid, nome: string) {
  console.log(`ID: ${uuid} - Bem-vindo ${nome}`);
}
function logUsuario(uuid: Uuid) {
  console.log(`Conta referente ao UUID: ${uuid}`);
}
acessar(123, "Matheus");
acessar("55", "Henrique");
logUsuario("123");
// Outro exemplo:
type Moedas = "BRL" | "EUR" | "USD"; // Permite apenas uma dessas opções.
function comprarItem(moeda: Moedas) {
  console.log("Comprando com a moeda:", moeda);
}
comprarItem("EUR"); // Só aceita os valores definidos no type Moedas.

// Type Intersection
type Info = {
  id: number;
  nome: string;
  descricao?: string;
};
const produtoInfo: Info = {
  id: 123,
  nome: "Placa de Vídeo",
  // descricao: "Placa GTX 2090",
};
type Categoria = {
  slug: string;
  quantidadeProduto: number;
};
const categoria1: Categoria = {
  slug: "hardware",
  quantidadeProduto: 2,
};
type ProdutoInfo = Info & Categoria; // Une as propriedades de Info e Categoria.
const novoProduto: ProdutoInfo = {
  id: 54321,
  nome: "Teclado RGB",
  slug: "teclado-mecanico",
  quantidadeProduto: 10,
};
console.log(novoProduto);

/*
Diferença entre Interface e Type Alias

Interface:
- Define o formato de objetos, classes e funções.
- Pode usar extends para herança.
- É a opção mais utilizada para modelar objetos e Props no React.

Type Alias:
- Cria um apelido para qualquer tipo.
- Pode representar objetos, tipos primitivos, unions, intersections, tuplas, etc.
- É ideal para reutilizar tipos complexos.

Resumo:
→ Interface = contratos para objetos.
→ Type Alias = apelido para qualquer tipo.
*/

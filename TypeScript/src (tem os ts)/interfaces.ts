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

// ReadOnly

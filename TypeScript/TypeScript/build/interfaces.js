"use strict";
/*
Interface no TypeScript é um recurso usado para definir o formato que um objeto deve ter. Ela funciona como um contrato: diz quais propriedades e tipos são obrigatórios, mas não implementa nenhuma lógica.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const BurguerK = {
    //a nova variavel burguerK vai seguir o padrao da LojaProps, toda a tipagem e parametros passados, e cono endereço é opcional eu nao coloquei pois tenho essa opção
    nome: "Burguer K",
    numero: 31,
    status: false,
};
//console.log(BurguerK);
//Tem como passar para uma function tambem, no caso esta desconstruida(com endereço sendo opcional):
function novaLoja({ nome, endereço, numero, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Numero da loja: ${numero}`);
    console.log(`Status da loja: ${status}`);
}
novaLoja({
    nome: "Red Burguer",
    numero: 31,
    status: true,
});
// Função que será passada para a propriedade "promoção" da interface.
function mostrarPromoção(preço) {
    console.log(`Promoção no curso por apenas: R$ ${preço}`);
}
const novoCurso = {
    id: "1",
    nome: "Curso Typescript",
    preço: 750,
    promoção: mostrarPromoção, // Passando a função mostrarPromoção para a propriedade "promoção".
};
novoCurso.promoção(350); // Executando a função armazenada na propriedade "promoção".
// ReadOnly
//# sourceMappingURL=interfaces.js.map
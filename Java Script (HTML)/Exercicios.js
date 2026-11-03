// ============================================================
// EXERCÍCIOS DE JAVASCRIPT PURO — do básico ao avançado
// Como rodar: no terminal, `node Exercicios.js` (Node 18+)
// Regra: faça UM por vez. Resolva sem olhar anotações primeiro,
// depois consulte só se travar. Não use IA para resolver, só para tirar dúvida.
// Descomente os console.log de cada exercício para testar.
// ============================================================


// ================= NÍVEL 1: BÁSICO (lógica e fluxo) =================

// 1) Par ou ímpar
// Crie parOuImpar(n) que retorna "par" ou "ímpar". Use operador ternário e %.
function parOuImpar(n) {
  // seu código
}
// console.log(parOuImpar(4)); // "par"
// console.log(parOuImpar(7)); // "ímpar"

// 2) Tabuada
// Crie tabuada(n) que imprime de n x 1 até n x 10 usando for.
// Exemplo de saída: "3 x 1 = 3"
function tabuada(n) {
  // seu código
}
// tabuada(3);

// 3) FizzBuzz
// Imprima de 1 a 30. Múltiplo de 3 -> "Fizz", de 5 -> "Buzz", de ambos -> "FizzBuzz".
// Dica: teste o "ambos" primeiro.
function fizzBuzz() {
  // seu código
}
// fizzBuzz();

// 4) Contar vogais
// Crie contarVogais(texto) que retorna quantas vogais existem (ignore maiúscula/minúscula).
// Dica: toLowerCase() e includes().
function contarVogais(texto) {
  // seu código
}
// console.log(contarVogais("Maurício")); // 4

// ================= NÍVEL 2: INTERMEDIÁRIO (arrays e objetos) =================

const usuarios = [
  { nome: "maria", idade: 19 },
  { nome: "joao", idade: 15 },
  { nome: "pedro", idade: 16 },
  { nome: "ana", idade: 30 },
];

// 5) filter + map
// Crie nomesMaioresDeIdade(lista) que retorna só os NOMES de quem tem 18+.
// Esperado com a lista acima: ["maria", "ana"]
function nomesMaioresDeIdade(lista) {
  // seu código
}
// console.log(nomesMaioresDeIdade(usuarios));

// 6) reduce
// Crie totalCarrinho(itens) que soma preco * quantidade de cada item.
const carrinho = [
  { produto: "camiseta", preco: 50, quantidade: 2 },
  { produto: "tênis", preco: 200, quantidade: 1 },
  { produto: "meia", preco: 10, quantidade: 3 },
];
function totalCarrinho(itens) {
  // seu código
}
// console.log(totalCarrinho(carrinho)); // 330

// 7) Frequência de palavras (objeto como contador)
// Crie contarPalavras(frase) que retorna um objeto { palavra: quantidade }.
// Exemplo: "oi oi tchau" -> { oi: 2, tchau: 1 }
// Dica: split(" ") e um for...of.
function contarPalavras(frase) {
  // seu código
}
// console.log(contarPalavras("oi oi tchau oi"));

// 8) Spread e desestruturação (imutabilidade, igual ao useState)
// Crie atualizarIdade(usuario, novaIdade) que retorna um NOVO objeto com a idade alterada,
// SEM modificar o original. Depois crie removerUsuario(lista, nome) que retorna
// uma NOVA lista sem aquele usuário (use filter).
function atualizarIdade(usuario, novaIdade) {
  // seu código
}
function removerUsuario(lista, nome) {
  // seu código
}
// const original = { nome: "maria", idade: 19 };
// const novo = atualizarIdade(original, 20);
// console.log(original.idade, novo.idade); // 19 20
// console.log(removerUsuario(usuarios, "joao"));

// ================= NÍVEL 3: AVANÇADO (o que mais cai em React Native) =================

// 9) Closure
// Crie criarContador() que retorna um objeto com 3 funções: incrementar(), decrementar(), valor().
// O número NÃO pode ficar numa variável global: ele fica "preso" dentro de criarContador.
function criarContador() {
  // seu código
}
// const c = criarContador();
// c.incrementar(); c.incrementar(); c.decrementar();
// console.log(c.valor()); // 1

// 10) Async/await + API
// Crie buscarNomes() que:
//  - faz fetch em https://jsonplaceholder.typicode.com/users
//  - converte para JSON
//  - retorna só um array com os nomes
//  - usa try/catch e, no erro, retorna []
// Bônus: imprima também user.address?.city ?? "sem cidade" de cada usuário.
async function buscarNomes() {
  // seu código
}
// buscarNomes().then(console.log);

// 11) Debounce simples (setTimeout + closure)
// Crie debounce(fn, ms) que retorna uma função que só executa fn
// se ficar ms milissegundos sem ser chamada de novo. (Usado em campos de busca.)
// Dica: guarde o id do setTimeout e use clearTimeout.
function debounce(fn, ms) {
  // seu código
}
// const buscar = debounce((t) => console.log("Buscando:", t), 500);
// buscar("a"); buscar("ab"); buscar("abc"); // deve imprimir só "Buscando: abc"

// 12) MINI PROJETO FINAL: gerenciador de tarefas em memória
// Sem HTML. Tudo no console. Crie funções PURAS (não alteram a lista original):
//   adicionarTarefa(lista, titulo)   -> nova lista com { id, titulo, concluida: false }
//   concluirTarefa(lista, id)        -> nova lista com a tarefa marcada como concluída
//   removerTarefa(lista, id)         -> nova lista sem a tarefa
//   filtrarTarefas(lista, status)    -> "todas" | "pendentes" | "concluidas"
//   salvar(lista) / carregar(texto)  -> usando JSON.stringify / JSON.parse
// Teste encadeando as funções e imprimindo o resultado.
// Se você fizer esse, já domina o núcleo de JS que o React Native exige.

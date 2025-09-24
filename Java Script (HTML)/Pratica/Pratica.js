var lista = ["computador", "telefone", "mause", "teclado"];

lista.splice(2);

console.log(lista);

function buscando() {
  var busca = lista.find((elemento) => elemento === "computador");
  if (busca) {
    document.write(busca + " esta na lista");
  } else {
    document.write("nao encontrado");
  }
}
buscando();

lista.splice(1);

var data = new Date();
var mes = data.getMonth();

console.log(mes);

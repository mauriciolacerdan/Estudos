//======================= Recebendo API =======================
// Mais exeplos:  C:\Users\mauri\Desktop\Estudos\React Native\Desafios-Praticas\Pratica-provisorio\src\Conversor\Api.js

import axios from "axios"; //precisa instalar axios(axios faz a requisição. existem outras bibliotecas para fazer a requisição)

// https://sujeitoprogramador.com/r-api/?api=filmes

const api = axios.create({
  //precisa chamar a async(nesse caso ela ta no Filme)
  //se for api local tem que ser com o ip do computador
  baseURL: "https://sujeitoprogramador.com/",
});

export default api;

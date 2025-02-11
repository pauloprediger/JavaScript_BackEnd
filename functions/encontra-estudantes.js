const estudantes = require("../json/estudantes.json");


function fetchDadosEstudantes(lista, chave, valor) {
  // Retorna o primeiro estudante que encontrar
  return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = fetchDadosEstudantes(estudantes, "nome", "Olva");
console.log(estudanteEncontrado);
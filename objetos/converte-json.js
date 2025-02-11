const estudante = require('../json/estudante.json');

// Convertendo um objeto para uma string JSON
const stringEstudante = JSON.stringify(estudante);

// Convertendo uma string JSON para um objeto
const objetoEstudante = JSON.parse(stringEstudante);

// Exibindo os resultados
console.log(stringEstudante);
console.log(typeof stringEstudante);

console.log(objetoEstudante);
console.log(typeof objetoEstudante);
// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

const  juntaArray = ((array, array2, array3) => [...array, ...array2, ...array3]);

const array = [0.47, 0.89, 0.23, 0.65, 0.12];
const array2 = [0.56, 0.34, 0.78, 0.91, 0.42];
const array3 = [0.88, 0.29, 0.54, 0.67, 0.73];

console.log(juntaArray(array, array2, array3));

// 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [1, 2, 3, 4, 5, 6, 8, 9, 10];

const soma = valores.reduce((contador, numero) => contador + numero, 0);
console.log(soma);

//3 - Considere duas listas de cores:

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

//Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final

const coresListaCompleta = [...coresLista1, ...coresLista2];
const coresSemDuplicatas = [... new Set(coresListaCompleta)];
console.log(coresSemDuplicatas);

//4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

const retornaPares = valores.filter(numero => numero % 2 === 0);
console.log(retornaPares);

//5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

function verificaMultiploTresMaiorCinco(array) {
    const numerosFiltrados = array.filter(numero => (numero % 3 == 0 && numero > 5))
    return numerosFiltrados;
}

console.log(verificaMultiploTresMaiorCinco(valores));

//6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function somaNumeros(array){
    return array.reduce((contador, indice) => contador + indice, 0);
}

console.log(somaNumeros(valores));
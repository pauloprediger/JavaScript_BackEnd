const alunos = [
    "João",
    "Maria",
    "Pedro",
    "Ana",
    "Carlos",
    "Laura"
];

const medias = [
    7.5,
    8.2,
    6.9,
    9.0,
    5.8,
    8.5
];

const lista = [alunos, medias]

function verificaAluno(nomeAluno) {
    if (!(lista[0].includes(nomeAluno))){
        console.log('Nome não foi encontrado')
    } else {
        let indice = lista[0].indexOf(nomeAluno);
        console.log(`Média do aluno ${nomeAluno} é ${lista[1][indice]}`);
    } 
}

verificaAluno('Carlos');
verificaAluno('Paulo');

let arrayForOf = [1, 2, 3, 4, 5, 6, 7, 8]

for(numero of arrayForOf){
    console.log(numero)
}

function imprimeArray(lista) {
    for (let i = 0; i < lista.length; i++){
        console.log(`A posição ${i} tem o elemento ${lista[i]}`);
    }
}

imprimeArray(arrayForOf);

function somaElementosArray(elementos) {
    const soma = elementos.reduce((acumulador, elementos) => acumulador + elementos, 0);
    console.log(soma);
}

somaElementosArray(arrayForOf);

// 4. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

function maiorMenor(elementos) {
    let maior = elementos[0];
    let menor = elementos[0];
    for (let i = 1; i < elementos.length; i++) {
        if (elementos[i] < menor) {
            menor = elementos[i]; 
        } else if (elementos[i] > maior) {
            maior = elementos[i];
        }
    }
    console.log(menor, maior);
}

maiorMenor(arrayForOf);
maiorMenor([34, 7, 23, 56, 12, 89, 1, 45, 67, 21, 10, 90, 38, 82, 15, 28, 54, 73, 99, 44]);


// 5. Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

function exibePares(numeros){
        for(numero of numeros) {
            if (numero % 2 == 0){
                console.log(numero);
            } 
        }
}

exibePares(numeros);

//6. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

function calculaMedia(numeros) {
    let contador = 0;
    let media;
    for(let i = 0; i <numeros.length; i++)  {
        contador += numeros[i];
    }
    return media = contador / numeros.length;
}

console.log(calculaMedia(numeros));

//7. Adicionar um ponto extrea na média final dos alunos [10, 9.5, 8, 7, 6]

const notaAlunos = [10, 9.5, 8, 7, 6];

notaAlunos.forEach((nota, i, array) => {
    array[i] = nota + 1 >= 10 ? nota = 10 : nota + 1;
});

console.log(notaAlunos);

// versão com map

const notasAtualizadas = notaAlunos.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);

console.log(notasAtualizadas);

//8. Torne todos os itens em maíusculas.

let nomes = ['ana Julia', 'Caio vinicius', 'BIA siva'];

const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log(nomesMaiusculos);

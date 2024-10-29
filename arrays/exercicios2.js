// 1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const elementos = [1, "texto", true, null, undefined, { nome: "objeto" }, [1, 2, 3], 45.6, "outro texto", false];

elementos.forEach((element, indice) => {
    console.log(`${indice}: ${element}`)
});

//2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

const numeros = [1, 2, 3, 4, 5];

function executaOperacaoEmArray(array, callback) {
    array.forEach(numero => {
        callback(numero);
    })
}

function dobra(num) {
    console.log(num * 2);
}

executaOperacaoEmArray(numeros, dobra);

//3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

function verifica(array, num) {
    if (num in array) {
        let index = array.indexOf(num);
        console.log(`Valor ${num} foi encontrado na posição ${index}`);
    } else {
        console.log(`Valor não encontrado`)
    }
}

verifica(numeros, 4);
verifica(numeros, 6);

//4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.

const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];

// Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

const todosAlunos = nomesTurmaA.concat(nomesTurmaB);
let procurado = 'Ana Souza';

const achou = todosAlunos.find(nome => nome === procurado
);

achou ? console.log(`${procurado} encontrado(a)!`) : console.log('Aluno não encontrado');

//5 - Considere um array de números inteiros.

let numeros2 = [6, 9, 12, 15, 18, 21];

//Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

numeros2.forEach(numero => {
    console.log(numero * 3);
});

console.log(numeros2.indexOf(18));

// Utilizando método filter

const usuarios = [
    { nome: "Ana", idade: 17 },
    { nome: "João", idade: 20 },
    { nome: "Maria", idade: 22 },
    { nome: "Renata", idade: 18 }
];

const maioresDeIdade = usuarios.filter(usuario => usuario.idade >= 18);

console.log(maioresDeIdade);

const nomesPoucasLetras = usuarios.filter(usuario => usuario.nome.length <= 4);

console.log(nomesPoucasLetras);
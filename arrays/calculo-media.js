const notas = [10, 6.5, 8, 7.5]

const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
const media = soma / notas.length;

console.log(media.toFixed(2));

notas.push(7);
console.log(notas);

console.log(notas.pop());
console.log(notas);

const nomes = [
    "Alice",
    "Bruno",
    "Carla",
    "Daniel",
    "Eduarda",
    "Felipe",
    "Gabriela",
    "Henrique",
    "Isadora",
    "Júlio",
    "Karla",
    "Leonardo",
    "Mariana",
    "Nicolas",
    "Olívia",
    "Paulo",
    "Quésia",
    "Rafael",
    "Sofia",
    "Tiago"
];

const meio = Math.ceil(nomes.length / 2);

const primeiraMetade = nomes.slice(0, meio);
const segundaMetade = nomes.slice(meio);

console.log(primeiraMetade);
console.log(segundaMetade);

const listaNomes = ['Joao', 'ana', 'caio', 'lara', 'marjorie', 'leo'];

listaNomes.splice(1, 2, 'Rodrigo');

console.log(listaNomes);

let sala1 = ['evaldo', 'camis'];
let sala2 = ['paulo', 'julia'];

sala1 = [...sala1, ...sala2];

console.log(sala1);

const alunos = ['Joao', 'Julia', 'Caio', 'Ana'];
const mediaAlunos = [10, 8, 7.5, 9];

const listaDeListas = [alunos, mediaAlunos];

console.log(listaDeListas);

console.log(listaDeListas[0][0], listaDeListas[1][0]);

function concatena (primArray, segundaArray) {
    return primArray.concat(segundaArray);
}

const array1 = [7, 14, 23];
const array2 = [5, 18, 32];

console.log(concatena(array1, array2))

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

parteNumeros = numeros.slice(3, 7);
console.log(parteNumeros);

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
frutas.splice(2, 2, 'kiwi', 'Pessego');
console.log(frutas);

const menuPrincipal = [
    "Filé Mignon com Risoto de Parmesão",
    "Salmão Grelhado com Purê de Batatas",
    "Spaghetti ao Molho de Tomate e Manjericão",
    "Frango à Parmegiana com Arroz e Batatas Fritas",
    "Risoto de Cogumelos e Aspargos"
];

const menuDeSobremesas = [
    "Cheesecake de Frutas Vermelhas",
    "Petit Gâteau com Sorvete de Baunilha",
    "Tiramisu Clássico",
    "Mousse de Chocolate Belga",
    "Pudim de Leite Condensado"
];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log(menuCompleto);

let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}

console.log('Matriz de duas dimensões:');
console.log(matriz);
matriz.forEach(row => console.log(row))

const texte = 'texto';
const logico = true;
const numero  = 5;

console.log(texte, logico, numero);

const nome = 'Paulo';
const sobrenome = 'Prediger';
let nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);
console.log(`${nome} ${sobrenome}`);

let qualquerVar = 6;
console.log(qualquerVar);
qualquerVar = 7;
console.log(qualquerVar);

let chovendo;
chovendo = false;
chovendo ? console.log('Leve um guarda-chuva') : console.log('');

const frase = 'Eu amo programação em JavaScript';
console.log(frase.toUpperCase());
console.log(frase.length);

const var1 = null; 
let var2;

console.log(var1, var2);

const x = 1;
const y = true;
const z = 'paulo';

console.log(`${x} ${y} ${z}`);

let a = 'Paulo Prediger';
let b = 898;

console.log(Number(a));
console.log(b.toString());

let saldo = 1000, deposito = 50, saque = 90;
let operacao = (saldo + deposito) - saque;
console.log(operacao);

let numero1 = 9;
numero1 % 2 == 0 ? console.log('Par') : console.log('Impar')

let permissao, logado;

permissao = false, logado = false;

if (permissao && logado) {
    console.log('Tem autorização')
} else {
    console.log('Não tem autorização')
}

if (permissao || logado) {
    console.log(true);
} else {
    console.log(false);
}

function saudacao(nome) {
    return `Olá ${nome}`;
}

console.log(saudacao('Paulo'));

function verificadeMaiorDeIdade(idade) {
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}

console.log(verificadeMaiorDeIdade(18));
console.log(verificadeMaiorDeIdade(17));

function palindromo(palavra) {
    let palavraInvertida = palavra.split('').reverse().join('');
    return palavra === palavraInvertida ? true : false;
}

console.log(palindromo('arara'));
console.log(palindromo('tatu'));

function verificaMaior(num1, num2, num3) {
    let maior = num1 > num2 ? num1 : num2;
    return num3 > maior ? num3 : maior;
}

console.log(verificaMaior(5, 8, 10));
console.log(verificaMaior(20, 8, 10));
console.log(verificaMaior(5, 12, 10));
/* 1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

titulo (string): título do livro.
autor (string): nome do autor do livro.
anoPublicacao (number): ano de publicação do livro.
genero (string): gênero do livro.
No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console. */

const objLivro = {
    titulo: "",
    autor: "",
    anoPublicacao:"",
    genero: ""
}

objLivro.titulo = ('Senhor do Aneis');
objLivro['autor'] = 'tolkien';
objLivro.anoPublicacao = 1910;
objLivro.genero = 'Fantasia'

console.log(objLivro);


/* 2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero. 
Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.*/

let dataAtual = new Date().getFullYear();
console.log(dataAtual);

objLivro.idadePublicacao = dataAtual - objLivro.anoPublicacao;

console.log(objLivro);

objLivro.avaliacao = null;

objLivro.avaliacao = 'Muito bem'

console.log(objLivro.avaliacao);


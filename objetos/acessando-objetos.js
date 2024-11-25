const estudante = {
    nome: 'Paulo Prediger',
    idade: '25',
    cpf: '03612481385',
    turma: 'JavaScript'
}

estudante.nome;

// Formar de acesasr um objeto, sendo com ponto, ou com colchetes [''];
function exibeInfoEstudante(objtEstudante, infoEstudante) {
    return objtEstudante[infoEstudante];
}

let pop = 'nome';

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));

console.log(estudante[pop]);

// Adiconando propriedades a objetos.

estudante.telefone = '5491071342';

console.log(estudante.telefone);

// Alterando objetos

estudante.nome = 'Ingrid Reinhardt Schenkel'
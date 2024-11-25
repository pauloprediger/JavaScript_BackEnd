const objetoEstudante = {
    nome: 'Paulo Prediger',
    idade: 25,
    cpf: '03836612003',
    turma: 'JavaScript',
    bolsista: 'true',
    telefone: [5491071183, 5491830360],

}

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(objetoEstudante.pet);
console.log(objetoEstudante['pet']);

console.log(objetoEstudante['nome']);
console.log(objetoEstudante['cpf']);

console.log(exibeInfoEstudante(objetoEstudante, 'nome'));
console.log(exibeInfoEstudante(objetoEstudante, 'cpf'));



const objetoEstudante = {
    nome: 'Paulo Prediger',
    idade: 25,
    cpf: '03836612003',
    turma: 'JavaScript'
}

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(objetoEstudante['nome']);
console.log(objetoEstudante['cpf']);

console.log(exibeInfoEstudante(objetoEstudante, 'nome'));
console.log(exibeInfoEstudante(objetoEstudante, 'cpf'));
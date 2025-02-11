const estudantes = require("../json/estudantes.json");

function filterDadosEstudantes(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    });
}

const listaEnderecosIncompletos = filterDadosEstudantes(estudantes, "cep");
console.log(listaEnderecosIncompletos);
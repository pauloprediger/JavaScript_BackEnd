const estudantes = require("../json/estudantes.json");

function ordenarEstudantes(lista, propriedade) {
    return lista.sort((estudanteA, estudanteB) => {
        if (estudanteA[propriedade] < estudanteB[propriedade]) return -1;
        if (estudanteA[propriedade] > estudanteB[propriedade]) return 1;
        return 0;
    });
}

const listaOrdenada = ordenarEstudantes(estudantes, "nome");
console.log(listaOrdenada);
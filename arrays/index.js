const arrayNumeros = [1, 2, 3, 4];
const arrayNumerosMultiplicados = arrayNumeros.map(multiplicaPorDez);
console.log(arrayNumerosMultiplicados);

function multiplicaPorDez (num) {
    return num * 10;
}
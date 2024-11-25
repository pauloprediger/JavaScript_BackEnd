const calculadora = {
    metodoSoma: function soma(num1, num2) {
        return num1 + num2; // Devolve a soma
    },
    metodoSubtracao: function subtracao(num1, num2) {
        return num1 - num2; // Devolve a subtração
    },
    metodoDivisao: function divisao(num1, num2) {
        return num1 / num2; // Devolve a divisão
    },
    metodoMultiplicacao: function multiplicacao(num1, num2) {
        return num1 * num2; // Devolve a multiplicação
    },
    metodoCalculaMedia: function media(arrayNumeros){
        return (arrayNumeros.reduce((acumulador, numero) => acumulador + numero, 0) / arrayNumeros.length).toFixed(2)
    }
};
console.log(calculadora.metodoSoma(8,8));
console.log(calculadora.metodoSubtracao(8,8));
console.log(calculadora.metodoDivisao(8,8));
console.log(calculadora.metodoMultiplicacao(8,8))

arrayDeNumeros = [8, 9 , 5]

console.log(calculadora.metodoCalculaMedia(arrayDeNumeros));
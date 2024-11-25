/* 1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

Desempenho excelente: média >= 9
Bom desempenho: 7.5 <= média entre 7.6 e 8.9
Desempenho regular: 6 <= média entre 6 e 7.5
Desempenho insuficiente: média < 6
Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa. */

const objPessoa = {
    nome: 'Paulo',
    notas: [6, 4 , 7],
    metodoCalcularMediasNotas : function calcularMediaNotas(){
        const media = this.notas.reduce((contador, valor) => contador + valor, 0) / this.notas.length;
        if (media < 6) {
            return 'Desempenho insuficiente'
        } else if (media <= 7.5) {
            return 'Desempenho regular'
        } else if (media <= 8.9) {
            return 'Bom desempenho'
        } else {
            return 'Desempenho excelente'
        }
    }
}

console.log(objPessoa.metodoCalcularMediasNotas())

/* 2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

marca (string): marca do carro.
modelo (string): modelo do carro.
ano (number): ano de fabricação do carro.
cor (string): cor do carro.
Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.

Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor. */

const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    cor: 'Prata'
};
carro.cambio = "Automático";
carro.kmRodados = 5000;

for (propriedade in carro){
    console.log(`${propriedade}: ${carro[propriedade]}`)
}
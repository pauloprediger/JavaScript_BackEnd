const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    cor: 'Prata',
    cambio: 'Automático',
    kmRodados: 5000,
    ligado: false,
   
    metodoLigar: function ligar(){
        if (this.ligado) {
            return 'O carro já está ligado';
        } else {
            this.ligado = true; // Atualiza o estado do carro para ligado
            return 'O carro foi ligado';
        }
    },
    metodoDesligar: function desligar(){
        if(this.ligado === false){
            return 'O carro já está desligado'
        } else {
            this.ligado = false;
            return 'O carro foi desligado';
        }
    },
    metodoObterDetalhes: function obterDetalhes() {

        const detalhes = Object.entries(this)
            .filter(([key, value]) => typeof value !== 'function') 
            .map(([key, value]) => `${key}: ${value}`) 
            .join(', '); 
        console.log(detalhes)
        return detalhes; // Retorna a string de detalhes
    },
};

carro.metodoObterDetalhes();
console.log(carro.metodoLigar());
carro.metodoObterDetalhes();
console.log(carro.metodoLigar());

Object.defineProperty(carro, 'placa', {
    value: '5AS846',
    enumerable: false
})

console.log(carro['placa']);
console.log(Object.keys(carro));
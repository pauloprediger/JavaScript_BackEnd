const contaBancaria = {
    titular : 'João',
    saldo : 1000,
    metodoDepositar: function depositar (valorDeposito){
        return this.saldo += valorDeposito;
    },
    metodoSacar: function sacar(valorSaque){
        return this.saldo >= valorSaque ?  this.saldo -= valorSaque : console.log('Valor invalido');
    },
}

const cliente = {
    nome: 'João',
    conta: contaBancaria
}
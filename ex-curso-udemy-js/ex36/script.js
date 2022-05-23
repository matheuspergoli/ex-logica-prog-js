class Conta {
  constructor(saldo) {
    this.saldo = saldo
  }

  deposito(valor) {
    this.saldo += valor
  }

  saque(valor) {
    this.saldo -= valor 
  }
}

const minhaConta = new Conta(5000)

minhaConta.deposito(5000)
minhaConta.saque(5000)
console.log(minhaConta.saldo)
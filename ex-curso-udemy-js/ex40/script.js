class Conta {
  constructor(saldoCC, saldoCP, juros) {
    this.saldoCC = saldoCC
    this.saldoCP = saldoCP
    this.juros = juros
  }

  deposito(valor) {
    this.saldoCC += valor
  }

  saque(valor) {
    this.saldoCC -= valor
  }

  transferenciaCP(valor) {
    this.saldoCC -= valor
    this.saldoCP += valor
  }

  transferenciaCC(valor) {
    this.saldoCP -= valor
    this.saldoCC += valor
  }

  jurosDeAniversario() {
    let juros = this.saldoCP * this.juros / 100
    this.saldoCP += juros
  }
}

class ContaEspecial extends Conta {
  constructor(saldoCC, saldoCP, juros) {
    super(saldoCC, saldoCP, juros * 2)
  }
}

const conta = new Conta(1000, 5000, 1)

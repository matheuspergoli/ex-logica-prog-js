class Veiculo {
  constructor(marca, cor, gasolinaRestante) {
    this.marca = marca
    this.cor = cor
    this.gasolinaRestante = gasolinaRestante
  }

  dirigir() {
    this.gasolinaRestante -= 10
  }

  abastecer(valor) {
    this.gasolinaRestante += valor
  }
}

const carro = new Veiculo('Fiat', 'Preto', 100)

console.log(carro)
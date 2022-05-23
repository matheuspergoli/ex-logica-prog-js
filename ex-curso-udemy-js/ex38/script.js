class Localidade {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua
    this.bairro = bairro
    this.cidade = cidade
    this.estado = estado
  }

  set attRua(valor) {
    this.rua = valor
  }

  set attBairro(valor) {
    this.bairro = valor
  }

  set attCidade(valor) {
    this.cidade = valor
  }

  set attEstado(valor) {
    this.estado = valor
  }
}

const pessoa1 = new Localidade('Sua Marçal', 'Jardim Helena', 'São Paulo', 'São Paulo')
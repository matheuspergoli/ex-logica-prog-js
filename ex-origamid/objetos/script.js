// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const minhaPessoa = {
  nome: 'Matheus',
  sobrenome: 'Pergoli',
  idade: 22,
  sexo: 'Masculino'
}

// Crie um método no objeto anterior, que mostre o seu nome completo
minhaPessoa.meuNome = function() {
  return `${this.nome} ${this.sobrenome}`
}
console.log(minhaPessoa.meuNome())

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,

  latir() {
    return `${this.raca} late ao ver um homem`
  }
}
console.log(cachorro.latir())
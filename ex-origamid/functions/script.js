// Crie uma função para verificar se um valor é Truthy
function verificarTipoDeDado(valor) {
  return !!valor
}
console.log(verificarTipoDeDado('1'))
console.log(verificarTipoDeDado(''))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(valor) {
  return valor * 4
}
console.log(perimetroQuadrado(5))
console.log(perimetroQuadrado(3))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return nome + ' ' + sobrenome
}
console.log(nomeCompleto('Matheus', 'Pergoli'))

// Crie uma função que verifica se um número é par
function isPar(numero) {
  return numero % 2 === 0 ? `${numero} É Par` : `${numero} NÃO É Par`
}
console.log(isPar(6))
console.log(isPar(9))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(valor) {
  return `"${valor}" é um dado do tipo ${typeof valor}`
}
console.log(tipoDeDado(true))
console.log(tipoDeDado(''))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
window.addEventListener('scroll', () => {
  console.log('Matheus Pergoli')
})

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

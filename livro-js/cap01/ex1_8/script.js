const dias = Number(prompt('Digite a quantidade de dias da viagem: '))
const horas = Number(prompt('Digite a quantidade de horas da viagem: '))
const viagem = (dias * 24) + horas
alert(`Sua viagem terá a duração de ${viagem} horas.`)
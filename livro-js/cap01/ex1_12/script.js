const primeiraNota = Number(prompt('Digite a primeira nota: '))
const segundaNota = Number(prompt('Digite a segunda nota: '))
const media = (primeiraNota + segundaNota) / 2
alert(`1° Nota: ${primeiraNota.toFixed(1)} \n2° Nota: ${segundaNota.toFixed(1)} \nMédia: ${media.toFixed(1)}`)
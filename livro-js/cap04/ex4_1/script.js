const form = document.querySelector('form')
const resp1 = document.querySelector('#output-um')
const resp2 = document.querySelector('#output-dois')

function calculaMedia(event) {
  const nomeAluno = form.querySelector('#nome').value
  const primeiraNota = Number(form.querySelector('#nota1').value)
  const segundaNota = Number(form.querySelector('#nota2').value)
  const media = (primeiraNota + segundaNota) / 2

  resp1.innerText = `Média das Notas ${media.toFixed(2)}`

  if (media >= 6) {
    resp2.innerText = `Parabéns ${nomeAluno}! Você foi Aprovado(a)`
    resp2.style.color = 'green'
  } else if (media >= 4) {
    resp2.innerText = `Atenção ${nomeAluno}. Você está em Exame`
    resp2.style.color = 'blue'
  } else {
    resp2.innerText = `Ops ${nomeAluno}... Você foi Reprovado(a)`
    resp2.style.color = 'red'
  }

  event.preventDefault()
}

form.addEventListener('submit', calculaMedia)
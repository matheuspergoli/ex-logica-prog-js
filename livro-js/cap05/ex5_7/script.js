const form = document.querySelector('form')
const resp = document.querySelector('#output-um')

function contar(event) {
  event.preventDefault()

  anos++

  const numChinchilas = Number(form.querySelector('#numero-chinchilas').value)
  const numAnos = Number(form.querySelector('#numero-anos').value)

  let total = numChinchilas
  let resposta = ''

  for (let i = 1; i <= numAnos; i++) {
    resposta += `${i}° Ano: ${total} Chinchilas\n`
    total *= 3
  }

  resp.innerText = resposta
}

form.addEventListener('submit', contar)
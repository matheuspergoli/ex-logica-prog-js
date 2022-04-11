const form = document.querySelector('form')
const resp = document.querySelector('#output-um')

function calculaPeso(event) {
  const nome = form.querySelector('#nome').value
  const isMasculino = form.querySelector('#masculino').checked
  const altura = Number(form.querySelector('#altura').value)

  const peso = isMasculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)

  resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)}`

  event.preventDefault()
}

form.addEventListener('submit', calculaPeso)
form.addEventListener('reset', () => {
  resp.innerText = ''
})
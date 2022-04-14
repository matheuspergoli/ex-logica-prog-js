const form = document.querySelector('form')
const resp = document.querySelector('#output-um')

function mostrarTabuada(event) {
  event.preventDefault()

  const numero = Number(form.querySelector('#numero').value)

  resp.innerText = ''

  for (let i = 1; i <= 10; i++) {
    resp.innerText += `${numero} x ${i} = ${numero * i}\n`
  }
}

form.addEventListener('submit', mostrarTabuada)
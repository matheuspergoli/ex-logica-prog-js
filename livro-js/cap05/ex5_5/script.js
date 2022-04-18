const form = document.querySelector('form')
const resp = document.querySelector('#output-um')

function contarEstrelas(event) {
  event.preventDefault()

  const numero = Number(form.querySelector('#numero').value)

  for (let i = 1; i <= numero; i++) {
    resp.innerText += `_*_`
  }
}

form.addEventListener('submit', contarEstrelas)
const form = document.querySelector('form')
const resp = document.querySelector('#output-um')

function contarEstrelas(event) {
  event.preventDefault()

  const numero = Number(form.querySelector('#numero').value)

  const arr = []

  for (let i = 1; i <= numero; i++) {
    arr.push('*')
  }

  const str = arr.join('-')
  resp.innerText = str
}

form.addEventListener('submit', contarEstrelas)
const form = document.querySelector('form')
const resp = document.querySelector('#output-um')

function decrescerNumero(event) {
  event.preventDefault()

  const numero = Number(form.querySelector('#numero').value)

  let resposta = `Entre ${numero} e 1: `

  for (let i = numero; i > 0; i--) {
    resposta = resposta + i + ', '
  }

  resp.innerText = resposta
}

form.addEventListener('submit', decrescerNumero)
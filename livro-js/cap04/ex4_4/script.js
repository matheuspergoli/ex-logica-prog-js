const form = document.querySelector('form')
const resp = document.querySelector('#output-um')

function raizQuadrada(event) {
  const numero = Number(form.querySelector('#numero').value)

  const raiz = Math.sqrt(numero)

  if (Number.isInteger(raiz)) {
    resp.innerText = `Raiz: ${raiz}`
  } else {
    resp.innerText = `Não há raiz exata para ${numero}`
  }

  event.preventDefault()
}

form.addEventListener('submit', raizQuadrada)
const form = document.querySelector('form')
const resp = document.querySelector('#output-um')

function verificar(event) {
  event.preventDefault()

  const numero = Number(form.querySelector('#numero').value)

  resp.innerText = numero % 2 === 0 ? `${numero} é Par` : `${numero} é Ímpar`

  // if (numero % 2 === 0) {
  //   resp.innerText = `${numero} é Par`
  // } else {
  //   resp.innerText = `${numero} é Ímpar`
  // }
}

form.addEventListener('submit', verificar)
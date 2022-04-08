const form = document.querySelector('form')
const resp = document.querySelector('#output-um')

form.addEventListener('submit', e => {
  const quilo = Number(form.quilo.value)
  const consumo = Number(form.consumo.value)

  const valor = (quilo / 1000) * consumo
  resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`

  e.preventDefault()
})
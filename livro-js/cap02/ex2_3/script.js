const form = document.querySelector('form')
const resp1 = document.querySelector('#output-um')
const resp2 = document.querySelector('#output-dois')
const resp3 = document.querySelector('#output-tres')

form.addEventListener('submit', e => {
  const nomeVeiculo = form.veiculo.value
  const precoVeiculo = Number(form.preco.value)

  const entradaVeiculo = precoVeiculo * 0.50
  const parcelaVeiculo = (precoVeiculo * 0.50) / 12

  resp1.innerText = `Promoção: ${nomeVeiculo}`
  resp2.innerText = `Entrada de R$: ${entradaVeiculo.toFixed(2)}`
  resp3.innerText = `+12x de R$: ${parcelaVeiculo.toFixed(2)}`

  e.preventDefault()
})
const form = document.querySelector('form')
const resp1 = document.querySelector('#output-um')
const resp2 = document.querySelector('#output-dois')

form.addEventListener('submit', e => {
  const produto = form.produto.value
  const preco = Number(form.preco.value)

  const desconto = preco * 0.50
  const total = (preco * 2) + desconto

  resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`
  resp2.innerText = `O 3° produto custa apenas R$: ${desconto.toFixed(2)}`
  e.preventDefault()
})
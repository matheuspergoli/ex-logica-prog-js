const form = document.querySelector('form')
const resp1 = document.querySelector('#output-um')
const resp2 = document.querySelector('#output-dois')

form.addEventListener('submit', e => {
  const medicamento = form.medicamento.value
  const preco = Number(form.preco.value)

  const promocao = Math.floor(preco) * 2
  
  resp1.innerText = `Promoção de ${medicamento}`
  resp2.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`
  
  e.preventDefault()
})
const form = document.querySelector('form')
const resp1 = document.querySelector('#output-um')
const resp2 = document.querySelector('#output-dois')

let numContas = 0
let valorTotal = 0

function criaElemento(element, text) {
  const elemento = document.createElement(element)
  elemento.innerText = text
  return elemento
}

function appendElement(element) {
  resp1.appendChild(element)
}

function contas(event) {
  event.preventDefault()

  const conta = form.querySelector('#conta').value
  const valor = Number(form.querySelector('#numero').value)

  numContas++
  valorTotal += valor

  const elemento = criaElemento('p', `${conta} - R$: ${valor.toFixed(2)}`)
  appendElement(elemento)
  resp2.innerText = `${numContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}`

  form.conta.value = ''
  form.numero.value = ''
  form.conta.focus()
}

form.addEventListener('submit', contas)
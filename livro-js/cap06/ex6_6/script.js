const form = document.querySelector('form')
const divAviso = document.querySelector('.div-aviso')
const divNumeros = document.querySelector('.div-numeros')
const btnOrdenar = document.querySelector('[type="button"]')

const numeros = []

function handleSubmit(event) {
  event.preventDefault()

  const numero = Number(form.numero.value)
  numeros.push(numero)

  form.reset()
  form.numero.focus()

  
}
form.addEventListener('submit', handleSubmit)
const form = document.querySelector('form')
const divAviso = document.querySelector('.div-aviso')
const divNumeros = document.querySelector('.div-numeros')
const btnOrdenar = document.querySelector('button[type="button"]')

const numeros = []

function handleSubmit(event) {
  event.preventDefault()

  const numero = Number(form.numero.value)
  numeros.push(numero)

  form.reset()
  form.numero.focus()

  divNumeros.innerText = `Números: ${numeros.join(', ')}`
}
form.addEventListener('submit', handleSubmit)


function ordenarNumeros() {
  const frase1 = "Ok! Números estão em ordem crescente"
  const frase2 = "Atenção... Números não estão em ordem crescente"

  let ordem = true
  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      ordem = false
      break
    }
  }
  divAviso.innerText = ordem ? frase1 : frase2
}
btnOrdenar.addEventListener('click', ordenarNumeros)
const form = document.querySelector('form')
const resp1 = document.querySelector('#output-um')
const resp2 = document.querySelector('#output-dois')

function calcular(event) {
  event.preventDefault()

  const ladoA = Number(form.querySelector('#ladoA'))
  const ladoB = Number(form.querySelector('#ladoB'))
  const ladoC = Number(form.querySelector('#ladoC'))

  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    resp1.textContent = `Os lados não podem formar um triângulo`
  } else {
    resp1.textContent = `Os lados podem formar um triângulo`
  }
}

form.addEventListener('submit', calcular)
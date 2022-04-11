const form = document.querySelector('form')
const resp1 = document.querySelector('#output-um')
const resp2 = document.querySelector('#output-dois')
const resp3 = document.querySelector('#output-tres')

function saque(event) {
  const saque = Number(form.querySelector('#saque').value)

  if (saque % 10 !== 0) {
    alert('Valor inválido para notas disponíveis (R$ 10, 50, 100)')
    form.querySelector('#saque').focus()
    return 
  }

  const notasCem = Math.floor(saque / 100)
  let resto = saque % 100
  const notasCinquenta = Math.floor(resto / 50)
  resto = resto % 50
  const notasDez = Math.floor(resto / 10)

  if (notasCem > 0) {
    resp1.innerText = `Notas de 100: ${notasCem}`
  }

  if (notasCinquenta > 0) {
    resp2.innerText = `Notas de 50: ${notasCinquenta}`
  }

  if (notasDez > 0) {
    resp3.innerText = `Notas de 10: ${notasDez}`
  }

  event.preventDefault()
}

form.addEventListener('submit', saque)
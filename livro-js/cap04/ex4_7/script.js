const form = document.querySelector('form')
const resp = document.querySelector('#output-um')

function verificar(event) {
  event.preventDefault()

  const velocidadePermitida = Number(form.querySelector('#vel-permitida').value)
  const velocidadeCondutor = Number(form.querySelector('#vel-condutor').value)

  const baseMulta = velocidadePermitida * 1.20

  if (velocidadeCondutor <= velocidadePermitida) {
    resp.innerText = `Situação: Sem Multa`
  } else if (velocidadeCondutor > velocidadePermitida && velocidadeCondutor < baseMulta) {
    resp.innerText = `Situação: Multa Leve`
  } else {
    resp.innerText = `Situação: Multa grave`
  }
}

form.addEventListener('submit', verificar)
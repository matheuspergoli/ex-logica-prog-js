const form = document.querySelector('form')
const resp = document.querySelector('#output-um')

function horario(event) {
  const horaBrasil = Number(form.querySelector('#hora').value)

  let horaFranca = horaBrasil + 5

  if (horaFranca > 24) {
    horaFranca -= 24
  }

  resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`

  event.preventDefault()
}

form.addEventListener('submit', horario)
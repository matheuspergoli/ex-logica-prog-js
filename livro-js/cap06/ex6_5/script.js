const form = document.querySelector('form')
const div = document.querySelector('.resultado')
const btnListar = document.querySelector('[data-listar]')
const btnMontar = document.querySelector('[data-montar]')

const times = []

function handleSubmit(event) {
  event.preventDefault()

  const clube = form.clube.value
  times.push(clube)

  form.reset()
  form.clube.focus()

  btnListar.dispatchEvent(new Event('click'))
}
form.addEventListener('submit', handleSubmit)

function listarTimes() {
  if (times.length === 0) {
    alert('Não há times registrados.')
    return
  }

  const lista = times.reduce((acc, time) => {
    return acc + `<p>${time}</p>`
  }, '')
  div.innerHTML = lista
}
btnListar.addEventListener('click', listarTimes)
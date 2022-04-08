const form = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

form.addEventListener('submit', e => {
  const titulo = form.titulo.value
  const duracao = Number(form.duracao.value)
  const horas = Math.floor(duracao / 60)
  const minutos = duracao % 60
  resp1.innerText = titulo
  resp2.innerText = `Duração: ${horas} hora(s) e ${minutos} minuto(s)`
  e.preventDefault()
})
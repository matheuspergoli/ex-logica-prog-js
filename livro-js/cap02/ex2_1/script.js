const form = document.querySelector('form')
const resp = document.querySelector('h3')

form.addEventListener('submit', e => {
  const nome = form.nome.value
  resp.innerText = `Olá ${nome}!`
  e.preventDefault()
})
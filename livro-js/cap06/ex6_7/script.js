const form = document.querySelector('form')
const divResultado = document.querySelector('.resultado')
const btnListar = document.querySelector('[data-listar]')
const btnAprovados = document.querySelector('[data-aprovados]')

const candidatos = []

function handleSubmit(event) {
  event.preventDefault()

  const nome = form.candidato.value
  const acertos = Number(form.acertos.value)

  candidatos.push({ nome, acertos })

  form.reset()
  form.candidato.focus()
  btnListar.dispatchEvent(new Event('click'))
}
form.addEventListener('submit', handleSubmit)

function listarCandidatos() {
  if (candidatos.length === 0) {
    alert('Não há candidatos')
    return
  }

  const str = candidatos.reduce((acc, candidato) => {
    return acc + `<p>${candidato.nome} - ${candidato.acertos} acertos</p>`
  }, '')
  divResultado.innerHTML = str
}
btnListar.addEventListener('click', listarCandidatos)

function listarAprovados() {
  if (candidatos.length === 0) {
    alert('Não há candidatos')
    return
  }

  const numeroDeAcertos = Number(prompt('Número de Acertos para Aprovação?'))

  if (isNaN(numeroDeAcertos)) {
    alert('Digite um valor válido.')
    return
  }

  const aprovados = candidatos
  .filter(item => item.acertos >= numeroDeAcertos)
  .reduce((acc, candidato) => {
    return acc + `<p>${candidato.nome} - ${candidato.acertos}</p>`
  }, '')
  divResultado.innerHTML = aprovados
}
btnAprovados.addEventListener('click', listarAprovados)
const form = document.querySelector('form')
const div = document.querySelector('.resultado')
const btnListar = document.querySelector('[data-listar]')
const btnResumir = document.querySelector('[data-resumir]')

const criancas = []

function handleSubmit(event) {
  event.preventDefault()

  const nome = form.nome.value
  const idade = Number(form.idade.value)

  criancas.push({ nome, idade })

  form.reset()
  form.nome.focus()

  btnListar.dispatchEvent(new Event('click'))
}
form.addEventListener('submit', handleSubmit)

function listarItens() {
  if (criancas.length === 0) {
    alert('Não há crianças cadastradas')
    return
  }

  const lista = criancas.reduce((acc, obj) => {
    return acc + `<p>${obj.nome} - ${obj.idade} anos</p>`
  }, '')
  div.innerHTML = lista
}
btnListar.addEventListener('click', listarItens)

function resumirItens() {
  if (criancas.length === 0) {
    alert('Não há crianças cadastradas')
    return
  }

  const copia = [...criancas]
  copia.sort((a, b) => a.idade - b.idade)
  let resumo = ''
  let aux = copia[0].idade
  let nomes = []
  for (const crianca of criancas) {
    const { nome, idade } = crianca
    if (idade === aux) {
      nomes.push(nome)
    } else {
      resumo += aux + ' ano(s): ' + nomes.length + ' criança(s) - '
      resumo += ((nomes.length / copia.length) * 100).toFixed(2) + '%\n'
      resumo += '(' + nomes.join(', ') + ')\n\n'
      aux = idade
      nomes = []
      nomes.push(nome)
    }
  }

  resumo += aux + ' ano(s): ' + nomes.length + ' criança(s) - '
  resumo += ((nomes.length / copia.length) * 100).toFixed(2) + '%\n'
  resumo += '(' + nomes.join(', ') + ')\n\n'
  div.innerText = resumo
}
btnResumir.addEventListener('click', resumirItens)
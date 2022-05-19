const form = document.querySelector('form')
const div = document.querySelector('.output')
const btnListar = document.querySelector('[data-listar]')
const btnFiltrar = document.querySelector('[data-filtrar]')
const btnSimular = document.querySelector('[data-simular]')

const carros = []

function handleSubmit(event) {
  event.preventDefault()

  const modelo = form.modelo.value
  const preco = Number(form.preco.value)

  carros.push({ modelo, preco })

  form.modelo.value = ''
  form.preco.value = ''
  form.modelo.focus()

  btnListar.dispatchEvent(new Event('click'))
}
form.addEventListener('submit', handleSubmit)

function listarItens() {
  if (carros.length === 0) {
    alert('Não há carros disponíveis')
    return
  }

  const str = carros.reduce((acc, obj) => {
    return acc + `<p>${obj.modelo} - R$: ${(obj.preco).toFixed(2)}</p>` 
  }, '')
  div.innerHTML = str
}
btnListar.addEventListener('click', listarItens)

function filtrarItens() {
  const valor = Number(prompt('Qual o valor máximo que o cliente deseja pagar?'))
  
  if (!valor) {
    alert('Nenhum valor definido.')
    return
  }

  const carrosFiltrados = carros
  .filter(carro => carro.preco <= valor)
  .reduce((acc, obj) => {
    return acc + `<p>${obj.modelo} - R$: ${(obj.preco).toFixed(2)}</p>`
  }, '')
  div.innerHTML = carrosFiltrados
}
btnFiltrar.addEventListener('click', filtrarItens)

function simularPromocao() {
  const promocao = Number(prompt('Digite o valor do desconto'))

  if (promocao < 0 || isNaN(promocao)) {
    alert('Valor inválido.')
    return
  }

  const carrosNaPromo = carros.map(({ modelo, preco }) => {
    return {
      modelo,
      preco: preco - (preco * promocao) / 100
    }
  })
  .reduce((acc, obj) => {
    return acc + `<p>${obj.modelo} - R$ ${(obj.preco).toFixed(2)}</p>`
  }, '')
  div.innerHTML = carrosNaPromo
}
btnSimular.addEventListener('click', simularPromocao)
const $form = document.querySelector('form')
const $button = document.querySelector('button')
const $erros = document.querySelector('[data-erros]')
const $chances = document.querySelector('[data-chances]')
const $numeroApostado = document.querySelector('[data-aposta]')

let numeroDeErros = 0
let numeroDeChances = 6
let numerosApostados = []

const numeroSorteado = Math.floor(Math.random() * (100 - 1) + 1)

function jogarDeNovo() {
  const condicaoJogarDeNovo = confirm('Deseja jogar novamente?')

  if (condicaoJogarDeNovo) {
    numeroDeErros = 0
    numeroDeChances = 6
    numerosApostados = []
    $chances.innerText = `Chances: ${numeroDeChances}`
    $erros.innerText = `Erros: ${numeroDeErros}`
  } else {
    alert('Obrigado por jogar!')
    $button.setAttribute('disabled', '')
    return
  }
}

function handleClick(event) {
  event.preventDefault()

  const condicaoDeJogo = numeroDeChances > 0 ? true : false

  if (condicaoDeJogo) {
    if (+$numeroApostado.value === numeroSorteado) {
      alert(`${numeroSorteado} foi o número sorteado, você ganhou!`)
      jogarDeNovo()
    } else {
      if (numerosApostados.includes($numeroApostado.value)) {
        alert(`${$numeroApostado.value} já foi escolhido, tente outro.`)
        return
      } else {
        numerosApostados.push($numeroApostado.value)
        numeroDeErros++
        numeroDeChances--
        $chances.innerText = `Chances: ${numeroDeChances}`
        $erros.innerText = `Erros: ${numeroDeErros}`
      }
    }
  } else {
    alert('Você ficou sem chances.')
    jogarDeNovo()
  }
}

$form.addEventListener('submit', handleClick)
const form = document.querySelector('form')
const resp = document.querySelector('#output-um')

function repetirFruta(event) {
  event.preventDefault()

  const nomeFruta = form.querySelector('#fruta').value
  const numeroFruta = Number(form.querySelector('#numero').value)

  const arr = []

  for (let i = 0; i < numeroFruta; i++) {
    arr.push(nomeFruta)
  }

  const str = arr.join(' * ')

  resp.innerText = str
}

form.addEventListener('submit', repetirFruta)
const form = document.querySelector('form')
const resp = document.querySelector('#output-um')

function isPrime(event) {
  event.preventDefault()

  const numero = Number(form.querySelector('#numero').value)

  let divisores = 0

  for (let i = 0; i <= numero; i++) {
    if (numero % i === 0) {
      divisores++
    }
  }

  if (divisores === 2) {
    resp.innerText= `${numero} É primo`
  } else {
    resp.innerText = `${numero} NÃO é primo`
  }
}

form.addEventListener('submit', isPrime)
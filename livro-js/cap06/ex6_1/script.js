const form = document.querySelector('form')
const urgencia = document.querySelector('#urgencia')
const atender = document.querySelector('#atender')
const resp1 = document.querySelector('#output-um')
const resp2 = document.querySelector('#output-dois')

const pacientes = []

function adicionarPaciente(event) {
  event.preventDefault()

  const nomePaciente = form.querySelector('#paciente').value
  pacientes.push(nomePaciente)

  let lista = ''

  pacientes.forEach((paciente, i) => {
    lista += `${i + 1}. ${paciente}\n`
  })

  resp2.innerText = lista
  form.paciente.value = ''
  form.paciente.focus()
}
form.addEventListener('submit', adicionarPaciente)

function pacienteUrgencia() {
  if (!form.checkValidity()) {
    alert('Informe o nome do paciente a ser atendido em caráter de urgência')
    return
  }

  const nomePaciente = form.querySelector('#paciente').value
  pacientes.unshift(nomePaciente)

  let lista = ''

  pacientes.forEach((paciente, i) => {
    lista += `${i + 1}. ${paciente}\n`
  })

  resp2.innerText = lista
  form.paciente.value = ''
  form.paciente.focus()
}
urgencia.addEventListener('click', pacienteUrgencia)


function atenderPaciente() {
  if (!pacientes.length) {
    alert('Não há pacientes na lista de espera')
    form.paciente.focus()
    return
  }

  const atender = pacientes.shift()
  resp1.innerText = `Em atendimento: ${atender}`

  let lista = ''

  pacientes.forEach((paciente, i) => {
    lista += `${i + 1}. ${paciente}\n`
  })

  resp2.innerText = lista
  form.paciente.value = ''
  form.paciente.focus()
}
atender.addEventListener('click', atenderPaciente)
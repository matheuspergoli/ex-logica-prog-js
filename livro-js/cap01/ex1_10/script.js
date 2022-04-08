const valorConta = Number(prompt('Digite o valor da conta: '))
const clientes = Number(prompt('Número de clientes: '))
const total = valorConta / clientes
alert(`Valor da conta por cliente R$: ${total.toFixed(2)}`)
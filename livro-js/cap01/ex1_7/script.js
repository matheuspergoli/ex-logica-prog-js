const valorDoJantar = Number(prompt('Digite o valor do jantar: '))
const taxa = valorDoJantar * 0.10
const total = valorDoJantar * 1.1
alert(`Taxa de 10% do garçom R$: ${taxa.toFixed(2)} \nTotal a pagar pelo jantar R$: ${total.toFixed(2)}`)
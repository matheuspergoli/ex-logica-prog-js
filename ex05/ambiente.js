// Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcule e escreva o valor do novo salário

function calcularSalario(salario, aumento) {
    let calcularAumento = (salario * aumento) / 100
    let resultado = salario + calcularAumento
    return resultado
}

let salario = 3500
let aumento = 35

console.log(`O salário atual é de ${salario.toFixed(2)} R$ e o aumento foi de ${aumento}%. Seu salário agora é de : ${calcularSalario(salario, aumento).toFixed(2)} R$`)
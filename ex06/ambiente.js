/*
Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão fixa por carro vendido e mais 5% sobre o total de vendas efetuadas, escreva um algoritmo que leia o número de carros vendidos, o valor total das vendas, o valor que ele recebe por carro e o salário fixo e calcule o salário do mesmo
*/

function calcularSalario(salario, carros, comissao, totalVendas) {
    let salarioAtual = salario + (carros * comissao) + (totalVendas * 5 / 100)

    let resultado = `Salário atual: ${salario.toFixed(2)}R$ || Carros vendidos: ${carros} || Comissão por carro vendido: ${comissao.toFixed(2)}R$ || Total de vendas: ${totalVendas.toFixed(2)}R$ || Salário a receber: ${salarioAtual.toFixed(2)}R$`

    return resultado
}

console.log(calcularSalario(1000, 10, 100, 2000))
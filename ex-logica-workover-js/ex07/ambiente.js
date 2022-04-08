function calcularMedia(valorUm, valorDois, valorTres) {
    const resultado = valorUm * 2 + valorDois * 3 + valorTres * 5/10
    return resultado.toFixed(2)
}

console.log(calcularMedia(6.7, 9.8, 7.9))
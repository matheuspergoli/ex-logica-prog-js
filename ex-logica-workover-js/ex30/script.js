const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let soma = 0

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
    soma += numeros[i]
}
console.log(`Soma de todos os números: ${soma}`)
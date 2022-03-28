function leitura(...valores) {
    let intervaloDentro = 0
    let intervaloFora = 0
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] >= 10 && valores[i] <= 20) {
            intervaloDentro++
        } else {
            intervaloFora++
        }
    }
    return `Qtd de números entre o intervalo de 10 e 20: ${intervaloDentro} || Qtd fora: ${intervaloFora}`
}

console.log(leitura(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22))
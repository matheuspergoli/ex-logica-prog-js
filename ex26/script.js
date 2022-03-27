const lerValor = (...valor) => {
    const arr = []
    for (let i = 0; i < valor.length; i++) {
        if (valor[i] < 0) {
            arr.push(valor[i])
        }
    }
    return `A quantidade de números negativos é ${arr.length}`
}

console.log(lerValor(1, 2, 3, -4, -5 , -6, 7, 8, 9, -10, -11))
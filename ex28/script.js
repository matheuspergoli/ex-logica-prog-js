const calcular = (...valores) => {
    const resultado = valores.reduce((total, valor) => {
        return total += valor
    })
    return resultado / valores.length
}

console.log(calcular(8, 7, 6, 0, 9, 8, 7, 5, 4, 5.6))

function calcular(valor) {
    if (valor > 10) {
        console.log('O valor é maior que 10')
    } else if (valor === 10) {
        console.log('O valor é 10')
    } else if (valor <= 0 || !valor) {
        console.log('Sem valor')
    } else {
        console.log('O valor é menor que 10')
    }
}

calcular(10)
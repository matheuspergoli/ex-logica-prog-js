const detectarDado = dado => {
    if (typeof dado === 'string') {
        console.log(`${dado}: é um tipo de dado string`)
    } else if (typeof dado === 'number') {
        console.log(`${dado}: é um tipo de dado number`)
    } else {
        console.log(`${dado}: é um tipo de dado boolean`)
    }
}

detectarDado('Hello world!')
detectarDado(125)
detectarDado(true)
const rand = () => {
    return Math.floor(Math.random() * (100 - 1) + 1)
}

const criaArray = () => {
    const arr = []
    for (let i = 0; arr.length < 10; i++) {
        arr.push(rand())
    }
    return arr
}

const meuArray = criaArray()

const arrayPar = meuArray.filter(valor => {
    return valor % 2 === 0
})

const arrayImpar = meuArray.filter(valor => {
    return valor % 2 !== 0
})

const verificarArray = (array) => {
    if (array.length <= 5) {
        console.log('Poucos elementos no array')
    } else {
        console.log('Muitos elementos no array')
    }
}

verificarArray(arrayPar)
verificarArray(arrayImpar)
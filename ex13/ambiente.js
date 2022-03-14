const estoque = (min, max, total) => {
    const media = (min + max) / 2

    if (total >= media) {
        return console.log('Não efetuar compra')
    } else {
        return console.log('Efetuar compra')
    }
}
estoque(1000, 250, 500)
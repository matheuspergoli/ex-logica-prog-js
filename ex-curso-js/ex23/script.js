const limite = (string) => {
    if (string.length > 10) {
        console.log('Texto muito longo')
    } else {
        console.log('Texto dentro do limite')
    }
}

limite('Olá, mundo!')
const triangulo = (m1, m2, m3) => {
    if (m1 < m2 + m3 && m2 < m1 + m3 && m3 < m1 + m2) {
       console.log('Uhuull... temos um triângulo!') 
    } else {
        console.log('Essas medidas não formam um triângulo...')
    }
}

triangulo(6, 7, 8)
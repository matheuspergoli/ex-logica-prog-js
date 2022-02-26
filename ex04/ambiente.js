// Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcule e escreva o percentual que cada um representa em relação ao total de eleitores

function calcular(eleitores, validos, brancos, nulos) {
    let percentualValidos = (validos * 100) / eleitores
    let percentualBrancos = (brancos * 100) / eleitores
    let percentualNulos = (nulos * 100) / eleitores
    console.log(`O total de eleitores do município é de ${eleitores}`)
    console.log(`Todos os votos válidos equivalem a ${percentualValidos.toFixed(2)}%`)
    console.log(`Todos os votos brancos equivalem a ${percentualBrancos.toFixed(2)}%`)
    console.log(`Todos os votos nulos equivalem a ${percentualNulos.toFixed(2)}%`)
}

console.log(calcular(3500, 2200, 600, 700))
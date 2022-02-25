// Escreva um algoritmo para ler as dimensões de um retângulo (base e altura) e calcule a sua área

function calcule(base, altura) {
    let area = base * altura
    return area
}

let base = 12
let altura = 5

console.log(`${base} : ${altura} = ${calcule(base, altura)}`)
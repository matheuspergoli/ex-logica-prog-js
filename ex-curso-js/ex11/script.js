const idade = 22
const cnh = true

if (idade >= 18 && cnh !== true) {
    console.log('Não pode dirigir')
} else if (idade >= 18 && cnh === true) {
    console.log('Pode dirigir')
} else {
    console.log('Não pode dirigir')
}
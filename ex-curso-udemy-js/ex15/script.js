let numero = 11
let divisoes = 0

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        divisoes++
    }
}

if (divisoes === 2) {
    console.log(`O número ${numero} é primo`)
} else {
    console.log(`O número ${numero} não é primo`)
}

const notas = (nota1, nota2) => {
    const media = (nota1 + nota2) / 2
    if (media >= 7) {
        console.log(`Nota ${media.toFixed(2)}: Aprovado`)
    } else {
        console.log(`Nota ${media.toFixed(2)}: Reprovado`)
    }
}

notas(6, 8)
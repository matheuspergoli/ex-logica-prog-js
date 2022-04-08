const calcular = (alunos, ...notas) => {
    const soma = notas.reduce((acumulador, nota) => acumulador + nota)
    return `Quantidade de alunos na sala: ${alunos} | Média da sala: ${(soma / alunos).toFixed(1)}`
}

console.log(calcular(4, 8, 9, 7, 2))
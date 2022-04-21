// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
const copaBrasilGanhou = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
copaBrasilGanhou.forEach(ano => {
  console.log(`O brasil ganhou a copa de ${ano}`)
})

for (let copa in copaBrasilGanhou) {
  console.log(`O brasil ganhou a copa de ${copaBrasilGanhou[copa]}`)
}

for (let copa of copaBrasilGanhou) {
  console.log(`O brasil ganhou a copa de ${copa}`)
}

for (let i = 0; i < copaBrasilGanhou.length; i++) {
  console.log(`O brasil ganhou a copa de ${copaBrasilGanhou[i]}`)
}


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === 'Pera') {
    console.log('Pera encontrada, saindo...')
    break
  }
  console.log(`${frutas[i]}`)
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
const frutaRemovida = frutas[frutas.length -1]
console.log(frutaRemovida)
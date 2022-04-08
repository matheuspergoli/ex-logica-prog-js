const valorProduto = Number(prompt('Digite o valor do produto: '))
const desconto = valorProduto * 0.10
const parcelado = valorProduto / 3
const aVista = valorProduto - desconto
alert(`Preço R$: ${valorProduto.toFixed(2)} \nÀ vista R$: ${aVista.toFixed(2)} \nOu 3x de R$: ${parcelado.toFixed(2)}`)
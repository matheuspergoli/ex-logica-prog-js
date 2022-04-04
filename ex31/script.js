/** 
 * Uma loja está levantando o valor total de todas as mercadorias em estoque.
 * Escreva um algoritmo que permita a entrada das seguintes informações
 * 1. O número total de mercadorias no estoque
 * 2. O valor de cada mercadoria
 * Ao final imprimir o valor total em estoque e a média de valor das mercadorias
 */

const btnEnviar = document.querySelector('#enviar')
btnEnviar.addEventListener('click', estoque)

function estoque() {
  const mercadorias = Number(document.querySelector('#mercadoria').value)
  const array = []
  if (mercadorias) {
    for (let i = 0; i < mercadorias; i++) {
      array.push(Number(prompt(`Digite o valor da mercadoria N° ${i + 1}`)))
    }
    const totalMercadorias = array.reduce((acumulador, valor) => {
      return acumulador + valor
    })
    const media = totalMercadorias / mercadorias
    alert(`O total das mercadorias é ${totalMercadorias} e a média é ${media.toFixed(2)}`)
  } else {
    alert('Digite o valor corretamente.')
    return
  }
}
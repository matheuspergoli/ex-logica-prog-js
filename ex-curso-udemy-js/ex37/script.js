class Carrinho {
  constructor(itens, quantidade, total) {
    this.itens = itens
    this.quantidade = quantidade
    this.total = total
  }

  addItem(item) {
    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].ID === item.ID) {
        this.itens[itemCarrinho].quantidade += item.quantidade
      }
    }
  }
}

const meuCarrinho = new Carrinho([
  {
    ID: 01,
    nome: 'Camisa',
    quantidade: 1,
    preco: 100
  },
  {
    ID: 02,
    nome: 'Bermuda',
    quantidade: 2,
    preco: 300
  },
  {
    ID: 03,
    nome: 'Blusa',
    quantidade: 1,
    preco: 250
  }
], 3, 650)
console.log(meuCarrinho)
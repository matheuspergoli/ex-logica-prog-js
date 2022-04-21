// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(cor, marca, portas);
// Declarações de variáveis com var fogem do escopo, porque tem o escopo global. const e let não tem esse comportamento, portanto const não existe no escopo global e nem let se declaradas dentro de um bloco


// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  const dois = 2
  return x + dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;

for(let numero = 0; numero <= 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

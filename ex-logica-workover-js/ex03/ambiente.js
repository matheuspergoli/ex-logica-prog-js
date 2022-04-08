// Escreva um algoritmo que leia idade de uma pessoa expressa em anos, meses e dias e escreva idade dessa pessoa expressa em dias

let data = {
    anos: 30,
    meses: 6,
    dias: 5,
    calcular: function () {
        let anosEmDias = this.anos * 365 
        let mesesEmDias = this.meses * 30
        let total = anosEmDias + mesesEmDias + this.dias
        return total
    }
}

console.log(`${data.anos} anos, ${data.meses} meses e ${data.dias} dias equivale a ${data.calcular()} dias`)
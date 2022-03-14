const saldoCliente = (saldo, debito, credito) => {
    if (saldo >= 0) {
        return console.log(`Crédito em conta: ${credito.toFixed(2)} | Débito em conta: ${credito.toFixed(2)} | Seu saldo: ${saldo.toFixed(2)} POSITIVO`)
    } else {
        return console.log(`Crédito em conta: ${credito.toFixed(2)} | Débito em conta: ${credito.toFixed(2)} | Seu saldo: ${saldo.toFixed(2)} NEGATIVO`)
    }
}

saldoCliente(500, 600, 1000)
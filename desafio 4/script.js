// DESAFIO 4 — FORMA DE PAGAMENTO

// Crie variáveis para:
// possuiDinheiro
// possuiCartao

// O sistema deve verificar se:
// A pessoa possui dinheiro
// OU possui cartão

// Se uma das condições for verdadeira:
// Mostrar "Compra aprovada"

// Caso contrário:
// Mostrar "Pagamento recusado"

let possuiDinheiro = true
let possuiCartao = false

if (possuiCartao || possuiDinheiro) {
    console.log("Compra aprovada")
} else {
    console.log("Pagamento recusado")
}

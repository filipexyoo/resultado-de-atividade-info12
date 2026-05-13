// DESAFIO 2 — ACESSO ADMINISTRATIVO

// Crie variáveis para:
// admin
// moderador

// O sistema deve verificar se:
// O usuário é administrador
// OU moderador

// Se uma das condições for verdadeira:
// Mostrar "Acesso permitido"

// Caso contrário:
// Mostrar "Acesso negado"

let admin = true;
let moderador = false;
if(admin || moderador) {
    console.log("acesso permitido")
} else {
    console.log("acesso negado")
}
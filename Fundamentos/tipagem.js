/**
 * Tipagem dinâmica - JS
 */

// Declaração de variáveis
let nome, idade, peso, altura, vip, imc, fcm

// Entrada de dados
nome = "Thiago Sanches"
idade = 23
peso = 65
altura = 1.90 // Ponto decimal para números
vip = true

// Limpar console (opcional)
console.clear()

// Processamento
// IMC (Índice de Massa Corporal) | FCM (Frequência Cardíaca Máxima)
imc = peso / (altura * altura)
fcm = 200 - (0.7 * idade)

// Saída
console.log("Ficha do Aluno")
console.log("_______________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`VIP: ${vip}`)
console.log(`IMC: ${imc.toFixed(2)}`)
console.log(`FCM: ${fcm.toFixed(2)} bpm`)

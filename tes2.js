// Vetor com os nomes
// let nomes = ["Carla", "Márcio", "Kelly", "Neuza", "Maria"];

// // Exibição dos nomes na ordem inversa
// console.log("Nomes na ordem inversa:");
// for (let i = nomes.length - 1; i >= 0; i--) {
//     console.log(nomes[i]);
// }
const prompt = require('prompt-sync')();
let numeros = [];

// Leitura de 10 números inteiros
for (let i = 0; i < 10; i++) {
    let entrada = prompt(`Digite o ${i + 1}º número inteiro: `); // prompt real
    let numero = parseInt(entrada); // conversão para número inteiro
    numeros.push(numero);
}

// Verificação e exibição dos números pares e suas posições
console.log("Números pares e suas posições:");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`Número ${numeros[i]} na posição ${i}`);
    }
}
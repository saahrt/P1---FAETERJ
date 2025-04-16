// ✅ Questão 3: Filtro de Candidatos (filter)
// Dado o array:

// const candidatos = [
//   { nome: 'João', idade: 18, experiencia: false },
//   { nome: 'Maria', idade: 25, experiencia: true },
//   { nome: 'Pedro', idade: 17, experiencia: true },
//   { nome: 'Laura', idade: 22, experiencia: false }
// ];

// Crie um novo array com os candidatos que têm mais de 18 anos E têm experiência.  

const candidatos = [
  { nome: 'João', idade: 18, experiencia: false },
  { nome: 'Maria', idade: 25, experiencia: true },
  { nome: 'Pedro', idade: 17, experiencia: true },
  { nome: 'Laura', idade: 22, experiencia: false }
];

// const novoArray = arrayOriginal.filter((elemento, índice, arrayCompleto) => {
//     // Retorna true para manter o item
//   });

// elemento: é o valor atual do array sendo analisado.
// índice (opcional): a posição do elemento no array.
// arrayCompleto (opcional): o array original inteiro.

// deve retornar true ou false: se for true, o item entra no novo array. Se for false, ele é descartado.

const candidatosAprov = candidatos.filter(criterio => {
    return criterio.idade > 18 && criterio.experiencia === true;
});

console.log("Lista de todos os candidatos:\n", candidatos);
console.log("\nCandidatos que foram aprovados:\n", candidatosAprov);
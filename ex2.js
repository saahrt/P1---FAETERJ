// ✅ Questão 2: Atualização de Preços (map)
// Você recebeu uma lista de produtos com os preços antigos:

// const produtos = [
//   { nome: 'Camiseta', preco: 25 },
//   { nome: 'Calça', preco: 80 },
//   { nome: 'Tênis', preco: 150 }
// ];

// Use map para criar um novo array com os produtos, mas com os preços aumentados em 10%. 
// O array original não deve ser alterado.  

const produtos = [
  { nome: 'Camiseta', preco: 25 },
  { nome: 'Calça', preco: 80 },
  { nome: 'Tênis', preco: 150 }
];

// .map p/ criar novo array aplicando uma transformação a cada item do array original, não modifica o original.
// const novoArray = arrayOriginal.map((elemento, índice, arrayCompleto) => {
//     // retorna o novo valor transformado
//   });

// elemento: o valor atual que está sendo iterado.
// índice: (opcional) o índice do valor atual.
// arrayCompleto: (opcional) o array original inteiro.

const produtosUpdate = produtos.map ((prod =>{
    return {
        nome: prod.nome,
        preco: (prod.preco * 1.10).toFixed(2) // toFixed para manter em 2 casas decimais
    };
}));

console.log("Array original:", produtos); // não há necessidade de usar template string 
console.log("\nArray atualiado:", produtosUpdate);
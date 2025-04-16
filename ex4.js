// ✅ Questão 4: Soma de Salários (reduce)
// Dado o seguinte array de funcionários:

// const funcionarios = [
//   { nome: 'Lucas', salario: 3000 },
//   { nome: 'Fernanda', salario: 4200 },
//   { nome: 'Tiago', salario: 2500 }
// ];

//   Use reduce para calcular a soma total dos salários.  

const funcionarios = [
  { nome: 'Lucas', salario: 3000 },
  { nome: 'Fernanda', salario: 4200 },
  { nome: 'Tiago', salario: 2500 }
];

// array.reduce((acumulador, elementoAtual, indice, array) => {
//     // Lógica do cálculo
//   }, valorInicial);

// acumulador: Esse é o valor acumulado durante as iterações. No início, ele é igual ao valorInicial (caso você forneça um). 
// Nas iterações seguintes, ele recebe o valor da execução anterior da função.
// elementoAtual: Esse é o valor do elemento atual do array sendo processado.
// indice (opcional): O índice do elemento atual dentro do array (começa de 0).
// array (opcional): O array original sendo processado.
// valorInicial (opcional): É o valor inicial do acumulador. Caso não seja fornecido,
//  o acumulador começará com o primeiro elemento do array, e a iteração começará com o segundo.

const salarioTotal = funcionarios.reduce ((i, funcionario) => {
    return i + funcionario.salario;
}, 0); // valor inicial do acumulador = 0

console.log(`A soma total de salários é de R$${salarioTotal},00.`);
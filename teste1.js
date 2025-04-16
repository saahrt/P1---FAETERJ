// Dado uma array de número que  pode ou não conter arrays de números internas, 
// escreva uma funçao que retorne uma array de números não repetidos.
// array internas são como uma boneca russa

const array = [1, 2, 3, [1, [2,11,4], 5, 6, 7], 8, 9, [7, 0], 8, 9, 2, 10];

// exibindo array interna
console.log("\nExibindo array internas nas posições [3][1][1]");
console.log(array[3][1][1]);

// Resolvendo com RECURSIVIDADE

function arrayRecursive (arr, result = []) {
    // looping para percorrer o array
    for (let i = 0; i < arr.length; i++) {
        // verifica se é array
        if (Array.isArray(arr[i])) { // arr[i] na posição i atual
            arrayRecursive(arr[i], result); //chama a função novamente p/ fazer a verificação
        } else {
            // verifica se já NÃO inclui esse número no array
            if (!result.includes(arr[i])) { 
                result.push(arr[i]); // caso não exista, inclui esse número no array
            }
        }
    }
    return result;
}

console.log("\nExibindo Array recursiva");
console.log(arrayRecursive(array));

// Resolvendo com .flat e .forEach
// .flat serve para achatar os array e "nivelar" eles, deixando no mesmo "plano"
console.log("\n-------------------------------------------------------------");
console.log("Exibindo Array .flat\nPRIMEIRO NIVEL");
console.log(array.flat(1));
console.log("\nNIVEIS INFINITOS")
console.log(array.flat(Infinity)); // não é recomendado em arrays mais profundos
console.log("-------------------------------------------------------------\n");

function arrayForEach(arr) {
    const arrayFlat = arr.flat(Infinity);
    const result = [];
    arrayFlat.forEach(valor => {
        // se result não inclui faz o push no valor
        if (!result.includes(valor)){
            result.push(valor);
        }
    })
    return result;
}

console.log("Exibindo Array forEach");
console.log(arrayForEach(array));

// Resolvendo com .flat e .filter

function arrayFilter(arr) {
    const arrayFlat = arr.flat(Infinity); //verifica se o meu número tem o mesmo número do elemento
    return arrayFlat.filter((valor, index) => arrayFlat.indexOf(valor) === index ); // se retornar true é incluido
    
}

console.log("Exibindo Array filter");
console.log(arrayFilter(array));

// Resolvendo com set e spread operator

function arraySetSO(arr) {
    return [...new Set(arr.flat(Infinity))];
}

console.log("Exibindo Array Set");
console.log(arraySetSO(array));

console.log("\nExibindo Array ORIGINAL");
console.log(array);
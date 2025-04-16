// ✅ Questão 6 – Inverter Palavras
// Crie uma função chamada inverterPalavra(palavra) que:

// Recebe uma string como parâmetro.

// Retorna a mesma palavra, mas com os caracteres invertidos.

// inverterPalavra("banana"); // "ananab"
// inverterPalavra("carro");  // "orrac"

// Regras:

// Não use métodos prontos como reverse() diretamente.


// Pode usar for, let, +=, etc.


function inverterPalavra(palavra) {
    // Criamos uma variável para armazenar o resultado da inversão
    let arvalaP = "";
  
    // Percorremos a string de trás para frente
    for (let i = palavra.length - 1; i >= 0; i--) {
      // A cada passo, adicionamos o caractere atual à variável resultado
      arvalaP += palavra[i];
    }

    return arvalaP;
  }
  
  console.log(inverterPalavra("banana"));
  console.log(inverterPalavra("carro")); 
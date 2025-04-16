// ✅ Questão 1: Relatório de Notas (forEach)
// Dado o array:

// const alunos = [
//   { nome: 'Ana', nota: 7 },
//   { nome: 'Bruno', nota: 5 },
//   { nome: 'Carlos', nota: 8 },
//   { nome: 'Diana', nota: 10 }
// ];

// Crie um código usando forEach que imprima no console:

// "Ana foi aprovada com nota 7" "Bruno foi reprovado com nota 5" ...

// Considera-se aprovado quem tiver nota maior ou igual a 6

const alunos = [
  { nome: 'Ana', nota: 7 },
  { nome: 'Bruno', nota: 5 },
  { nome: 'Carlos', nota: 8 },
  { nome: 'Diana', nota: 10 }
];

alunos.forEach (aluno => {
    if (aluno.nota >= 6) {
        console.log(`${aluno.nome} foi aprovado.`);
        return;
    }
    console.log(`${aluno.nome} foi reprovado.`);
});
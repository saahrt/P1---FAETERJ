// ✅ Questão 5: Nome dos Aprovados (filter + map)   

// Utilizando o mesmo array da Questão 1 (alunos), crie um array com os nomes dos alunos aprovados. 
// O resultado final deve ser assim:

// ["Ana", "Carlos", "Diana"]

// Você deve resolver isso utilizando encadeamento de métodos (filter().map()).    

const alunos = [
    { nome: 'Ana', nota: 7 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carlos', nota: 8 },
    { nome: 'Diana', nota: 10 }
  ];

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6).map(aluno => aluno.nome);  // Extrai o nome dos alunos aprovados
console.log("Os alunos aprovados são: ",alunosAprovados); 
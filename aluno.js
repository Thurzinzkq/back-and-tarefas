const alunos = ["Ana", "Bruna", "Pietra"];

alunos.push("Wesley"); //Adiciona elemento no final do array
alunos.unshift("Alan")
console.log(alunos);

const removido = alunos.pop();
console.log(removido);
console.log(alunos);

console.log(alunos.indexOf("Maria"));
console.log(alunos.indexOf("Pedro"));

console.log(alunos.includes("Ana"));
console.log(alunos.includes("Guilherme"));

/*
8. Escreva um algoritmo que tenha como valores de entradas o nome
e idade do usuário e imprima no terminal o nome e a quantidade de
letras que o nome possui, bem como a idade e o ano de nascimento
do usuário. Ex: “Nome: Pedro, 5 letras. Idade: 22 anos, nasceu em
2000”.
*/

let nome = prompt(`Insira seu primeiro nome:`);
let nomeL = nome.length

let idade = Number(prompt(`Insira sua idade`));
let anoNascimento = 2022 - idade

console.log(`Nome: ${nome}, ${nomeL} letras. Idade: ${idade}, nasceu em ${anoNascimento}.`);



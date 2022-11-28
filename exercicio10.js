/*
8. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).
*/

let anoAtual = Number(prompt(`Informe o ano atual:`));
let anoNascimento = Number(prompt(`Informe seu ano de nascimento:`));

const idadeEleitor = anoAtual - anoNascimento

if(idadeEleitor>=16){
    console.log(`Você podera votar este ano!`);
}else{
    console.log(`Você ainda não pode votar!`)
}
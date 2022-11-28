/*
6. Desenvolva um algoritmo para ler dois valores e imprimir uma das
três mensagens a seguir:
a. ‘Números iguais’, caso os números sejam iguais;
b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.
*/

let number1 = Number(prompt(`Insira um número inteiro e positivo:`));
let number2 = Number(prompt(`Insira um número inteiro e positivo:`));

if(number1==number2){
    alert(`Números iguais`);
}else if(number1>number2){
    alert(`Primeiro é maior`);
}else if(number2>number1){
    alert(`Segundo é maior`);
}else{
    alert(`erro`)
}
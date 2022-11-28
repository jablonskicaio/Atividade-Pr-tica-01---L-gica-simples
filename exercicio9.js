/*
9. Crie um algoritmo que armazene um número inteiro positivo, e gere
um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar;
*/

const valor = Number(prompt(`Informe um valor inteiro e positivo: `));

if(isNaN(valor) || valor<=0){
  alert(`O valor informado não é um número válido.`);
}else{
  if(valor%2){
    alert(`Número é impar!`);
  }else{
    alert(`Número é par!`);
  }
}
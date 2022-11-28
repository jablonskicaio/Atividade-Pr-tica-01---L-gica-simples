/*
7. As maçãs desta estação custam R$0,30 se forem compradas
menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
doze. Desenvolva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

let qtdMacas = Number(prompt(`Insira a quantidade de Maçãs que deseja comprar na GrowFruits:`));

if(qtdMacas<12){
  console.log(`O valor das Maçãs deu: ${qtdMacas*0.30}G$ GrowCoins.`);
}else{
  console.log(`O valor das Maçãs deu: ${qtdMacas*0.25}G$ GrowCoins.`);
}
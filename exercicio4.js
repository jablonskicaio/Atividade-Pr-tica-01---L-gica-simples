/*
4. Uma revendedora de carros usados paga a seus funcionários
vendedores um salário fixo por mês, mais uma comissão também
fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por
ele vendidos, o valor total de suas vendas, o salário fixo e o valor que
ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.
*/

let salarioFixo = Number(prompt(`Insira seu Salario:`));
let carrosVendidos = Number(prompt(`Insira a quantidade de carros vendidos:`));
let valorVendas = Number(prompt(`Insira o valor total de suas vendas:`));
let comissaoFixa = carrosVendidos*100

let comissaoVendas = (valorVendas/100)*5

let salarioFinal = salarioFixo+comissaoFixa+comissaoVendas
console.log(`O seu salário total será de: ${salarioFinal}`);

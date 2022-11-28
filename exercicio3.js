/*
3. O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever
o custo final ao consumidor.
*/

const custoDeFabrica = Number(prompt(`Digite o custo de fábrica do GrowCar:`));
let custoFinal = 0;

custoFinal = ((custoDeFabrica/100)*28)+((custoDeFabrica/100)*45)+custoDeFabrica

console.log(`O custo final do GrowCar é de: ${custoFinal}`)
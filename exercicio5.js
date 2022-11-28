/*
5. Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit.
*/

const temperaturaC = Number(prompt(`Digite a temperatura em graus celsius?`));
const temperaturaF = (temperaturaC * 1.8 + 32).toFixed(2);

alert(`A temperatura ${temperaturaC} é correspondente à ${temperaturaF} em Fahrenheit`);
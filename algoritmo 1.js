/*1 Faça um programa que lê n números inteiros do teclado e armazene em um vetor. Ao final imprima o vetor.*/
let n = parseInt(prompt("Quantos números você quer digitar?"));
let numeros = [];

for (let i = 0; i < n; i++) {
  numeros[i] = parseInt(prompt(`Digite o número ${i + 1}:`));
}

document.writeln("<b>Vetor informado:</b><br>");
for (let i = 0; i < n; i++) {
  document.writeln(numeros[i] + "<br>");
}

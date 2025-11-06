/*Dada uma sequência de n números, imprimi-la na ordem inversa à da leitura*/
let n = parseInt(prompt("Quantos números você quer digitar?"));
let numeros = [];
let pares = 0, impares = 0;

for (let i = 0; i < n; i++) {
  numeros[i] = parseInt(prompt(`Digite o número ${i + 1}:`));
  if (numeros[i] % 2 === 0) pares++;
  else impares++;
}

document.writeln("<b>Números informados:</b><br>");
for (let i = 0; i < n; i++) {
  document.writeln(numeros[i] + "<br>");
}

document.writeln(`<br>Quantidade de pares: ${pares}<br>Quantidade de ímpares: ${impares}`);

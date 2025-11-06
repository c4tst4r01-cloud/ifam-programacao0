let vetorA = [];
let vetorB = [];
let vetorC = [];

for (let i = 0; i < 10; i++) {
  vetorA[i] = parseInt(prompt(`Digite o ${i + 1}º número do vetor A:`));
}

for (let i = 0; i < 10; i++) {
  vetorB[i] = parseInt(prompt(`Digite o ${i + 1}º número do vetor B:`));
}

for (let i = 0; i < 10; i++) {
  vetorC[i] = vetorA[i] * vetorB[i];
}

document.writeln("<b>Resultado da multiplicação dos vetores:</b><br>");
for (let i = 0; i < 10; i++) {
  document.writeln(`Posição ${i + 1}: ${vetorC[i]}<br>`);
}

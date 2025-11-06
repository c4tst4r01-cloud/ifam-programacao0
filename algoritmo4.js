var vetorA = []
var vetorB = []
var vetorC = []

// Ler vetor A
for (let i = 0; i < 10; i++) {
    vetorA[i] = parseFloat(prompt("Vetor A - posição " + i + ":"))
}

// Ler vetor B
for (let i = 0; i < 10; i++) {
    vetorB[i] = parseFloat(prompt("Vetor B - posição " + i + ":"))
}

// Multiplicar e armazenar no vetor C
for (let i = 0; i < 10; i++) {
    vetorC[i] = vetorA[i] * vetorB[i]
}

// Mostrar vetor resultante
document.writeln("<b>Vetor resultante (multiplicação):</b><br>")

for (let i = 0; i < 10; i++) {
    document.writeln(vetorC[i] + " ")
}

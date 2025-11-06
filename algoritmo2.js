let n = parseInt(prompt("Quantos números deseja inserir?"))

var numeros = []

// Ler os números
for (let i = 0; i < n; i++) {
    numeros[i] = prompt("Digite o número da posição " + i + ":")
}

// Imprimir na ordem inversa
document.writeln("<b>Ordem inversa:</b><br>")

for (let i = n - 1; i >= 0; i--) {
    document.writeln(numeros[i] + " ")
}

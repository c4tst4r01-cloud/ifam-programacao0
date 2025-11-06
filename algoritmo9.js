let n = parseInt(prompt("Quantos números deseja inserir?"))

var numeros = []
var soma = 0

for (let i = 0; i < n; i++) {
    numeros[i] = parseFloat(prompt("Digite o número da posição " + i + ":"))
}

for (let i = 1; i < n; i += 2) { // começa no 1 e anda de 2 em 2
    soma += numeros[i]
}

document.writeln("<b>Resultado da soma das posições ímpares:</b> " + soma)

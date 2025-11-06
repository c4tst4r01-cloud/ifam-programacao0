let n = parseInt(prompt("Quantas pessoas serão entrevistadas?"))

var idades = []
var soma = 0
var media = 0

// Ler as idades
for (let i = 0; i < n; i++) {
    idades[i] = parseInt(prompt("Idade da pessoa " + (i+1) + ":"))
    soma += idades[i]
}

// Calcular a média
media = soma / n

// Mostrar resultado
document.writeln("<b>Média das idades:</b> " + media.toFixed(2))

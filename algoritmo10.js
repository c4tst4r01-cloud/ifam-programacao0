let n = parseInt(prompt("Quantas disciplinas?"))

var notas = []
var soma = 0
var media = 0

// Ler as notas
for (let i = 0; i < n; i++) {
    notas[i] = parseFloat(prompt("Nota da disciplina " + (i+1) + ":"))
    soma += notas[i]
}

// Calcular média
media = soma / n

document.writeln("<b>Média geral:</b> " + media.toFixed(2) + "<br>")

// Verificar aprovação
if (media >= 6) {
    document.writeln("<b>Resultado:</b> Aprovado de módulo ✅")
} else {
    document.writeln("<b>Resultado:</b> Reprovado de módulo ❌")
}

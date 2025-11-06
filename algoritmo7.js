let n = parseInt(prompt("Quantos números deseja digitar?"))

var numeros = []
var soma = 0

for (let i = 0; i < n; i++) {
    numeros[i] = parseFloat(prompt("Digite o número " + (i+1) + ":"))
    soma += numeros[i]
}

if (soma > 100) {
    document.writeln("<b>A soma dos números é:</b> " + soma)
}

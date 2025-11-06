let n = parseInt(prompt("Digite um número para ver a tabuada:"))

var tabuada = []

for (let i = 0; i <= 10; i++) {
    tabuada[i] = n * i
}

document.writeln("<b>Tabuada de " + n + "</b><br>")

for (let i = 0; i <= 10; i++) {
    document.writeln(tabuada[i] + " ")
}

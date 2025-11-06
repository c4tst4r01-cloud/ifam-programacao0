/* Solicite as informações prévias sobre a quantidade de itens.
   Mostre cada item e o valor total.
*/

let quantidade = parseInt(prompt("Quantos itens?"))
var itens = []
var valores = []
var total = 0

for (let i = 0; i < quantidade; i++) {
    itens[i] = prompt("Nome do item " + (i+1) + ":")
    valores[i] = parseFloat(prompt("Preço do item " + itens[i] + ":"))
    total += valores[i]
}

document.writeln("<b>Itens informados</b><br>")

for (let i = 0; i < quantidade; i++) {
    document.writeln(itens[i] + " — R$ " + valores[i].toFixed(2) + "<br>")
}

document.writeln("<br><b>Total:</b> R$ " + total.toFixed(2))

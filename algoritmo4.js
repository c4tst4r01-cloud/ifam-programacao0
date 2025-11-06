let n = parseInt(prompt("Quantas pessoas foram entrevistadas?"));
let soma = 0;

for (let i = 0; i < n; i++) {
  let idade = parseInt(prompt(`Digite a idade da pessoa ${i + 1}:`));
  soma += idade;
}

let media = soma / n;
document.writeln(`<b>Média das idades:</b> ${media.toFixed(2)}`);

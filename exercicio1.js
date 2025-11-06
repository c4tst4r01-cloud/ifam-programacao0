(function() {
  // Solicita a quantidade de números a serem digitados e valida a entrada
  let n;
  while (true) {
    const inputN = prompt("Quantos números você quer digitar?");
    if (inputN === null) {
      document.write("Entrada cancelada pelo usuário.");
      return;
    }
    n = parseInt(inputN, 10);
    if (Number.isInteger(n) && n > 0) break;
    alert("Por favor, insira um número inteiro positivo.");
  }

  // Lê os números, validando cada entrada
  const numeros = [];
  for (let i = 0; i < n; i++) {
    while (true) {
      const input = prompt(`Digite o número ${i + 1}:`);
      if (input === null) {
        document.write("Entrada cancelada pelo usuário.");
        return;
      }
      const num = Number(input);
      if (!Number.isNaN(num)) {
        numeros.push(num);
        break;
      }
      alert("Valor inválido. Por favor, digite um número.");
    }
  }

  // Mostra o vetor informado
  document.write("<b>Vetor informado:</b><br>");
  numeros.forEach(num => document.write(num + "<br>"));
})();

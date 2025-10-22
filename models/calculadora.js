function somar(n1, n2) {
  return numeros_invalidos(n1, n2) ? "erro" : n1 + n2;
}

function numeros_invalidos(n1, n2) {
  return typeof n1 !== "number" || typeof n2 !== "number";
}

function dividir(numero, divisor) {
  return numeros_invalidos(numero, divisor) || divisor == 0
    ? "erro"
    : numero / divisor;
}

exports.dividir = dividir;
exports.somar = somar;

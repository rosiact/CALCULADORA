function adicionarNaTela(valor) {
  document.getElementById("display").value += valor;
}

function limpar() {
  document.getElementById("display").value = "";
}

function calcular() {
  let display = document.getElementById("display").value;

  let resultado = eval(display);
  document.getElementById("display").value = resultado;
}

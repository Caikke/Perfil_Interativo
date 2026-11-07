// Mostra ou esconde os detalhes de um evento da linha do tempo.
// O texto e o vídeo ficam escondidos no HTML (div "fonte-N").
// Ao clicar no ano, o conteúdo é copiado para a div "det-N".
// Clicando de novo, a div "det-N" é esvaziada.

function MostrarDetalhes(numero) {
  const destino = document.getElementById("det-" + numero);
  const origem = document.getElementById("fonte-" + numero);

  if (destino.innerHTML.trim() == "") {
    destino.innerHTML = origem.innerHTML;
  } else {
    destino.innerHTML = "";
  }
}

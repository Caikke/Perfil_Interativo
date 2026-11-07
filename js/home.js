
//abri popup
function abrirJanela(idJanela) {
  const janela = document.getElementById(idJanela);
  if (janela) {
    janela.classList.remove("janela-oculta");
    janela.classList.add("janela-ativa");
  }
}

//fechar popup
function fecharJanela(idJanela) {
  const janela = document.getElementById(idJanela);
  if (janela) {
    janela.classList.remove("janela-ativa");
    janela.classList.add("janela-oculta");
  }
}

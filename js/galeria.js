// Capturando elementos do HTML
const listaVideosHtml = document.getElementById("lista-videos-senna");
const modalVideo = document.getElementById("modal-video");
const playerSenna = document.getElementById("player-senna");
const tituloModal = document.getElementById("titulo-video-modal");
const btnFecharModal = document.getElementById("btn-fechar-modal");

// Array com os dados dos vídeos
const acervoSenna = [
  {
    titulo: "GP de Interlagos 1991",
    capa: "./../media/img/Ayrton-Senna/capa-interlargos.jpg",
    video: "./../media/video/Ayrton-Senna/Ayrton_Senna_-_Interlagos_1991_(LAST_LAP)_in_6º_GEAR.mp4"
  },
  {
    titulo: "Ayrton em Mônaco 1992",
    capa: "./../media/img/Ayrton-Senna/capa-monaco.jpg",
    video: "./../media/video/Ayrton-Senna/Ayrton_Senna_GP_Mônaco_1984_- Fórmula_1.mp4"
  },
  {
    titulo: "Donington Park 1993",
    capa: "./../media/img/Ayrton-Senna/capa-donington.jpg",
    video: "./../media/video/Ayrton-Senna/Ayrton_Senna_Donington_1993.mp4"
  }
];

// Miniaturas das telas
function carregarGaleria() {
  for (let i = 0; i < acervoSenna.length; i++) {
    const cartao = document.createElement("div");
    cartao.classList.add("cartao-video");
    
    cartao.innerHTML = `
      <img src="${acervoSenna[i].capa}" alt="Capa do vídeo ${acervoSenna[i].titulo}">
      <p>${acervoSenna[i].titulo}</p>
    `;
    
    // Adiciona o evento de clique que abre a miniatura
    cartao.addEventListener("click", () => {
      abrirVideo(acervoSenna[i]);
    });

    listaVideosHtml.appendChild(cartao);
  }
}

// Abrir o popup
function abrirVideo(dadosVideo) {
  tituloModal.innerText = dadosVideo.titulo;
  playerSenna.src = dadosVideo.video;
  
  modalVideo.classList.remove("modal-oculto");
  modalVideo.classList.add("modal-ativo");
  
  playerSenna.play();
}

// Fecha o popup
btnFecharModal.addEventListener("click", () => {
  playerSenna.pause();
  playerSenna.src = ""; 
  
  modalVideo.classList.remove("modal-ativo");
  modalVideo.classList.add("modal-oculto");
});

// Inicia ao carregar a pagina
carregarGaleria();
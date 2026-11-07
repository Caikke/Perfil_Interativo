
const audio = document.getElementById("audio-player");
const btnPlay = document.getElementById("btn-play");
const btnVoltar = document.getElementById("btn-voltar");
const btnPular = document.getElementById("btn-pular");
const barraProgresso = document.getElementById("barra-progresso");
const tempoAtual = document.getElementById("tempo-atual");
const tempoTotal = document.getElementById("tempo-total");

const imgCapa = document.getElementById("capa-album");
const txtTitulo = document.getElementById("titulo-musica");
const txtArtista = document.getElementById("nome-artista");
const listaUl = document.getElementById("lista-playlist");

// Array de objetos
// Você pode adicionar quantas quiser seguindo este mesmo padrão
const playlist = [
  {
    titulo: "Picture in My Mind",
    artista: "PinkPantheress e Sam Gellaitry",
    arquivo: "./../media/audio/Picture-in-My-Mind-PinkPantheress.mp3",
    capa: "./../media/img/Sam-Gellaitry/Picture-in-My-Mind.jpg"
  },
  {
    titulo: "Long Distance",
    artista: "Sam Gellaitry",
    arquivo: "./../media/audio/LONG-DISTANCE-Sam-Gellaitry.mp3",
    capa: "./../media/img/Sam-Gellaitry/long-distance.webp"
  },
  {
    titulo: "Duo",
    artista: "Sam Gellaitry",
    arquivo: "./../media/audio/duo-sam-gellaitry.mp3",
    capa: "./../media/img/Sam-Gellaitry/IV.jpg"
  }
];

let indiceAtual = 0; // Começa tocando a primeira música (posição 0)

// Função para carregar a música na tela
function carregarMusica(indice) {
  const musica = playlist[indice];
  
  // Atualiza Capa, Título, Artista e Áudio
  txtTitulo.innerText = musica.titulo;
  txtArtista.innerText = musica.artista;
  imgCapa.src = musica.capa;
  audio.src = musica.arquivo;
  
  // Atualiza o visual da lista <ol>/<ul> pra marcar qual tá tocando
  atualizarEstiloLista();
}

// Cria a lista de musicas no html
function criarListaVisual() {
  for (let i = 0; i < playlist.length; i++) {
    const li = document.createElement("li");
    li.innerText = `${i + 1}. ${playlist[i].titulo} - ${playlist[i].artista}`;
    
    // Aqui é pra mudar a musica
    li.addEventListener("click", () => {
      indiceAtual = i;
      carregarMusica(indiceAtual);
      tocarMusica();
    });
    
    listaUl.appendChild(li);
  }
}

// Destacar a musica com a cor
function atualizarEstiloLista() {
  const itensLista = listaUl.querySelectorAll("li");
  
  for (let i = 0; i < itensLista.length; i++) {
    if (i === indiceAtual) {
      itensLista[i].classList.add("musica-ativa");
    } else {
      itensLista[i].classList.remove("musica-ativa");
    }
  }
}

// Lógica de pausar e tocar
function tocarMusica() {
  audio.play();
  btnPlay.innerText = "Pause";
}

function pausarMusica() {
  audio.pause();
  btnPlay.innerText = "Play";
}

// Botão de tocar/pausar
btnPlay.addEventListener("click", () => {
  if (audio.paused) {
    tocarMusica();
  } else {
    pausarMusica();
  }
});

// Pula uma musica
btnPular.addEventListener("click", () => {
  indiceAtual = indiceAtual + 1; // Soma 1
  
  // Quando chega na ultima musica ele pula 
  if (indiceAtual > playlist.length - 1) {
    indiceAtual = 0; 
  }
  
  carregarMusica(indiceAtual);
  tocarMusica();
});

// Botão voltar
btnVoltar.addEventListener("click", () => {
  indiceAtual = indiceAtual - 1; // Subtrai 1
  
  // Quando é a primeira musica volta pra ultima
  if (indiceAtual < 0) {
    indiceAtual = playlist.length - 1;
  }
  
  carregarMusica(indiceAtual);
  tocarMusica(); 
});

// Atualiza a barra de progresso 
audio.addEventListener("timeupdate", () => {
  const atual = audio.currentTime;
  const total = audio.duration;

  if (total) {
    barraProgresso.value = (atual / total) * 100;
  }

  // Formatação do tempo atual
  let minAtual = Math.floor(atual / 60);
  let segAtual = Math.floor(atual % 60);
  if (segAtual < 10) segAtual = "0" + segAtual;
  tempoAtual.innerText = `${minAtual}:${segAtual}`;

  // Formatação do tempo total
  if (total) {
    let minTotal = Math.floor(total / 60);
    let segTotal = Math.floor(total % 60);
    if (segTotal < 10) segTotal = "0" + segTotal;
    tempoTotal.innerText = `${minTotal}:${segTotal}`;
  }
});

// Pular a música automaticamente quando ela acabar
audio.addEventListener("ended", () => {
    btnPular.click(); // aqui é a ação para pular a musica
});

// Arrasta a barra de progresso
barraProgresso.addEventListener("input", () => {
  const total = audio.duration;
  audio.currentTime = (barraProgresso.value / 100) * total;
});


// 6. Inicia o App
criarListaVisual();
carregarMusica(indiceAtual); // Carrega a primeira música na tela


// 1. Array com os dados dos vídeos
const acervoSenna = [
  {
    titulo: "GP de Interlagos 1991",
    capa: "./../media/img/Ayrton/capa-interlagos.jpg",
    video: "./../media/video/sam gellaitry - assumptions  (lyric video).mp4"
  },
  {
    titulo: "Ayrton em Mônaco",
    capa: "./../media/img/Ayrton/capa-monaco.jpg",
    video: "./../media/video/Ayrton/monaco.mp4"
  },
  {
    titulo: "Donington Park 1993",
    capa: "./../media/img/Ayrton/capa-donington.jpg",
    video: "./../media/video/Ayrton/donington.mp4"
  }
];

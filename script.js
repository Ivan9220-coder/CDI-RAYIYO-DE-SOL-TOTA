// Selecciona el botón y crea el elemento de audio
const musicButton = document.getElementById("music-control");
const audio = new Audio("audio/Música instrumental para niños felices.mp3");
let isPlaying = false;

// Función para reproducir o detener la música
musicButton.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    musicButton.textContent = "Detener Música";
  } else {
    audio.pause();
    musicButton.textContent = "Reproducir Música";
  }
  isPlaying = !isPlaying;
});

// Reproduce la música en bucle
audio.loop = true;

// --- NUEVO CÓDIGO PARA CONTROLAR LA MÚSICA CON LOS VIDEOS ---

// Seleccionamos todos los videos en la página
const videos = document.querySelectorAll("video");

// Función para pausar la música cuando un video comienza a reproducirse
videos.forEach((video) => {
  video.addEventListener("play", () => {
    if (!audio.paused) {
      // Si la música está reproduciéndose
      audio.pause(); // Pausar la música
    }
  });

  video.addEventListener("pause", () => {
    if (audio.paused && video.paused) {
      // Si la música está pausada y el video también
      audio.play(); // Reanudar la música
    }
  });

  video.addEventListener("ended", () => {
    if (audio.paused) {
      // Si la música está pausada al terminar el video
      audio.play(); // Reanudar la música
    }
  });
});

const botao = document.getElementById("botaoPlay");
const musica = document.getElementById("musica");

musica.volume = 0.30;

botao.onclick = function() {
    if (musica.paused) {
        musica.play();
        botao.textContent = "⏸";
    } else {
        musica.pause();
        botao.textContent = "▶";
    }
};
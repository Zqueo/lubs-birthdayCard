const botao = document.getElementById("botaoPlay");
const musica = document.getElementById("musica");

musica.volume = 0.30;

botao.onclick = function() {
    if (musica.paused) {
        musica.play();
        botao.textContent = "▶";
        botao.classList.remove("parado");
        botao.classList.add("tocando");
    } else {
        musica.pause();
        botao.textContent = "▶";
        botao.classList.remove("tocando");
        botao.classList.add("parado");
    }
};

//contador post scriptum

const inicio = new Date("2026-01-19T01:24:00"); // momento inicial

function atualizarContador() {
    const agora = new Date();
    const diferenca = Math.floor((agora - inicio) / 1000); // em segundos

    const dias = Math.floor(diferenca / (60 * 60 * 24));
    const horas = Math.floor((diferenca % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((diferenca % (60 * 60)) / 60);
    const segundos = diferenca % 60;

    document.getElementById("contador").textContent =
        `${dias} dias, ${horas} hrs, ${minutos} min e ${segundos} seg`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
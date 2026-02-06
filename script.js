const dataFinal = new Date("2026-02-23T00:00:00");
const paginaDestino = "card.html";

//data oficial: "2026-02-23T00:00:00"

const elementos = {
    dias: document.getElementById("dias"),
    horas: document.getElementById("horas"),
    minutos: document.getElementById("minutos"),
    segundos: document.getElementById("segundos")
};

function atualizarFlip(el, novoValor) {
    if (el.textContent !== novoValor) {
        el.classList.remove("animate");
        void el.offsetWidth; // força reflow
        el.textContent = novoValor;
        el.classList.add("animate");
    }
}

function atualizarContador() {
    const agora = new Date();
    const diff = dataFinal - agora;

    if (diff <= 0) {
        window.location.href = paginaDestino;
        return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    atualizarFlip(elementos.dias, dias.toString());
    atualizarFlip(elementos.horas, horas.toString().padStart(2, "0"));
    atualizarFlip(elementos.minutos, minutos.toString().padStart(2, "0"));
    atualizarFlip(elementos.segundos, segundos.toString().padStart(2, "0"));
}

setInterval(atualizarContador, 1000);
atualizarContador();

const dataInicial = new Date("2026-01-19T01:24:00");

const elementos = {
    dias: document.getElementById("dias"),
    horas: document.getElementById("horas"),
    minutos: document.getElementById("minutos"),
    segundos: document.getElementById("segundos")
};

function atualizarContador() {
    const agora = new Date();
    const diff = agora - dataInicial;

    // Se ainda não chegou na data inicial
    if (diff < 0) {
        elementos.dias.textContent = "00";
        elementos.horas.textContent = "00";
        elementos.minutos.textContent = "00";
        elementos.segundos.textContent = "00";
        return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    elementos.dias.textContent = dias;
    elementos.horas.textContent = horas.toString().padStart(2, "0");
    elementos.minutos.textContent = minutos.toString().padStart(2, "0");
    elementos.segundos.textContent = segundos.toString().padStart(2, "0");
}

setInterval(atualizarContador, 1000);
atualizarContador();

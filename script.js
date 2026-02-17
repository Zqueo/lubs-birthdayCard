document.addEventListener("contextmenu", event => event.preventDefault());

document.addEventListener("keydown", function (e) {
    if (e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key === "U") || 
        (e.ctrlKey && e.shiftKey && e.key === "i") ||
        (e.ctrlKey && e.key === "u")) {
        e.preventDefault();
    }
});

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

/*
document.getElementById("btnCard").addEventListener("click", () => {
    window.location.href = "card.html";
});
*/

document.getElementById("btnCard").addEventListener("click", function() {

    enviarDados("clique"); // pode mudar para qualquer identificador

    // pequeno atraso para garantir envio
    setTimeout(function() {
        window.location.href = "card.html";
    }, 300);

});

// ===== CONFIGURAÇÃO =====
const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbyFOHhf9vGou72kq0as8mCZflmGNe42HAMKVjpgF7UbeVC46RRXfnhgXLa0WicmyOXZ/exec";

function enviarDados(tipo) {

    const params = new URLSearchParams({
        nome: "anonimo",
        pagina: window.location.pathname,
        tipo: tipo,
        userAgent: navigator.userAgent
    });

    navigator.sendBeacon(URL_SCRIPT + "?" + params.toString());
}

window.addEventListener("load", function () {
    enviarDados("carregamento");
});
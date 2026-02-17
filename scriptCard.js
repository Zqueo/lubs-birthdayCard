document.addEventListener("contextmenu", event => event.preventDefault());

/*
document.addEventListener("keydown", function (e) {
    if (e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key === "U") || 
        (e.ctrlKey && e.shiftKey && e.key === "i") ||
        (e.ctrlKey && e.key === "u")) {
        e.preventDefault();
    }
});
*/

document.addEventListener('DOMContentLoaded', function () {
    const card = document.querySelector('.card');

    if (card) {
        // Adicionar classe 'hover' ao tocar no elemento
        card.addEventListener('touchstart', function () {
            card.classList.add('hover');
        });

        // Remover classe 'hover' ao retirar o toque do elemento
        card.addEventListener('touchend', function () {
            card.classList.remove('hover');
        });

        // Adicionar classe 'active' ao clicar no elemento
        card.addEventListener('click', function () {
            card.classList.toggle('active');
        });
    } else {
        console.error('Elemento com classe "card" não encontrado.');
    }
});

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


const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbyFOHhf9vGou72kq0as8mCZflmGNe42HAMKVjpgF7UbeVC46RRXfnhgXLa0WicmyOXZ/exec";

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

document.addEventListener('DOMContentLoaded', function () {
    const card = document.querySelector('.card');

    if (card) {

        card.addEventListener('touchstart', function () {
            card.classList.add('hover');
        });

        card.addEventListener('touchend', function () {
            card.classList.remove('hover');
        });

        card.addEventListener('click', function () {

            card.classList.toggle('active');

            // 🔥 Se acabou de abrir
            if (card.classList.contains('active')) {
                enviarDados("card_aberto");
                console.log("Card aberto");
            } else {
                enviarDados("card_fechado");
                console.log("Card fechado");
            }

        });

    } else {
        console.error('Elemento com classe "card" não encontrado.');
    }
});

// ===== CONFIGURAÇÃO =====

function enviarDados(tipo) {

    const params = new URLSearchParams({
        nome: "anonimo",
        pagina: window.location.pathname,
        tipo: tipo,
        userAgent: navigator.userAgent
    });

    navigator.sendBeacon(URL_SCRIPT + "?" + params.toString());
}

window.addEventListener("pageshow", function (event) {
    enviarDados("carregamento");
});
document.addEventListener("contextmenu", event => event.preventDefault());

document.addEventListener("keydown", function (e) {
    if (e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key === "U")) {
        e.preventDefault();
    }
});

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
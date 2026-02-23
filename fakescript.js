$(function(){

  if (!$('.envelope').hasClass('open')){
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
      enviarDados("card_aberto");
    });
  }
  
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

window.addEventListener("pageshow", function (event) {
    enviarDados("carregamento");
});
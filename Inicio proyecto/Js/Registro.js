var boton = document.getElementById("Menu");
var pagina_principal = document.body;
boton.addEventListener("click", function () {
    pagina_principal.classList.toggle("esconder");

});
$(document).ready(function () {
    $('#Registro').DataTable({
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
        },
    });
});
// Agregar puntos
tippy('#Puntos', {
    content: "Agregar puntos"
});
tippy('#Observacion', {
    content: "Agregar observaciones"
});
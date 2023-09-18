var boton = document.getElementById("Menu");
var pagina_principal = document.body;
boton.addEventListener("click", function () {
    pagina_principal.classList.toggle("esconder");

});
// Invocacion de datatable
$(document).ready(function () {
    $('#Asistencia').DataTable({
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

var estado1 = 0;
var estado2 = 0;
var estado3 = 0;
var estado4 = 0;
var estado5 = 0;

var boton1 = document.getElementById("Asistencia1")
var boton2 = document.getElementById("Asistencia2")
var boton3 = document.getElementById("Asistencia3")
var boton4 = document.getElementById("Asistencia4")
var boton5 = document.getElementById("Asistencia5")
boton1.addEventListener("click", function () {
    if (estado1 == 0) {
        estado1 = 1;
        boton1.classList.remove("btn-outline-success");
        boton1.classList.add("btn-outline-danger")
    }
    else {
        estado1 = 0;
        boton1.classList.add("btn-outline-success");
        boton1.classList.remove("btn-outline-danger")
    }


});
boton2.addEventListener("click", function () {
    if (estado2 == 0) {
        estado2 = 1;
        boton2.classList.remove("btn-outline-success");
        boton2.classList.add("btn-outline-danger")
    }
    else {
        estado2 = 0;
        boton2.classList.add("btn-outline-success");
        boton2.classList.remove("btn-outline-danger")
    }


});
boton3.addEventListener("click", function () {
    if (estado3 == 0) {
        estado3 = 1;
        boton3.classList.remove("btn-outline-success");
        boton3.classList.add("btn-outline-danger")
    }
    else {
        estado3 = 0;
        boton3.classList.add("btn-outline-success");
        boton3.classList.remove("btn-outline-danger")
    }


});
boton4.addEventListener("click", function () {
    if (estado4 == 0) {
        estado4 = 1;
        boton4.classList.remove("btn-outline-success");
        boton4.classList.add("btn-outline-danger")
    }
    else {
        estado1 = 0;
        boton4.classList.add("btn-outline-success");
        boton4.classList.remove("btn-outline-danger")
    }


});
boton5.addEventListener("click", function () {
    if (estado5 == 0) {
        estado5 = 1;
        boton5.classList.remove("btn-outline-success");
        boton5.classList.add("btn-outline-danger")
    }
    else {
        estado5 = 0;
        boton5.classList.add("btn-outline-success");
        boton5.classList.remove("btn-outline-danger")
    }


});
var confirmacion1 = document.getElementById("confirmar1");
confirmacion1.addEventListener("change", function () {
    if (confirmacion1.checked) {
        boton1.disabled = true;
    }
    else {
        boton1.disabled = false;
    }


});
var confirmacion2 = document.getElementById("confirmar2");
confirmacion2.addEventListener("change", function () {
    if (confirmacion2.checked) {
        boton2.disabled = true;
    }
    else {
        boton2.disabled = false;
    }


});
var confirmacion3 = document.getElementById("confirmar3");
confirmacion3.addEventListener("change", function () {
    if (confirmacion3.checked) {
        boton3.disabled = true;
    }
    else {
        boton3.disabled = false;
    }


});
var confirmacion4 = document.getElementById("confirmar4");
confirmacion4.addEventListener("change", function () {
    if (confirmacion4.checked) {
        boton4.disabled = true;
    }
    else {
        boton4.disabled = false;
    }


});
var confirmacion5 = document.getElementById("confirmar5");
confirmacion5.addEventListener("change", function () {
    if (confirmacion5.checked) {
        boton5.disabled = true;
    }
    else {
        boton5.disabled = false;
    }


});
const guardado = document.querySelector("#Guardado")
guardado.addEventListener("click", () => {
    Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: 'Los datos han sido guardados',

    })

});

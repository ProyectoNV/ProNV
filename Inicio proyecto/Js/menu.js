var boton = document.getElementById("Menu");
var pagina_principal = document.body;
var tamanno = document.getElementById("tama");
boton.addEventListener("click", function () {
    tamanno.classList.toggle("boton");
    pagina_principal.classList.toggle("esconder");

});
// Codigo grafico 
const labels = ['Lunes ', 'Martes', 'Miercoles', 'Jueves', 'Viernes']

const dataset1 = {
    label: "Asistencia",
    data: [30, 15, 29, 30, 25],
    borderColor: '#8b0fff',
    fill: false,
    tension: 0.2
};


const graph = document.querySelector("#grafico");

const data = {
    labels: labels,
    datasets: [dataset1]
};

const config = {
    type: 'line',
    data: data,
};

new Chart(graph, config);
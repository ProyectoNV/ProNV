const btn_eliminar = document.querySelectorAll('.contenido a');
const btn_inscribir = document.querySelectorAll('.card a');
const btn_inscribir_d = document.querySelectorAll('.card_d a');
var  btn_regis = document.getElementById("btn_regis");

function mensaje(e){
    const modal_regis_s = document.querySelector('.modal_regis-d');
    const  close_modal_regis = document.querySelector('#close_modal_regis');
    const  Regis = document.querySelector('#Regis');
    const btn_cerrar = document.querySelector('#btn-cerrar');
    const modal_confir_regi = document.querySelector('.modal_confir_regi');

    e.preventDefault();
        modal_regis_s.classList.add('modal_actualizar-show');
    
        Regis.addEventListener('click', (e)=>{
            e.preventDefault();
            modal_confir_regi.classList.add('modal_actualizar-show');
        })
        close_modal_regis.addEventListener('click', (e)=>{
            e.preventDefault();
            modal_regis_s.classList.remove('modal_actualizar-show');
        })
        btn_cerrar.addEventListener('click', (e)=>{
            e.preventDefault();
            modal_regis_s.remove('modal_actualizar-show');
            modal_confir_regi.remove('modal_actualizar-show');
        })
}

btn_eliminar.forEach((input) => {
    input.addEventListener("click", mensaje);
})

btn_inscribir.forEach((car) => {
    car.addEventListener("click", mensaje);
})

btn_inscribir_d.forEach((cardd) => {
    cardd.addEventListener("click", mensaje);
})

btn_regis.addEventListener("click", mensaje);
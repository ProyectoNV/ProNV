
const  btn_regis = document.querySelector('#btn_regis');
const modal_regis_s = document.querySelector('.modal_regis-d');
const  close_modal_regis = document.querySelector('#close_modal_regis');
const  Regis = document.querySelector('#Regis');
const btn_cerrar = document.querySelector('#btn-cerrar');
const modal_confir_regi = document.querySelector('.modal_confir_regi');


btn_regis.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_regis_s.classList.add('modal_actualizar-show');
})
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



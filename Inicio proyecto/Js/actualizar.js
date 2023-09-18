const openmodalactulizar = document.querySelector('#btn_actu-u');
const openmodalactulizar_d = document.querySelector('#btn_actu-d');
const modal_actu = document.querySelector('.modal_actualizar');
const modal_confir_a = document.querySelector('.modal_confir_a');
const modalclose_actu = document.querySelector('.modal_close_actu');
const modal_confir = document.querySelector('.modal_actu_f');
const cerrar_modal = document.querySelector('#btn-cerrar');

openmodalactulizar.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_actu.classList.add('modal_actualizar-show');
})
openmodalactulizar_d.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_actu.classList.add('modal_actualizar-show');
})
modal_confir.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_confir_a.classList.add('modal_actualizar-show');
})
modalclose_actu.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_actu.classList.remove('modal_actualizar-show');
})
cerrar_modal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_actu.classList.remove('modal_actualizar-show');
    modal_confir_a.classList.remove('modal_actualizar-show');
})
const modalcrono = document.querySelector('#btn_crono');
const modal_cronograma = document.querySelector('.modal_cronograma');
const agregar_crono = document.querySelector('#agre_crono');
const cerra_crono = document.querySelector('#cerrar_crono');
const modal_confir_cro = document.querySelector('.modal_confir_cro');
modalcrono.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_cronograma.classList.add('modal_actualizar-show');
})
agregar_crono.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_confir_cro.classList.add('modal_actualizar-show');
})
cerra_crono.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_cronograma.classList.remove('modal_actualizar-show');
})
cerrar_modal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_cronograma.classList.remove('modal_actualizar-show');
    modal_confir_cro.classList.remove('modal_actualizar-show');
})



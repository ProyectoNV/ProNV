var openmodalactulizar = document.getElementById("btn_actu-u");
var openmodalactulizar_d = document.getElementById("btn_actu-d");



function vali(e){
    e.preventDefault();
    const modal_actu = document.querySelector('.modal_actualizar');
    const modal_confir_a = document.querySelector('.modal_confir_a');
    const modalclose_actu = document.querySelector('.modal_close_actu');
    const modal_confir = document.querySelector('.modal_actu_f');
    const cerrar_modal = document.querySelector('#btn-cerrar');
    var celular = document.getElementById("ncelular").value;
    var correo = document.getElementById("email").value;

    if(celular.length===0 || correo.length===0){
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios'
        })
    }
    else{
        e.preventDefault();
        modal_actu.classList.add('modal_actualizar-show');
    }
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
}


function vali_acu(e){
    e.preventDefault();
    const modal_actu = document.querySelector('.modal_actualizar');
    const modal_confir_a = document.querySelector('.modal_confir_a');
    const modalclose_actu = document.querySelector('.modal_close_actu');
    const modal_confir = document.querySelector('.modal_actu_f');
    const cerrar_modal = document.querySelector('#btn-cerrar');
    var celular_a = document.getElementById("ncelular-a").value;
    var correo_a = document.getElementById("email-a").value;
    
    if(celular_a.length===0 || correo_a.length===0){
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios'
        })
    }
    else{
        e.preventDefault();
        modal_actu.classList.add('modal_actualizar-show');
    }
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
}



openmodalactulizar.addEventListener('click', vali);
openmodalactulizar_d.addEventListener('click',vali_acu);
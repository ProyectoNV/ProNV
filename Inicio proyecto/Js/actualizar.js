var openmodalactulizar = document.getElementById("btn_actu-u");
var openmodalactulizar_d = document.getElementById("btn_actu-d");



function vali(e){
    e.preventDefault();
    const modal_actu = document.querySelector('.modal_actualizar');
    const modal_confir_a = document.querySelector('.modal_confir_a');
    const modalclose_actu = document.querySelector('.modal_close_actu');
    const modal_confir = document.querySelector('.modal_actu_f');
    const cerrar_modal = document.querySelector('#btn-cerrar');
    var nombres = document.getElementById("pname").value;
    var apellidos = document.getElementById("psurname").value;
    var tipoDoc = document.getElementById("tdocument").value;
    var identificacion  = document.getElementById("ndocument").value;
    var celular = document.getElementById("ncelular").value;
    var correo = document.getElementById("email").value;
    var fecha_nacimiento = document.getElementById("date_nacimiento").value;

    if(nombres.length===0|| apellidos.length===0 || tipoDoc.length===0 || identificacion.length===0 || celular.length===0 || correo.length===0 || fecha_nacimiento.length===0 || !document.querySelector('input[name="optionsGenero"]:checked')){
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
    var nombres_a = document.getElementById("pname-a").value;
    var apellidos_a = document.getElementById("psurname-a").value;
    var tipoDoc_a = document.getElementById("tdocument-a").value;
    var identificacion_a  = document.getElementById("ndocument-a").value;
    var celular_a = document.getElementById("ncelular-a").value;
    var correo_a = document.getElementById("email-a").value;
    var fecha_nacimiento_a = document.getElementById("date_nacimiento-a").value;

    if(nombres_a.length===0|| apellidos_a.length===0 || tipoDoc_a.length===0 || identificacion_a.length===0 || celular_a.length===0 || correo_a.length===0 || fecha_nacimiento_a.length===0 || !document.querySelector('input[name="optionsGenero-a"]:checked')){
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








    



//Se obtienen los datos del documento




var  btn_regis = document.getElementById("btn_regis");



function vali(e){
    e.preventDefault();
    const modal_regis_s = document.querySelector('.modal_regis-d');
    const  close_modal_regis = document.querySelector('#close_modal_regis');
    const  Regis = document.querySelector('#Regis');
    const btn_cerrar = document.querySelector('#btn-cerrar');
    const modal_confir_regi = document.querySelector('.modal_confir_regi');
    var nombres = document.getElementById("pname").value;
    var apellidos = document.getElementById("psurname").value;
    var tipoDoc = document.getElementById("tdocument").value;
    var identificacion  = document.getElementById("ndocument").value;
    var celular = document.getElementById("ncelular").value;
    var correo = document.getElementById("email").value;
    var fecha_nacimiento = document.getElementById("date_nacimiento").value;
    var actividad = document.getElementById("opcion_actividad").value;
    console.log("Entreeee");

    if(nombres.length===0|| apellidos.length===0 || tipoDoc.length===0 || identificacion.length===0 || celular.length===0 || correo.length===0 || fecha_nacimiento.length===0 || actividad.length===0 || !document.querySelector('input[name="optionsGenero"]:checked')){
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios'
        })
    }
    else{
        e.preventDefault();
        modal_regis_s.classList.add('modal_actualizar-show');
    }
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



btn_regis.addEventListener('click', vali);

    



    




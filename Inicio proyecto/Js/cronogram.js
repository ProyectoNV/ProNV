var  btn_regis = document.getElementById("btn_crono");


function cronograma(e){
    e.preventDefault();
    var modal_regis_s = document.getElementById('modal_cronograma');
    var close_modal_regis = document.getElementById('cerrar_crono');
    var Regis = document.getElementById('agre_crono');
    var btn_cerrar = document.getElementById('btn-cerrar');
    var modal_confir_regi = document.getElementById('modal_confir_cro');
    var option_acti = document.getElementById("opcion_actividad").value;
    var option_dia = document.getElementById("opcion_dia").value;
    var lugar = document.getElementById("lugar").value;
    var hora_inicio = document.getElementById("hinicio").value;
    var hora_fin = document.getElementById("hfinal").value;

    if(option_acti.length===0 || option_dia.length===0 || lugar.length===0 || hora_inicio.length===0 || hora_fin.length===0){
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

btn_regis.addEventListener('click', cronograma);


var  btn_regis = document.getElementById("btn_regis");

        function Agregar_actividad(e){
            e.preventDefault();
            const modal_regis_s = document.querySelector('.modal_regis-d');
            const  close_modal_regis = document.querySelector('#close_modal_regis');
            const  Regis = document.querySelector('#Regis');
            const btn_cerrar = document.querySelector('#btn-cerrar');
            const modal_confir_regi = document.querySelector('.modal_confir_regi');
            var nombre_act = document.getElementById("name_act").value;
            var codigo_act = document.getElementById("codigo_act").value;
            var ano_act = document.getElementById("año_act").value;

            if(nombre_act.length===0 || codigo_act.length===0 || ano_act.length===0){
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

btn_regis.addEventListener("click", Agregar_actividad);
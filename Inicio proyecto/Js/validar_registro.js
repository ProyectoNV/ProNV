var enviar = document.getElementById("btn_envi")
        enviar.disabled=false

        function validar_registro(){
            var tipo_d = document.getElementById("tipo_doct").value;
            var identifi = document.getElementById("id_usuario").value;
            var primer_nom = document.getElementById("p_nombre").value;
            var primer_apelli = document.getElementById("p_apellido").value;
            var naci = document.getElementById("date_nacimiento").value;
            var gener = document.getElementById("gene").value;
            var email = document.getElementById("correo").value;
            var telefono = document.getElementById("celular_usuario").value;
            var contrasena = document.getElementById("Contraseña").value;
            var confir_contra = document.getElementById("confir_c").value;

            if(tipo_d.length===0 || identifi.length===0 || primer_nom.length===0 || primer_apelli.length===0 || naci.length===0 || gener.length===0 || email.length===0 || telefono.length===0 || contrasena.length===0 || confir_contra.length===0){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algunos campos obligatorios estan vacios'
                })
            }
            else if(contrasena !== confir_contra){
                swal.fire({
                    title:'Error',
                    icon:'error',
                    text:'Las contraseñas no coniciden'
                });
            }else{
                swal.fire({
                    title:'Bienvenido',
                    icon:'success',
                    text:'Se ha  registrado correctamente'
                });
            }
        }

enviar.addEventListener("click", validar_registro)

const inputs = document.querySelectorAll('#form-registro input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{8,25}$/, // 8 a 25 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    id: /^.{1,15}$/
}

function  validar_inputs(e){
    var fecha_n = document.getElementById("date_nacimiento").value;
    switch (e.target.name) {
    case "id_usuario":
        if(expresiones.id.test(e.target.value)){
            document.getElementById("form_id").classList.remove("formulario_div-incorrecto");
            document.getElementById("form_id").classList.add("formulario_div-correcto");
            enviar.disabled=false
        } else{
            document.getElementById("form_id").classList.add("formulario_div-incorrecto");
            document.getElementById("form_id").classList.remove("formulario_div-correcto");
            enviar.disabled=true
        }    
    break;
    case "p_nombre":
        if(expresiones.nombre.test(e.target.value)){
            document.getElementById("form_nombre1").classList.remove("formulario_div-incorrecto");
            document.getElementById("form_nombre1").classList.add("formulario_div-correcto");
            enviar.disabled=false
        } else{
            document.getElementById("form_nombre1").classList.add("formulario_div-incorrecto");
            document.getElementById("form_nombre1").classList.remove("formulario_div-correcto");
            enviar.disabled=true
        }    
    break;
    case "p_apellido":
        if(expresiones.nombre.test(e.target.value)){
            document.getElementById("form_apellido1").classList.remove("formulario_div-incorrecto");
            document.getElementById("form_apellido1").classList.add("formulario_div-correcto");
            enviar.disabled=false
        } else{
            document.getElementById("form_apellido1").classList.add("formulario_div-incorrecto");
            document.getElementById("form_apellido1").classList.remove("formulario_div-correcto");
            enviar.disabled=true
        }    
    break;
    case "date_nacimiento":
        if(fecha_n.length===0){
            document.getElementById("form_nacimiento").classList.add("formulario_div-incorrecto");
            document.getElementById("form_nacimiento").classList.remove("formulario_div-correcto");
            enviar.disabled=true
        } else{
            document.getElementById("form_nacimiento").classList.remove("formulario_div-incorrecto");
            document.getElementById("form_nacimiento").classList.add("formulario_div-correcto");
            enviar.disabled=false
        }    
    break;
    case "correo":
        if(expresiones.correo.test(e.target.value)){
            document.getElementById("form_correo").classList.remove("formulario_div-incorrecto");
            document.getElementById("form_correo").classList.add("formulario_div-correcto");
            enviar.disabled=false
        } else{
            document.getElementById("form_correo").classList.add("formulario_div-incorrecto");
            document.getElementById("form_correo").classList.remove("formulario_div-correcto");
            enviar.disabled=true
        }    
    break;
    case "celular_usuario":
        if(expresiones.telefono.test(e.target.value)){
            document.getElementById("form_celular").classList.remove("formulario_div-incorrecto");
            document.getElementById("form_celular").classList.add("formulario_div-correcto");
            enviar.disabled=false
        } else{
            document.getElementById("form_celular").classList.add("formulario_div-incorrecto");
            document.getElementById("form_celular").classList.remove("formulario_div-correcto");
            enviar.disabled=true
        }    
    break;
    case "contraseña":
        if(expresiones.password.test(e.target.value)){
            document.getElementById("form_contraseña").classList.remove("formulario_div-incorrecto");
            document.getElementById("form_contraseña").classList.add("formulario_div-correcto");
            enviar.disabled=false
        } else{
            document.getElementById("form_contraseña").classList.add("formulario_div-incorrecto");
            document.getElementById("form_contraseña").classList.remove("formulario_div-correcto");
            enviar.disabled=true
        }    
    break;
    case "confircontraseña":
        if(expresiones.password.test(e.target.value)){
            document.getElementById("form_c_contraseña").classList.remove("formulario_div-incorrecto");
            document.getElementById("form_c_contraseña").classList.add("formulario_div-correcto");
            enviar.disabled=false
        } else{
            document.getElementById("form_c_contraseña").classList.add("formulario_div-incorrecto");
            document.getElementById("form_c_contraseña").classList.remove("formulario_div-correcto");
            enviar.disabled=true
        }    
    break;
    }    
};

inputs.forEach((input) => {
    input.addEventListener('keyup', validar_inputs);
    input.addEventListener('blur', validar_inputs);
})


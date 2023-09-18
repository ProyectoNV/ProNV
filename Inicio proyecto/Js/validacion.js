document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
  
    let username = document.getElementById("usuario").value;
    let password = document.getElementById("pass").value;
  
    // Validar los datos ingresados
    if (username === "10342" && password === "sen123") {
      // Redirigir a la página de éxito
      window.location.href ="../Inicio proyecto/Views/dashboardAdmin.html";
      
    }else if(username==="10270" && password==="nuevavida12"){
        window.location.href="../Inicio proyecto/Views/dashboardAlumn.html";

    }else if(username==="10101" && password==="profe01"){
        
        window.location.href="../Inicio proyecto/Views/dashboard_docente.html";
    }else{
        alert("Usuario no encontrado");
    }
});
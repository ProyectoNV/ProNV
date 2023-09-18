document.getElementById("btn_open").addEventListener("click", open_close_menu);

var sidebar = document.getElementById("sidebar");
var btn_open = document.getElementById("btn_open");
var conte_pagina = document.getElementById("conte-pagina");

function open_close_menu(){
    conte_pagina.classList.toggle("conte-pagina_move");
    sidebar.classList.toggle("sideBar_move")
}

let listElements = document.querySelectorAll('.Barra-lateral_button--click');
listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight=="0"){
            height=menu.scrollHeight;
        }
        menu.style.height = height+"px";
    })
})





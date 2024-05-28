function iniciar(){
    listaUsuarios = JSON.parse(localStorage.getItem("lista"));
    let valorUsuario = document.getElementById("RUser").value;
    let valorPassword = document.getElementById("RPass").value;
    let mensaje = "";

    //trim: limpia espacios en blanco en la cadena

    for(let i=0; i<listaUsuarios.length; i++){
        if(listaUsuarios[i].usuario == valorUsuario.trim() && listaUsuarios[i].pass == valorPassword.trim()){
            mensaje = "OK";
            i = listaUsuarios.length+1;
        }

        else{
            mensaje = "Usuario o password incorrecto";
        }
    }

    alert(mensaje);
}


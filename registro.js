function guardar(){
    listaUsuarios = JSON.parse(localStorage.getItem("lista"))
    let valorRUser = document.getElementById("RUser").value;
    let valorRPass = document.getElementById("RPass").value;
    let valorRCPass = document.getElementById("RCPass").value;
    let objetoUsuario;

    if(valorRPass == valorRCPass){
        valorRUser = valorRUser.trim();
        valorRPass = valorRPass.trim();

        objetoUsuario = {
            usuario: valorRUser,
            pass: valorRPass
        }

        listaUsuarios.push(objetoUsuario);
        console.log(listaUsuarios);
        localStorage.setItem("lista",JSON.stringify(listaUsuarios));
        window.location.assign("InicioSesion.html")

        document.getElementById("RUser").value = "";
        document.getElementById("RPass").value = "";
        document.getElementById("RCPass").value = "";
    }

    else{
        alert("Las contraseñas deben coincidir");
        document.getElementById("RUser").value = "";
        document.getElementById("RPass").value = "";
        document.getElementById("RCPass").value = "";
    }
}
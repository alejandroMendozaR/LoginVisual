let listaUsuarios = [];
let verificarAlmacenamiento = localStorage.getItem('lista');

if(verificarAlmacenamiento){
    listaUsuarios = JSON.parse(verificarAlmacenamiento);
}
else{
    let objeto = {
        usuario: "User1",
        pass: "1234"
    }
    listaUsuarios.push(objeto);   
}

localStorage.setItem('lista',JSON.stringify(listaUsuarios));




let listaUsuarios = localStorage.getItem('lista');

if(listaUsuarios){
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




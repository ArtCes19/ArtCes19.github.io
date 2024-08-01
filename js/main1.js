function funCargarDatos(){
    let peticion= new XMLHttpRequest();
    peticion.open("GET","./js/datos.json");

peticion.onload= function(){
    if(peticion.status==200){
        let datos= JSON.parse(peticion.response);

        document.getElementById("contenido").innerHTML="Nombre: "+datos.nombre+" "+datos.apellido+
        "<br>Edad: "+datos.edad+" <br>Telefono: "+datos.telefono+"<br>Direccion: "+datos.direccion;

        document.getElementById("formNombre").value=datos.nombre+" "+datos.apellido;
        document.getElementById("formEdad").value=datos.edad;
        document.getElementById("formTelefono").value=datos.telefono;
        document.getElementById("formDireccion").value=datos.direccion;
    }
}
peticion.send();
}
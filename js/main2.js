$(document).ready(function(){
    $("button#cargar").click(function(){
        funCargarDatos();
    });
    $("button#elimina").click(function(){
        funEliminarDatos();
    });
    $("#contenido").hide();
});
function funCargarDatos(){
    $.ajax({
        url:"./js/datos.json"
    }).done(function(respuesta){
        console.log("respuesta",respuesta);
        $("#contenido").html("Nombre "+respuesta.nombre+" "+respuesta.apellido+"<br>Edad: "+respuesta.edad+"<br>Direccion: "+respuesta.direccion+"<br>Telefono: "+respuesta.telefono);
        $("#contenido").slideDown("slow");
        $("#formNombre").val(respuesta.nombre+" "+respuesta.apellido);
        $("#formEdad").val(respuesta.edad);
        $("#formTelefono").val(respuesta.telefono);
        $("#formDireccion").val(respuesta.direccion);
    })
}
function funEliminarDatos(){
    $("#contenido").html("");
    $("#contenido").hide(2000);
    $("#formEdad").val("");
    $("#formTelefono").val("");
    $("#formDireccion").val("");
    $("#formNombre").val("");
}
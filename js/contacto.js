var regexTelefono = /^[0-9]{4}[-]{1}[0-9]{4}$/;
var regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
const cantidad = 1000;

function validar(){
    var error=false;
    var mensajeError = "";

    if(document.getElementById("nomyape").value == ""){
        error = true;
        mensajeError += "<p>El campo no puede estar vacio</p>";
    }

    if(!regexTelefono.test(document.getElementById("tel").value)){
        error = true;
        mensajeError += "<p>El telefono debe estar separado por -</p>" 
    }

    if(!regexEmail.test(document.getElementById("email").value)){
        error = true;
        mensajeError += "<p>El email ingresado es incorrecto</p>" 
    }

    if(error){
        document.getElementById("mensaje").innerHTML = mensajeError;
        return false;
    }else{
        document.getElementById("mensaje").innerHTML = "Envio exitoso";
        return false;
    }
}


function contarCaracteres(){
    var caracteres = document.getElementById("consulta").value.length;
    var restantes = cantidad - caracteres;
    document.getElementById("caracteres").innerHTML=restantes;
}
function validar() {
    var error = false;
    var mensajeError = "";
    var contador = 0;
    var seleccionado = false;
    var seleccionado1 = false;
    var seleccionado2 = false;
    var seleccionado3 = false;
    var seleccionado4 = false;
    var opciones = document.getElementsByName("option");

    if (document.getElementById("nomyape").value == "") {
        error = true;
        mensajeError += "<br><p>El campo nombre no puede estar vacio</p>";
    }

    if (document.getElementById("dni").value == "") {
        error = true;
        mensajeError += "<p>El campo dni no puede estar vacio</p>";
    }

    if (document.getElementById("tel").value == "") {
        error = true;
        mensajeError += "<p>El campo telefono no puede estar vacio</p>";
    }


    for (i in opciones) {
        if (opciones[i].checked) {
            seleccionado = true;
            if (opciones[i].value == "si") {
                contador++;
            }
        }

    }

    opciones = document.getElementsByName("option1");

    for (i in opciones) {
        if (opciones[i].checked) {
            seleccionado1 = true;
            if (opciones[i].value == "si") {
                contador++;
            }
        }
    }

    opciones = document.getElementsByName("option2");

    for (i in opciones) {
        if (opciones[i].checked) {
            seleccionado2 = true;
            if (opciones[i].value == "si") {
                contador++;
            }
        }
    }

    opciones = document.getElementsByName("option3");

    for (i in opciones) {
        if (opciones[i].checked) {
            seleccionado3 = true;
            if (opciones[i].value == "si") {
                contador++;
            }
        }
    }

    opciones = document.getElementsByName("option4");

    for (i in opciones) {
        if (opciones[i].checked) {
            seleccionado4 = true;
            if (opciones[i].value == "si") {
                contador++;
            }
        }
    }

    if (!seleccionado || !seleccionado1 || !seleccionado2 || !seleccionado3 || !seleccionado4) {
        error = true;
        mensajeError += "<p>Debe responder todas las preguntas</p>";
    }

    if (error) {
        document.getElementById("mensaje").innerHTML = mensajeError;
        return false;
    } else {
        document.getElementById("mensaje").innerHTML = "<p><br>El formulario fue completado correctamente. " + contador + " síntomas de COVID-19 fueron registrados.";
        return false;
    }
}

function cambiar() {
    var opciones = document.getElementsByName("viaje");
    for (i in opciones) {
        if (opciones[i].value == "si" && opciones[i].checked) {
            document.getElementById("paises").style.display = "block";
            document.getElementById("paiseslabel").style.display = "block";
        }
        if (opciones[i].value == "no" && opciones[i].checked) {
            document.getElementById("paises").style.display = "none";
            document.getElementById("paiseslabel").style.display = "none";
        }
    }
}

function cambiar1() {
    var opciones = document.getElementsByName("option4");
    for (i in opciones) {
        if (opciones[i].value == "si" && opciones[i].checked) {
            document.getElementById("dire").style.display = "block";
            document.getElementById("direlabel").style.display = "block";
        }
        if (opciones[i].value == "no" && opciones[i].checked) {
            document.getElementById("dire").style.display = "none";
            document.getElementById("direlabel").style.display = "none";
        }
    }
}




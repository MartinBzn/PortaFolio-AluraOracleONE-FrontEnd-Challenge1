const formulario = document.getElementById('form');
const ventanaEmergente = document.getElementById('ventana-emergente');
const btnAceptar = document.getElementById("ventana-emergente__boton");
var msjVentana = document.getElementById("ventana__mensaje__id");
var respuesta = "";
var enviar = false;

formulario.onsubmit = evento =>{
    evento.preventDefault();
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var asunto = document.getElementById("asunto");   
    var mensaje = document.getElementById("mensaje");
    var campo = ""; 
    

    respuesta = validarElemento(nombre.value,"Nombre");
    if(respuesta == "OK"){
        respuesta = validarEmail(email.value);
        if (respuesta == "OK"){
            respuesta = validarElemento(asunto.value,"Asunto");
            if(respuesta == "OK"){
                respuesta = validarElemento(mensaje.value,"Mensaje");
                if (respuesta != "OK"){
                    campo = mensaje;
                }
            }else{
                campo = asunto;
            }
        }else{
            campo = email;
        }
    }else{
        campo = nombre;
    }

    if (respuesta == "OK"){
        mostrarVentana(true);
        // if(cerrar){
        //     cerrar = false;
        //     // formulario.submit();
        // }
    }else{
        mostrarVentana(false,respuesta);
        campo.focus();
    }
}

function validarTamanioTexto(valor){
    return (valor.length != 0)
}

function validarElemento(valor,campo){
    if(validarTamanioTexto(valor)){
        return "OK";
    }else{
        return ("Por favor completar el campo " + campo);
    }
}

function validarEmail(valor){

    if(validarTamanioTexto(valor)){
        if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor)){
            return "OK"
        }else{
            return "La direccion de email no es correcta";
        }
    }else{
        return "Por favor completar el campo Email";
    }    
}

function mostrarVentana(respuestaOK,respuesta=''){
    if (respuestaOK){
        msjVentana.innerHTML = 'El mensaje ha sido enviado con exito. ¡Gracias por contactarse!';
        enviar = true;
    }else{
        msjVentana.innerHTML = respuesta;
    }
    ventanaEmergente.showModal();
    btnAceptar.addEventListener('click',cerrarVentana)
}

function cerrarVentana(){    
    if (enviar){
        enviar = false;
        formulario.submit();
    }
    ventanaEmergente.close();
}
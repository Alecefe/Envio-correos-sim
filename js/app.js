//Variables

const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const btnReset = document.getElementById('resetBtn');

//Event listeners

eventListeners();

function eventListeners(){
    //Inicia la aplicación y deshabilita el botón
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    email.addEventListener('blur', validarCampo);

    //Boton enviar al submit
    btnEnviar.addEventListener('click', enviarEmail);

    //Boton reset de formulario
    btnReset.addEventListener('click', limpiarFormulario)
}

//Funciones

function inicioApp(){
    //Deshabilitar el envío
    btnEnviar.disabled = true;
}

function validarCampo(){

    //Se valida la long y que no esté vacío
    validarLongitud(this);

    //Validar email
    if(this.type === 'email'){
        validarEmail(this);
    }
    

    let errores = document.querySelectorAll('.error');
    if(email.value !== '' && asunto.value !== '' && mensaje.value !==''){
        if(errores.length === 0){
            btnEnviar.disabled=false;   
        }
        
    }

}

function enviarEmail(e){
    //Spinner
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //Gif que envia email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    //Ocultar spinner y mostrar gif enviado

    setTimeout(function(){
        spinnerGif.style.display = 'none';
        
        spinnerGif.parentElement.appendChild(enviado);

        setTimeout(function(){
            enviado.remove();
            document.querySelector('#enviar-mail').reset();
        },3000)
    },2000);


    
    e.preventDefault();
}

function validarLongitud(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');

    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo) {

    const mensaje = campo.value;

    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }

}

function limpiarFormulario(e){
    e.preventDefault();
    document.getElementById('enviar-mail').reset();
}
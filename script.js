const submitFunction = (event) => {
    if (!validarFormulario()) {
        event.preventDefault()  //Previene la actualización de la web
    } else {
        event.preventDefault()

        alert(
            'Los datos enviados fueron: \n'+
            'Nombre: ' + document.getElementById('nombre').value+ '\n'+
            'Apellido: ' + document.getElementById('apellido').value+ '\n'+
            'Documento: ' + document.getElementById('documento').value+ '\n'+
            'Email: ' + document.getElementById('email').value+ '\n'+
            'Edad: ' + document.getElementById('edad').value+ '\n'+
            'Actividad: ' + document.getElementById('actividad').value+ '\n'+
            'Nivel de Estudio: ' + document.getElementById('nivelEstudio').value+ '\n'
        )
    }
}

document.getElementById('formulario').addEventListener('submit', submitFunction) //escucha el envío del formulario

function validarFormulario() {
    //Esta parte validad los campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) //error + id con la primera letra en mayuscula
        if (campo.value.length == '') {
            mostrarError(errorCampo, '¡Este campo es requerido!')
            validacionCorrecta = false
        } else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, '¡Este campo debe tener al menos 3 caracteres!')
            validacionCorrecta = false
        } else {
            ocultarError(errorCampo)
        }
    })

    //Esta parte valida el email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { //Este regex valida que el formato del email sea valido
        ocultarError(errorEmail)
    } else {
        mostrarError(errorEmail, '¡Ingrese un correo electrónico válido!')
        validacionCorrecta = false
    }

    //Esta parte validad el campo edad
    const edad = document.getElementById('edad');
    let errorEdad = document.getElementById('errorEdad');

    if (edad.value < 18) {
        mostrarError(errorEdad, '¡Debes ser mayor de 18 años para registrarte!')
        validacionCorrecta = false
    } else {
        ocultarError(errorEdad)
    }

    //Este parte validad el campo actividad
    const actividad = document.getElementById('actividad');
    let errorActividad = document.getElementById('errorActividad');

    if (actividad.value == '') {
        mostrarError(errorActividad, 'Por favor, seleccione una actividad')
        validacionCorrecta = false
    } else {
        ocultarError(errorActividad)
    }

    //Esta parte valida el campo nivel de estudio
    const nivelEstudio = document.getElementById('nivelEstudio');
    let errorNivelEstudio = document.getElementById('errorNivelEstudio');

    if (nivelEstudio.value == '') {
        mostrarError(errorNivelEstudio, 'Por favor, seleccione un nivel de estudio')
        validacionCorrecta = false
    } else {
        ocultarError(errorNivelEstudio)
    }

    //Esta parte valida el campo acepto terminos
    const aceptoTerminos = document.getElementById('aceptoTerminos');
    let errorAceptoTerminos = document.getElementById('errorAceptoTerminos');

    if (!aceptoTerminos.checked) {
        mostrarError(errorAceptoTerminos, '¡Debes aceptar los términos y condiciones!')
        validacionCorrecta = false
    } else {
        ocultarError(errorAceptoTerminos)
    }

    return validacionCorrecta //Esta parte indica si el formulario completo es o no valido
}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}
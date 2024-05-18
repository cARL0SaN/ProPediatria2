function redireccionar(accion) {
    let url, ventanaNombre;
    if (accion === 'ingresarP') {
        url = 'http://localhost/ProPediatria/HTML/Reg_Pediatra.html';
    } else if (accion === 'modificarP') {
        url = 'http://localhost/ProPediatria/HTML/BuscarPediatra.html';
    } else if (accion === 'ingresarA') {
        url = 'http://localhost/ProPediatria/HTML/Reg_Acudiente.html';
    } else if (accion === 'modificarA') {
        url = 'http://localhost/ProPediatria/HTML/BuscarAcudiente.html';
    } else if (accion === 'ingresarN') {
        url = 'http://localhost/ProPediatria/HTML/Reg_Nino.html';
    } else if (accion === 'modificarN') {
        url = 'http://localhost/ProPediatria/HTML/BuscarNino.html';
    } else if (accion === 'gestionarV') {
        url = 'http://localhost/ProPediatria/HTML/Ven_VisitaAdmin.html';
    }

    const ancho = 800;  // Ancho de la ventana
    const alto = 600;   // Alto de la ventana
    const left = (window.screen.width / 2) - (ancho / 2);
    const top = (window.screen.height / 2) - (alto / 2);
    const opcionesVentana = `width=${ancho}, height=${alto}, top=${top}, left=${left}`;

    window.open(url, ventanaNombre, opcionesVentana);
}

function registroExitoso() {
    let mensaje = "Registro exitoso. Nuevo pediatra añadido";
    alert(mensaje);
    if (confirm("¿Desea cerrar esta ventana?")) {
        window.close();
    }
}

function mosFormularioActu() {
    document.querySelector('.campoActualizar').style.display = 'block';
}

function actualizarAcce(estado) {

    var pediatra_id = document.getElementsByName("pediatra_id")[0].value;
    var form = document.getElementById("estadoForm");
    var formData = new FormData(form);
    formData.append("fk_id_estado", estado);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "actualizarEstadoAcceso.php", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            alert(xhr.responseText);
            // Actualizar la página u otras acciones después de recibir la respuesta
        } else {
            alert('Error al procesar la solicitud.');
        }
    };
    xhr.send(formData);
}

function cancelar() {
    window.close();
}
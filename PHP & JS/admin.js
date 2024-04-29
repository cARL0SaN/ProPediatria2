function redireccionar(accion) {
    let url, ventanaNombre;
    if (accion === 'ingresarP') {
        url = 'http://localhost/ProPediatria/Reg_Pediatra.html';
    } else if (accion === 'actualizarP') {
        url = 'url_para_actualizar_pediatra.html';
    } else if (accion === 'eliminarP') {
        url = 'url_para_eliminar_pediatra.html';
    } else if (accion === 'ingresarA') {
        url = 'url_para_ingresar_pediatra.html';
    } else if (accion === 'actualizarA') {
        url = 'url_para_actualizar_pediatra.html';
    } else if (accion === 'eliminarA') {
        url = 'url_para_eliminar_pediatra.html';
    }else if (accion === 'ingresarN') {
        url = 'url_para_ingresar_pediatra.html';
    } else if (accion === 'actualizarN') {
        url = 'url_para_actualizar_pediatra.html';
    } else if (accion === 'eliminarN') {
        url = 'url_para_eliminar_pediatra.html';
    }else if (accion === 'consultarV') {
        url = 'url_para_ingresar_pediatra.html';
    } else if (accion === 'actualizarV') {
        url = 'url_para_actualizar_pediatra.html';
    } else if (accion === 'eliminarV') {
        url = 'url_para_eliminar_pediatra.html';
    }

    window.open(url, ventanaNombre, 'width = 600, height = 400');
}
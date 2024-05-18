$(document).ready(function() {
    $('#ide').blur(function() {
        if ($(this).val() !== '') {
            $.ajax({
                url: '../PHP & JS/buscarAcudiente.php',
                type: 'POST',
                data: {ident: $(this).val()},
                success: function(response) {
                    var datos = JSON.parse(response);
                    if (datos && datos.nom_persona) {
                        $('#nom').val(datos.nom_persona);
                        $('#ape').val(datos.ape_persona);
                        $('#cor').val(datos.correo_persona);
                        $('#tele').val(datos.telefono_persona);
                        $('#fec_nac').val(datos.fechaNaci_persona);
                    } else {
                        alert('Error al obtener los datos del acudiente');
                    }
                },
                error: function(xhr, status, error) {
                    alert('Identificación no encontrada en la base de datos');
                    console.error(error);
                }
            });
        }
    });
});
<?php
include_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $identificacion = $_POST["ident"];
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $fechaNacimiento = $_POST["fecha_nacimiento"];
    $sexo = $_POST["sexo_usuario"];
    $gs = $_POST["gs"];
    $lugarTrabajo = $_POST["Lugar_trabajo"];
    $contrasena = $_POST["cont"];


    if ($sexo == 'Masculino') {
        $sexo = 'M';
    } else {
        $sexo = 'F';
    }
    
    switch ($gs) {
        case 'A+':
            $gs = 1;
            break;
        case 'A-':
            $gs = 2;
            break;
        case 'B+':
            $gs = 3;
            break;
        case 'B-':
            $gs = 4;
            break;
        case 'AB+':
            $gs = 5;
            break;
        case 'AB-':
            $gs = 6;
            break;
        case 'O+':
            $gs = 7;
            break;
        case 'O-':
            $gs = 8;
            break;
    }

    if (isset($_FILES['foto_pediatra'])) {
        $file_name = $_FILES['foto_pediatra']['name'];
        $file_tmp = $_FILES['foto_pediatra']['tmp_name'];

        $uploads_dir = '../uploads/';
        move_uploaded_file($file_tmp, $uploads_dir . $file_name);
        $urlImagen = $uploads_dir . $file_name;
    }

    $conexion = new Conexion();

    $conn = $conexion->conectar();

    $sqlPersona = "INSERT INTO persona (idPersona, nom_persona, ape_persona, fechaNaci_persona, TipoDocumento_idTipoDocumento, Rol_idRol, fk_id_tipoSangre) 
        VALUES ('$identificacion','$nombre', '$apellido', '$fechaNacimiento', 1, 2, $gs)";

    if ($conn->query($sqlPersona) === TRUE) {

        $sqlPediatra = "INSERT INTO pediatra (idPediatra_idPersona, sexo_pediatra, lugarLabora_pediatra, foto_pediatra) 
                VALUES ('$identificacion', '$sexo', '$lugarTrabajo', '$urlImagen')";

        if ($conn->query($sqlPediatra) === TRUE) {

            $sqlAcceso = "INSERT INTO acceso (Persona_idPersona, clave_acce, fk_id_estado) 
            VALUES ('$identificacion', '$contrasena', 1)";

            if ($conn->query($sqlAcceso) === TRUE) {

                echo "<script>alert('Registro exitoso. Nuevo pediatra añadido');</script>";
                header("refresh:1;url=../HTML/inicio_sesion.html");
            } else {
                echo "Error al registrar el pediatra: " . $conn->error;
            }
        } else {
            echo "Error al registrar el pediatra: " . $conn->error;
        }
    } else {
        echo "Error al registrar la persona: " . $conn->error;
    }

    $identificacion = "";
    $nombre = "";
    $apellido = "";
    $fechaNacimiento = "";
    $sexo = "";
    $lugarTrabajo = "";
    $contrasena = "";
    $gs = "";
    $urlImagen = "";

    $conexion->cerrarConexion($conn);
} else {
    echo "Por favor, complete el formulario antes de enviar.";
}

<?php
include_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    session_start();

    $id = $_SESSION['Persona_idPersona'];

    $nombre = $_POST["Nombre_nino"];
    $apellido = $_POST["Apellido_nino"];
    $fechaNacimiento = $_POST["fecha_nacimiento_nino"];
    $sexo = $_POST["sexo_usuario"];
    $gs = $_POST["gs"];
    $rel = $_POST["rel"];
    $identificacion = $_POST["registro_civil_nino"];
    $nombreRes = $_POST["Nombre_responsable"];
    $apellidoRes = $_POST["Apellido_responsable"];
    $fechaNacimientoRes = $_POST["fecha_nacimiento_responsable"];
    $identificacionRes = $_POST["documento_responsable"];

    $edad_limite = 18; // Edad mínima para ser considerado mayor de edad

    $timestamp_nacimiento = strtotime($fechaNacimientoRes);
    $timestamp_limite = strtotime("-$edad_limite years");

    if ($timestamp_nacimiento > $timestamp_limite) {
        // La persona es menor de edad
        $edad = 2;
    } else {
        // La persona es mayor de edad
        $edad = 1;
    }

    if ($sexo == 'Masculino') {
        $sexo = 'M';
    } else {
        $sexo = 'F';
    }

    switch ($gs) {
        case 'A+':
            $gs = '1';
            break;
        case 'A-':
            $gs = '2';
            break;
        case 'B+':
            $gs = '3';
            break;
        case 'B-':
            $gs = '4';
            break;
        case 'AB+':
            $gs = '5';
            break;
        case 'AB-':
            $gs = '6';
            break;
        case 'O+':
            $gs = '7';
            break;
        case 'O-':
            $gs = '8';
            break;
    }

    switch ($rel) {
        case 'Abuelo/Abuela':
            $rel = '3';
            break;
        case 'Hermano/Hermana':
            $rel = '4';
            break;
        case 'Tio/Tia':
            $rel = '5';
            break;
        case 'Familiar cercano':
            $rel = '6';
            break;
        case 'Tutor legal':
            $rel = '7';
            break;
        case 'Cuidador temporal':
            $rel = '8';
            break;
        default:
            // Código a ejecutar si no coincide con ningún caso
            break;
    }
    


    $conexion = new Conexion();

    $conn = $conexion->conectar();

    $sql = "SELECT idPersona FROM persona WHERE idPersona = '$identificacionRes'";
    $result = $conn->query($sql);

    if ($result->num_rows === 0) {

        $sqlPersona = "INSERT INTO persona (idPersona, nom_persona, ape_persona, fechaNaci_persona, TipoDocumento_idTipoDocumento, Rol_idRol) 
            VALUES ('$identificacionRes','$nombreRes', '$apellidoRes', '$fechaNacimientoRes', '$edad', 3)";

        if ($conn->query($sqlPersona) === TRUE) {
            $sqlAcudiente = "INSERT INTO acudiente (Persona_idPersona, fk_id_vinculo) 
        VALUES ('$identificacionRes', '$rel')";
        }
        $conn->query($sqlAcudiente);
    }

    $sqlPersona2 = "INSERT INTO persona (idPersona, nom_persona, ape_persona, fechaNaci_persona, TipoDocumento_idTipoDocumento, Rol_idRol, fk_id_tipoSangre) 
                VALUES ('$identificacion','$nombre', '$apellido', '$fechaNacimiento', 2, 4, '$gs')";

    if ($conn->query($sqlPersona2) === TRUE) {
        $sqlPaciente = "INSERT INTO paciente (idPaciente_idPersona, sexo_paciente, Pediatra_idPediatra_idPersona, Acudiente_Persona_idPersona) 
                VALUES ('$identificacion', '$sexo', '$id', '$identificacionRes')";
    }

    if ($conn->query($sqlPaciente) === TRUE) {
        echo "<script>alert('Registro exitoso. Nuevo Paciente y acudiente añadido');</script>";
        $id_nino = $identificacion;
        echo "<script>window.close()</script>";
        //header("refresh:1;url=info_nino.php?ident=$id_nino");
    } else {
        echo "Error al registrar al Paciente: " . $conn->error;
        header("refresh:1;url=../HTML/Reg_nino.html");
    }


    $nombre = "";
    $apellido = "";
    $fechaNacimiento = "";
    $sexo = "";
    $gs = "";
    $rh = "";
    $identificacion = "";
    $nombreRes = "";
    $apellidoRes = "";
    $fechaNacimientoRes = "";
    $identificacionRes = "";

    $conexion->cerrarConexion($conn);
} else {
    echo "Por favor, complete el formulario antes de enviar.";
}

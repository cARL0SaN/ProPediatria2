<?php
include_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    session_start();

    $id = $_SESSION['Persona_idPersona'];

    $id_nino = $_POST["nino"];
    $ident = $_POST["ident"];
    $rel = $_POST["padres"];
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $fechaNacimiento = $_POST["fecha_nacimiento"];
    $profesion = $_POST["profesion"];
    $gs = $_POST["gs"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $rol = 5;

    $edad_limite = 18; // Edad mínima para ser considerado mayor de edad

    $timestamp_nacimiento = strtotime($fechaNacimiento);
    $timestamp_limite = strtotime("-$edad_limite years");

    if ($timestamp_nacimiento > $timestamp_limite) {
        // La persona es menor de edad
        $edad = 2;
    } else {
        // La persona es mayor de edad
        $edad = 1;
    }

    if ($rel == 'Padre') {
        $Srel = 1;
    } elseif ($rel == 'Madre') {
        $Srel = 2;
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

    if ($id_nino == null) {
        echo '<script>window.close();</script>';
    }



    $conexion = new Conexion();

    $conn = $conexion->conectar();

    $query = "SELECT idPersona FROM persona WHERE idPersona=?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $ident);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    if ($row) {
        echo "Error, persona ya registrada";
    } else {
        $sqlPersona = "INSERT INTO persona (idPersona, nom_persona, ape_persona, fechaNaci_persona, TipoDocumento_idTipoDocumento, Rol_idRol) 
    VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sqlPersona);
        $stmt->bind_param("isssii", $ident, $nombre, $apellido, $fechaNacimiento, $edad, $rol);
        $result = $stmt->execute();

        if ($result) {
            $sqlPadre = "INSERT INTO padre (profesion_padre, idAcudiente_idPersona, fk_id_vinculo) 
            VALUES (?, ?, ?)";
            $stmt2 = $conn->prepare($sqlPadre);
            $stmt2->bind_param("sii", $profesion, $ident, $Srel);
            $result = $stmt2->execute();

            if ($result) {
                $sqlRelacion = "INSERT INTO paciente_padre (Paciente_idPaciente_idPersona, Padre_idPadre_idPersona, observacionViculo) 
                VALUES (?, ?, ?)";
                $stmt3 = $conn->prepare($sqlRelacion);
                $stmt3->bind_param("iis", $id_nino, $ident, $rel);
                $result = $stmt3->execute();
                if ($result) {
                    echo "Padre Creado";
                } else {
                    echo "error en relacion";
                }
            } else {
                echo "error en persona";
            }
        } else {
            echo "error en padre";
        }

        $stmt->close();
        $stmt2->close();
        $stmt3->close();

        echo "<script>window.close()</script>";
        exit();
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

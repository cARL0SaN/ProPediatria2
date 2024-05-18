<?php
include_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $identificacion = $_POST["ident"];
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $contrasena = $_POST["cont"];
    $gs = $_POST["gs"];

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

    $conexion = new Conexion();

    $conn = $conexion->conectar();

    $sqlAcudiente = "UPDATE acudiente SET correo_acudiente = '$correo' WHERE Persona_idPersona = $identificacion";
    $sqlPersona = "UPDATE persona SET correo_persona = '$correo', telefono_persona = '$telefono', fk_id_tipoSangre = '$gs' WHERE idPersona = $identificacion";

    if ($conn->query($sqlAcudiente) === TRUE) {
        if ($conn->query($sqlPersona) === TRUE) {

            $sqlAcceso = "INSERT INTO acceso (Persona_idPersona, clave_acce, fk_id_estado) 
            VALUES ('$identificacion', '$contrasena', 1)";

            if ($conn->query($sqlAcceso) === TRUE) {

                echo "<script>alert('Registro exitoso.');</script>";
                header("refresh:1;url=../HTML/inicio_sesion.html");
            } else {
                echo "Error al registrar la cuenta: " . $conn->error;
            }
        }
    } else {
        echo "Error en el registro: " . $conn->error;
        header("refresh:2;url=../HTML/Reg_Acudiente.html");
    }

    $identificacion = "";
    $nombre = "";
    $apellido = "";
    $correo = "";
    $telefono = "";
    $contrasena = "";
    $fecha_nacimiento = "";

    $conexion->cerrarConexion($conn);
} else {
    echo "Por favor, complete el formulario antes de enviar.";
}

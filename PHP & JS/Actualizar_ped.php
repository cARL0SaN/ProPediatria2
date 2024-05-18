<?php
include_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    session_start();

    $identificacion = $_SESSION['Persona_idPersona'];
    $nombre = $_POST["names"];
    $apellido = $_POST["surnames"];
    $fechaNacimiento = $_POST["birth-date"];
    $telefono = $_POST["emergency-phone"];
    $correo = $_POST["email"];
    $labora = $_POST["trabajo"];
    $password = $_POST['password'];

    /*if (isset($_FILES["photo"])) {
        $file_name = $_FILES["photo"]['name'];
        $file_tmp = $_FILES["photo"]['tmp_name'];

        $uploads_dir = '../uploads/';
        move_uploaded_file($file_tmp, $uploads_dir . $file_name);
        $urlImagen = $uploads_dir . $file_name;
    }*/

    $conexion = new Conexion();

    $conn = $conexion->conectar();

    $conn->begin_transaction();

    //$hash=password_hash($password, PASSWORD_DEFAULT);

    if ($password != "") {
        $sql = "SELECT clave_acce FROM acceso WHERE clave_acce = ? AND Persona_idPersona != ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("si", $password, $identificacion);
        $stmt->execute();
        $result = $stmt->get_result();
    
        if ($result->num_rows > 0) {
            echo "<script>alert('Por favor digite otra contraseña')</script>";
        } else {
            $sql = "UPDATE acceso SET clave_acce = ? WHERE Persona_idPersona = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("si", $password, $identificacion);
            $stmt->execute();
        }
    }
    

    $sqlPersona = "UPDATE persona SET nom_persona = ?, ape_persona = ?, 
     correo_persona = ?, telefono_persona = ?,fechaNaci_persona = ? WHERE idPersona = ?";
    $stmt = $conn->prepare($sqlPersona);
    $stmt->bind_param("sssssi", $nombre, $apellido, $correo, $telefono, $fechaNacimiento, $identificacion);
    $stmt->execute();


    $sqlPediatra = "UPDATE pediatra SET lugarLabora_pediatra = ? WHERE idPediatra_idPersona = ?";
    $stmt2 = $conn->prepare($sqlPediatra);
    $stmt2->bind_param("si", $labora, $identificacion);
    $stmt2->execute();

    $conn->commit();

    $stmt->close();
    $stmt2->close();

    $identificacion = "";
    $nombre = "";
    $apellido = "";
    $telefono = "";
    $correo = "";
    $fecha_nacimiento = "";
    $labora = "";
    $password = "";

    header("refresh:1;url=info_pediatra.php");


    $conexion->cerrarConexion($conn);
} else {
    echo "Por favor, complete el formulario antes de enviar.";
}

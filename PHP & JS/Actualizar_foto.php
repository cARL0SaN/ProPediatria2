<?php
include_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    session_start();
    
    $identificacion = $_SESSION['Persona_idPersona'];
    
    if (isset($_FILES["photo"])) {
        $file_name = $_FILES["photo"]['name'];
        $file_tmp = $_FILES["photo"]['tmp_name'];

        $uploads_dir = '../uploads/';
        move_uploaded_file($file_tmp, $uploads_dir . $file_name);
        $urlImagen = $uploads_dir . $file_name;
    }


    $conexion = new Conexion();

    $conn = $conexion->conectar();

    $sqlPediatra = "UPDATE pediatra SET foto_pediatra = ? WHERE idPediatra_idPersona = ?";
    $stmt2 = $conn->prepare($sqlPediatra);
    $stmt2->bind_param("si", $urlImagen, $identificacion);
    $stmt2->execute();

    $stmt2->close();

    header("refresh:1;url=info_pediatra.php");

    $labora = "";

    $conexion->cerrarConexion($conn);
} else {
    echo "Por favor, complete el formulario antes de enviar.";
}

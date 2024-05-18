<?php
include_once "conexion.php";
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $conexion = new Conexion();
    $conn = $conexion->conectar();

    $id = $_POST["identifier"];

    $sql = "SELECT idPersona FROM persona INNER JOIN paciente ON persona.idPersona = paciente.idPaciente_idPersona WHERE idPersona = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    if ($row) {
        $id_nino = $row['idPersona'];
        header("refresh:1;url=info_nino.php?ident=$id_nino");
        exit();
    } else {
        echo "<script>alert('No se encontró un paciente con el id digitado')</script>";
        header("refresh:1;url=info_pediatra.php");
        exit();
    }

    // Cerrar las consultas y la conexión
    $stmt->close();
} else {
    echo "<script>alert('La variable de sesión está vacía')</script>";
    header("refresh:1;url=../HTML/index.html");
}
?>
<?php
include_once "conexion.php";
session_start();

$conexion = new Conexion();
$conn = $conexion->conectar();

if (isset($conn)) {
    if (isset($_SESSION['Persona_idPersona'])) {
        $id = $_SESSION['Persona_idPersona'];
    }else{
        $id = 0;
    }

    $rol = 2;

    $sql = "SELECT * FROM persona INNER JOIN pediatra ON idPersona = idPediatra_idPersona 
    INNER JOIN acceso ON idPersona = Persona_idPersona WHERE Rol_idRol = 2 AND fk_id_estado = 1";
    $result = $conn->query($sql);

    include '../HTML/Pediatras.html';
    $conn->close();
} else {
    echo "<script>alert('La variable de sesión está vacía')</script>";
    header("url=../index.html");
    exit();
}

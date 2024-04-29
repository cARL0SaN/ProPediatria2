<?php
include_once "conexion.php";
session_start();

if (isset($_SESSION['Persona_idPersona'])) {
    $conexion = new Conexion();
    $conn = $conexion->conectar();

    $id_nino = $_GET['id_nino'];

    include '../Reg_Padre.html';

    $conn->close();
} else {
    echo "<script>alert('La variable de sesión está vacía')</script>";
    header("url=../index.html");
}


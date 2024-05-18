<?php
include_once "conexion.php";
session_start();

if (isset($_SESSION['Persona_idPersona'])) {

    $conexion = new Conexion();
    $conn = $conexion->conectar();

    $id = $_SESSION['Persona_idPersona'];
    $id_nino = $_GET['id_nino'];
    $fec_naci = $_GET['fec_naci'];
    $sex = $_GET['sex'];
    if ($sex == 'Masculino') {
        $sex = 'niño';
    } else {
        
        $sex = 'niña';
    }
    
    //$fec_naci = DateTime::createFromFormat('Y-m-d', $fec_naci)->format('d/m/Y');

    $edad = date('Y') - date('Y', strtotime($fec_naci));

    $sql = "SELECT * FROM tipovacuna WHERE idTipoVacuna != 0";
    $result = $conn->query($sql);
    

    $sql2 = "SELECT * FROM tipoenfermedad WHERE idTipoEnfermedad != 0";
    $result2 = $conn->query($sql2);

    //Pediatra_idPediatra_idPersona

    include '../HTML/Agre_Visita.html';
    $conn->close();
} else {
    echo "<script>alert('La variable de sesión está vacía')</script>";
    header("url=../index.html");
    exit();
}

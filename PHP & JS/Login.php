<?php
include_once "conexion.php";
session_start();

// Verifica si se han enviado datos por POST
if (isset($_SESSION['Persona_idPersona'])) {

    $id = $_SESSION['Persona_idPersona'];

    $conexion = new Conexion();
    $conn = $conexion->conectar();

    $query1 = "SELECT idPersona, Rol_idRol FROM persona WHERE idPersona='$id'";
    $results1 = $conn->query($query1);
    $row1 = $results1->fetch_assoc();

    if ($id == $row1['idPersona']) {
        echo $var = $row1['Rol_idRol'];
    }

    if ($var == 1) {
        header("Location: http://localhost/ProPediatria/HTML/Index_Administrador.html");
        exit();
    }

    if ($var == 2) {
        header("Location: http://localhost/ProPediatria/PHP & JS/info_pediatra.php");
        exit();
    }

    if ($var == 3) {
        $query2 = "SELECT idPaciente_idPersona, Acudiente_Persona_idPersona FROM paciente WHERE Acudiente_Persona_idPersona='$id'";
        $results2 = $conn->query($query2);
        $row2 = $results2->fetch_assoc();
        $id_nino = $row2['idPaciente_idPersona'];
        header("Location: http://localhost/ProPediatria/PHP & JS/info_nino.php?ident=$id_nino");
        exit();
    }
}else{

    header("refresh:1;url=../HTML/inicio_sesion.html");
    exit();

}

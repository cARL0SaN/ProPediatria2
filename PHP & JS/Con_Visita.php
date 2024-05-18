<?php
include_once "conexion.php";
session_start();

if (isset($_SESSION['Persona_idPersona'])) {

    $conexion = new Conexion();
    $conn = $conexion->conectar();

    //$id = $_SESSION['Persona_idPersona'];
    //$fec_naci = DateTime::createFromFormat('Y-m-d', $fec_naci)->format('d/m/Y');

    $visita = $_GET['id'];
    $id_nino = $_GET['id_nino'];
    $sex = $_GET['sex'];

    $sql = "SELECT fechaNaci_persona FROM persona WHERE idPersona = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_nino);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    $fec_naci = $row['fechaNaci_persona'];

    if ($sex == 'Masculino') {
        $sex = 'niño';
    } else {
        
        $sex = 'niña';
    }


    $sql = "SELECT visita.*, 
        GROUP_CONCAT(DISTINCT tipovacuna.nom_TipoVacuna, ': ', tipovacuna_has_visita.observacion_visitaVacuna SEPARATOR '') AS vacunas,
        GROUP_CONCAT(DISTINCT tipoenfermedad.nom_TipoEnfermedad, ': ', visita_has_tipoenfermedad.observacion_visitaEnfermedad SEPARATOR '') AS enfermedades
        FROM visita
        INNER JOIN tipovacuna_has_visita ON visita.idVisita = tipovacuna_has_visita.Visita_idVisita
        INNER JOIN tipovacuna ON tipovacuna.idTipoVacuna = tipovacuna_has_visita.TipoVacuna_idTipoVacuna
        INNER JOIN visita_has_tipoenfermedad ON visita.idVisita = visita_has_tipoenfermedad.Visita_idVisita
        INNER JOIN tipoenfermedad ON tipoenfermedad.idTipoEnfermedad = visita_has_tipoenfermedad.TipoEnfermedad_idTipoEnfermedad
        WHERE visita.idVisita = ?
        GROUP BY visita.idVisita";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $visita);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    if ($row) {
        $Fec = $row['fecha_visita'];
        $Talla = $row['alturaPaciente_visita'];
        $Peso = $row['pesoPaciente_visita'];
        $Peri = $row['perimetroCefaPaciente_visita'];
        $Obs = $row['obserCirugPaciente_visita'];
        $Vacun = $row['vacunas'];
        $Enfer = $row['enfermedades'];
        $edad = date('Y', strtotime($Fec)) - date('Y', strtotime($fec_naci));
        if ($Peri == 0) {
            $peri = null;
        }
    } else {
        $Fec = "";
        $Talla = "";
        $Peso = "";
        $Peri = "";
        $Obs = "";
        $Vacun = "";
        $Enfer = "";
        $conn->error;
    }


    include '../HTML/Con_Visita.html';
    $stmt->close();
    $conn->close();
} else {
    echo "<script>alert('La variable de sesión está vacía')</script>";
    header("url=../index.html");
    exit();
}

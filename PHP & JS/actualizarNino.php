<?php
require_once 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $idNino = $_POST['idNino'];
    $nombre = $_POST['nom_persona'];
    $apellido = $_POST['ape_persona'];
    $fechaNaci = $_POST['fechaNaci_persona'];
    $tipoDoc = $_POST['TipoDocumento_idTipoDocumento'];
    $tipoSang = $_POST['fk_id_tipoSangre'];
    $sexo = $_POST['sexo_paciente'];
    $acudiente = $_POST['fk_id_Acudiente'];
    $pediatra = $_POST['fk_id_Pediatra'];


    $conexion = new Conexion();
    $conn = $conexion->conectar();


    $sql_persona = "UPDATE persona SET nom_persona = ?, ape_persona = ?, fechaNaci_persona = ?, TipoDocumento_idTipoDocumento = ?, fk_id_tipoSangre = ?  WHERE idPersona = ?";
    $stmt_persona = $conn->prepare($sql_persona);
    $stmt_persona->bind_param("sssiii", $nombre, $apellido, $fechaNaci, $tipoDoc, $tipoSang, $idNino);
    $stmt_persona->execute();


    $sql_paciente = "UPDATE paciente SET sexo_paciente = ?, Pediatra_idPediatra_idPersona = ?, Acudiente_Persona_idPersona = ? WHERE idPaciente_idPersona = ?";
    $stmt_paciente = $conn->prepare($sql_paciente);
    $stmt_paciente->bind_param("siii", $sexo, $pediatra, $acudiente, $idNino);
    $stmt_paciente->execute();

    $stmt_persona->close();
    $stmt_paciente->close();
    $conexion->cerrarConexion($conn);

    echo "<script>alert('Datos actualizados correctamente.');</script>";
    echo "<script> window.close();</script>";
} else {
    echo "<script>alert('Error al procesar la solicitud.');</script>";
}

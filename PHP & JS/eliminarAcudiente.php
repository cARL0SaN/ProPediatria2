<?php
require_once 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $acudiente_id = $_POST['idPersona'];

    $conexion = new Conexion();
    $conn = $conexion->conectar();

    $sql_acceso = "DELETE FROM acceso WHERE Persona_idPersona = ?";
    $stmt_acceso = $conn->prepare($sql_acceso);
    $stmt_acceso->bind_param("i", $acudiente_id);
    if ($stmt_acceso->execute()) {
        echo "Acceso eliminado correctamente. ";
    } else {
        echo "Error al eliminar acceso. ";
    }
    $stmt_acceso->close();

    $sql_acudiente = "DELETE FROM acudiente WHERE Persona_idPersona = ?";
    $stmt_acudiente = $conn->prepare($sql_acudiente);
    $stmt_acudiente->bind_param("i", $acudiente_id);
    if ($stmt_acudiente->execute()) {
        echo "Acudiente eliminado correctamente. ";
    } else {
        echo "Error al eliminar acudiente. ";
    }
    $stmt_acudiente->close();

    $sql_persona = "DELETE FROM persona WHERE idPersona = ?";
    $stmt_persona = $conn->prepare($sql_persona);
    $stmt_persona->bind_param("i", $acudiente_id);
    if ($stmt_persona->execute()) {
        echo "Persona eliminada correctamente. ";
    } else {
        echo "Error al eliminar persona. ";
    }
    $stmt_persona->close();

} else {
    echo "Acceso denegado.";
}
/*
$sql_pediatra = "DELETE FROM pediatra WHERE idPediatra_idPersona = ?";
    $stmt_pediatra = $conn->prepare($sql_pediatra);
    $stmt_pediatra->bind_param("i", $pediatra_id);

if ($stmt_persona->execute()) {
        echo "El pediatra y sus datos asociados han sido eliminados correctamente.";
    } else {
        echo "Error al eliminar el pediatra y sus datos asociados.";
    }

    $stmt_persona->close();
    $conexion->cerrarConexion($conn);*/

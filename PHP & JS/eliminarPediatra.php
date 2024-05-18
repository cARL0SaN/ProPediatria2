<?php
require_once 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $pediatra_id = $_POST['idPersona'];

    $conexion = new Conexion();
    $conn = $conexion->conectar();


    $sql_acceso = "DELETE FROM acceso WHERE Persona_idPersona = ?";
    $stmt_acceso = $conn->prepare($sql_acceso);
    $stmt_acceso->bind_param("i", $pediatra_id);
    $stmt_acceso->execute();
    $stmt_acceso->close();

    $sql_pediatra = "DELETE FROM pediatra WHERE idPediatra_idPersona = ?";
    $stmt_pediatra = $conn->prepare($sql_pediatra);
    $stmt_pediatra->bind_param("i", $pediatra_id);
    $stmt_pediatra->execute();
    $stmt_pediatra->close();

    $sql_persona = "DELETE FROM persona WHERE idPersona = ?";
    $stmt_persona = $conn->prepare($sql_persona);
    $stmt_persona->bind_param("i", $pediatra_id);


    if ($stmt_pediatra->execute()) {
        echo "El pediatra ha sido eliminado correctamente.";
    } else {
        echo "Error al eliminar el pediatra.";
    }

    $stmt_pediatra->execute();
    $stmt_pediatra->close();
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

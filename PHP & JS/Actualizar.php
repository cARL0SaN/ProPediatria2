<?php
include_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $identificacion = $_POST["identification"];
    $nombre = $_POST["names"];
    $apellido = $_POST["surnames"];
    $fechaNacimiento = $_POST["birth-date"];
    $telefono = $_POST["emergency-phone"];

    $conexion = new Conexion();

    $conn = $conexion->conectar();

    $conn->begin_transaction();

    $sql2 = "SELECT Acudiente_Persona_idPersona FROM paciente WHERE idPaciente_idPersona = ?";
    $stmt2 = $conn->prepare($sql2);
    $stmt2->bind_param("i", $identificacion);
    $stmt2->execute();
    $result2 = $stmt2->get_result();
    $row2 = $result2->fetch_assoc();

    $varID = $row2['Acudiente_Persona_idPersona'];

    $sqlPersona = "UPDATE persona SET nom_persona = ?, ape_persona = ?, 
     fechaNaci_persona = ? WHERE idPersona = ?";
    $stmt = $conn->prepare($sqlPersona);
    $stmt->bind_param("sssi", $nombre, $apellido, $fechaNacimiento, $identificacion);
    $stmt->execute();

    $sqlPersona2 = "UPDATE persona SET telefono_persona = ? WHERE idPersona = ?";
    $stmt3 = $conn->prepare($sqlPersona2);
    $stmt3->bind_param("si", $telefono, $varID);
    $stmt3->execute();

    $conn->commit();

    $stmt->close();
    $stmt2->close();
    $stmt3->close();

    
    $id_nino = $identificacion;
    header("refresh:1;url=info_nino.php?ident=$id_nino");

    $identificacion = "";
    $nombre = "";
    $apellido = "";
    $telefono = "";
    $fecha_nacimiento = "";

    $conexion->cerrarConexion($conn);
} else {
    echo "Por favor, complete el formulario antes de enviar.";
}

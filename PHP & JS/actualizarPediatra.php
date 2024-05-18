<?php
require_once 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $pediatra_id = $_POST['pediatra_id'];
    $nombre = $_POST['nom_persona'];
    $apellido = $_POST['ape_persona'];
    $correo = $_POST['correo_persona'];
    $telefono = $_POST['telefono_persona'];
    $fechaNaci = $_POST['fechaNaci_persona'];
    $tipoDoc = $_POST['TipoDocumento_idTipoDocumento'];
    $tipoSang = $_POST['fk_id_tipoSangre'];
    $sexo = $_POST['sexo_pediatra'];
    $lugarLabora = $_POST['lugarLabora_pediatra'];
    $foto = $_POST['foto_pediatra'];
    $clave = $_POST['clave_acce'];


    $conexion = new Conexion();
    $conn = $conexion->conectar();

    // Actualizar datos en la tabla persona
    $sql_persona = "UPDATE persona SET nom_persona = ?, ape_persona = ?, correo_persona = ?, telefono_persona = ?, fechaNaci_persona = ?, TipoDocumento_idTipoDocumento = ?, fk_id_tipoSangre = ? WHERE idPersona = ?";
    $stmt_persona = $conn->prepare($sql_persona);
    $stmt_persona->bind_param("sssssiii", $nombre, $apellido, $correo, $telefono, $fechaNaci, $tipoDoc, $tipoSang, $pediatra_id);    
    $stmt_persona->execute();

    // Actualizar datos en la tabla pediatra
    $sql_pediatra = "UPDATE pediatra SET sexo_pediatra = ?, lugarLabora_pediatra = ?, foto_pediatra = ? WHERE idPediatra_idPersona = ?";
    $stmt_pediatra = $conn->prepare($sql_pediatra);
    $stmt_pediatra->bind_param("sssi", $sexo, $lugarLabora, $foto, $pediatra_id);
    $stmt_pediatra->execute();

    $sql_acceso = "UPDATE acceso SET clave_acce = ? WHERE Persona_idPersona = ?";
    $sql_acceso = $conn->prepare($sql_acceso);
    $sql_acceso->bind_param("si", $clave, $pediatra_id);
    $sql_acceso->execute();

    $stmt_persona->close();
    $stmt_pediatra->close();
    $sql_acceso->close();
    $conexion->cerrarConexion($conn);

    echo "<script>alert('Datos actualizados correctamente.');</script>";
    echo "<script> window.close();</script>";
} else {
    echo "<script>alert('Error al procesar la solicitud.');</script>";
}

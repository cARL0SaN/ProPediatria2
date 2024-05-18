<?php
require_once 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $acudiente_id = $_POST['idAcudiente'];
    $nombre = $_POST['nom_persona'];
    $apellido = $_POST['ape_persona'];
    $fechaNaci = $_POST['fechaNaci_persona'];
    $telefono = $_POST['telefono_persona'];
    $correo = $_POST['correo_persona'];
    $clave = $_POST['clave'];
    $direccion = $_POST['direccion_Acudiente'];


    $conexion = new Conexion();
    $conn = $conexion->conectar();

    $sql_persona = "UPDATE persona SET nom_persona=?, ape_persona=?, fechaNaci_persona=?, telefono_persona=?, correo_persona=? WHERE idPersona=?";
    $stmt_persona = $conn->prepare($sql_persona);
    $stmt_persona->bind_param("sssssi", $nombre, $apellido, $fechaNaci, $telefono, $correo, $acudiente_id);
    /*if ($stmt_persona->execute()) {
        echo "Datos actualizados correctamente en la tabla persona.<br>";
    } else {
        echo "Error al actualizar datos en la tabla persona.<br>";
    }
    $stmt_persona->close();*/

    $sql_acceso = "UPDATE acceso SET clave_acce=? WHERE Persona_idPersona=?";
    $stmt_acceso = $conn->prepare($sql_acceso);
    $stmt_acceso->bind_param("si", $clave, $acudiente_id);
    /*if ($stmt_acceso->execute()) {
        echo "Clave actualizada correctamente en la tabla acceso.<br>";
    } else {
        echo "Error al actualizar la clave en la tabla acceso.<br>";
    }
    $stmt_acceso->close();*/

    $sql_acudiente = "UPDATE acudiente SET direccion_acudiente=? WHERE Persona_idPersona=?";
    $stmt_acudiente = $conn->prepare($sql_acudiente);
    $stmt_acudiente->bind_param("si", $direccion, $acudiente_id);
    /*if ($stmt_acudiente->execute()) {
        echo "Dirección actualizada correctamente en la tabla acudiente.<br>";
    } else {
        echo "Error al actualizar la dirección en la tabla acudiente.<br>";
    }*/

    if(($stmt_persona->execute()) && ($stmt_acceso->execute()) && ($stmt_acudiente->execute())){
        echo "<script> alert('Datos actualizados correctamente en la tabla persona.')</script>";
        echo "<script> window.close(); </script>";
    }else{

    }
    $stmt_persona->close();
    $stmt_acceso->close();
    $stmt_acudiente->close();


    $conn->close();
} else {
    echo "Acceso denegado.";
}
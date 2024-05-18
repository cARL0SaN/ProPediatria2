<?php
require_once 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $estado = $_POST['fk_id_estado'];
    
    $conexion = new Conexion();
    $conn = $conexion->conectar();

    if($estado == 'Activo'){
        $estadoNumero = 1;
    }else if($estado == 'Inactivo'){
        $estadoNumero = 0;
    }else{
        echo "<script>alert('Valor de estado no válido.');</script>";
    }

    $sql_acceso = "UPDATE acceso SET fk_id_estado = ? WHERE Persona_idPersona = ?";
    $sql_acceso = $conn->prepare($sql_acceso);
    $sql_acceso->bind_param("ii", $estadoNumero, $usuario);
    $sql_acceso->execute();

    $sql_acceso->close();
    $conexion->cerrarConexion($conn);

    echo "Estado actualizado correctamente";
} else {
    echo "<script>alert('Error al procesar la solicitud.');</script>";
}
<?php
require_once 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $idPaciente = $_POST['idPersona'];

    $conexion = new Conexion();
    $conn = $conexion->conectar();

    $sql_paciente = "DELETE FROM paciente WHERE idPaciente_idPersona = ?";
    $stmt_paciente = $conn->prepare($sql_paciente);
    $stmt_paciente->bind_param("i", $idPaciente);
    

    // Luego elimina de la tabla 'persona'
    /*$sql_persona = "DELETE FROM persona WHERE idPersona = ?";
    $stmt_persona = $conn->prepare($sql_persona);
    $stmt_persona->bind_param("i", $idPaciente_idPersona);
    $stmt_persona->close();*/

    
    if ($stmt_paciente->execute()) {
        echo "Paciente eliminado correctamente.";
    } else {
        echo "Error al eliminar paciente: " . $stmt_paciente->error;
    }

    $stmt_paciente->execute();
    $stmt_paciente->close();
    $conexion->cerrarConexion($conn);


} else {
    echo "Acceso denegado.";
}
?>


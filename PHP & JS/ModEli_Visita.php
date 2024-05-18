<?php
require_once 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $idVisita = $_POST['idVisita'];
    $pesoVisita = $_POST['pesoPaciente_visita'];
    $alturaVista = $_POST['alturaPaciente_visita'];
    $perimetroVisita = $_POST['perimetroCefaPaciente_visita'];
    $observacionesVisitas = $_POST['obserCirugPaciente_visita'];

    $conexion = new Conexion();
    $conn = $conexion->conectar();

    if ($_POST['action'] == 'actualizar') {

        function calcularIMC($peso, $altura)
    {
        $alturaMetros = $altura / 100;

        $imc = $peso / ($alturaMetros * $alturaMetros);

        $imc = round($imc, 2);

        return $imc;
    }
    
    $imc = calcularIMC($pesoVisita, $alturaVista);

    $sql_visita = "UPDATE Visita SET  pesoPaciente_visita = ?,alturaPaciente_visita = ?, perimetroCefaPaciente_visita = ?, obserCirugPaciente_visita = ?, IMC_visita = ?  WHERE idVisita = ?";
    $stmt_visita = $conn->prepare($sql_visita);
    $stmt_visita->bind_param("iiisdi", $pesoVisita, $alturaVista, $perimetroVisita, $observacionesVisitas, $imc, $idVisita);
    $stmt_visita->execute();

    $stmt_visita->close();
    $conexion->cerrarConexion($conn);

    echo "<script>alert('Datos actualizados correctamente.');</script>";
    echo "<script> window.close();</script>";

    } elseif ($_POST['action'] == 'eliminar') {

    $sql = "DELETE FROM visita WHERE idVisita = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $idVisita);

    if ($stmt->execute()) {
        echo "<script> alert('La visita se eliminó correctamente.')</script> ";
        echo "<script> window.close();</script>";
    } else {
        echo "Error al eliminar la visita: " . $conn->error;
    }

    $stmt->close();
    $conn->close();
    }
} else {
    echo "<script>alert('Error al procesar la solicitud.');</script>";
}

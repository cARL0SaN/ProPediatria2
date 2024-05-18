<?php
include_once "conexion.php";

function mostrarDatosVisita($row)
{
?>
    <!DOCTYPE html>
    <html lang="es">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Detalles de Visitas</title>
        <script src="../PHP & JS/admin.js" defer></script>
        <link rel="stylesheet" href="../CSS/DatosBusNPA.css">
    </head>

    <body>
        <form class="campoActualizar" action="../PHP & JS/ModEli_Visita.php" method="post">
            <div class="columna">
                <div>
                    <label>Id de la visita:</label>
                    <input type="text" name="idVisita" value="<?php echo $row['idVisita']; ?>" readonly>
                </div>
                <div>
                    <label>Fecha de la visita:</label>
                    <input type="date" name="fecha_visita" value="<?php echo $row['fecha_visita']; ?>" readonly>
                </div>
                <div>
                    <label>Peso del paciente:</label>
                    <input type="text" name="pesoPaciente_visita" value="<?php echo $row['pesoPaciente_visita']; ?>">
                </div>
                <div>
                    <label>Altura del paciente:</label>
                    <input type="text" name="alturaPaciente_visita" value="<?php echo $row['alturaPaciente_visita']; ?>">
                </div>
            </div>

            <div class="columna">
                <div>
                    <label>Perímetro cefálico del paciente:</label>
                    <input type="text" name="perimetroCefaPaciente_visita" value="<?php echo $row['perimetroCefaPaciente_visita']; ?>">
                </div>
                <div>
                    <label>IMC del paciente:</label>
                    <input type="text" name="IMC_visita" value="<?php echo $row['IMC_visita']; ?>" readonly>
                </div>
                <div>
                    <label>Observaciones cirugía del paciente:</label>
                    <input type="text" name="obserCirugPaciente_visita" value="<?php echo $row['obserCirugPaciente_visita']; ?>">
                </div>
                
            </div>
            <div class="clear"></div>

            <button type="submit" name="action" value="actualizar">Actualizar</button>
                <button type="submit" name="action" value="eliminar">Eliminar</button>
                <hr>
        </form>
    </body>

    </html>

    <?php
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $conexion = new Conexion();
    $conn = $conexion->conectar();

    $id = $_POST["identifier"];

    $sql = "SELECT visita.idVisita, visita.fecha_visita, visita.pesoPaciente_visita, visita.alturaPaciente_visita, visita.perimetroCefaPaciente_visita, visita.IMC_visita, visita.obserCirugPaciente_visita
            FROM visita
            INNER JOIN paciente ON visita.fk_idPaciente_idPersona = paciente.idPaciente_idPersona
            WHERE paciente.idPaciente_idPersona = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        echo "<script>alert('No se encontraron visitas registradas.')</script>";
        echo "<script> window.close();</script>";
    } else {
    ?>
        <h1>Visitas</h1>
<?php
        while ($row = $result->fetch_assoc()) {
            mostrarDatosVisita($row);
        }
    }

    $stmt->close();
} else {
    echo "<script>alert('Acceso denegado.')</script>";
}
?>
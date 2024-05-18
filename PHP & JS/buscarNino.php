<?php
require_once 'conexion.php';
function mostrarDatosNino($row)
{
?>
    <!DOCTYPE html>
    <html>
    <html lang="es">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Detalle del Niño</title>
        <script src="../PHP & JS/admin.js" defer></script>
        <link rel="stylesheet" href="../CSS/DatosBusNPA.css">
    </head>

    <body>
        <h1>Acudiente</h1>
        <form class="campoActualizar" action="actualizarNino.php" method="post" enctype="multipart/form-data">
                <div>
                    <label>Identificación:</label>
                    <input type="text" type="hidden" name="idNino" value="<?php echo $row['idPersona']; ?>" readonly>
                </div>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="nom_persona" value="<?php echo $row['nom_persona']; ?>">
                </div>
                <div>
                    <label>Apellido:</label>
                    <input type="text" name="ape_persona" value="<?php echo $row['ape_persona']; ?>">
                </div>
                <div>
                    <label>Fecha Nacimiento:</label>
                    <input type="date" name="fechaNaci_persona" value="<?php echo $row['fechaNaci_persona']; ?>" readonly>
                </div>
                <div>
                    <label>Tipo Sangre:</label>
                    <input type="text" name="fk_id_tipoSangre" value="<?php echo $row['fk_id_tipoSangre']; ?>">
                </div>
                <div>
                    <label>Tipo Documento:</label>
                    <input type="text" name="TipoDocumento_idTipoDocumento" value="<?php echo $row['TipoDocumento_idTipoDocumento']; ?>">
                </div>
                <div>
                    <label>Sexo:</label>
                    <input type="text" name="sexo_paciente" value="<?php echo $row['sexo_paciente']; ?>">
                </div>
                <div>
                    <label>Acudiente:</label>
                    <input type="text" name="fk_id_Acudiente" value="<?php echo $row['Acudiente_Persona_idPersona']; ?>">
                </div>
                <div>
                    <label>Pediatra:</label>
                    <input type="text" name="fk_id_Pediatra" value="<?php echo $row['Pediatra_idPediatra_idPersona']; ?>">
                </div>
                <input type="submit" name="action" value="Actualizar" id="botonActualizar">
                <button type="button" name="action" value="Eliminar" onclick="eliminarNino('<?php echo $row['idPersona']; ?>')">Eliminar</button>
                <button type="button" name="action" value="Cancelar" onclick="cancelar()">Cancelar</button>
            </form>
    </body>

    </html>
    <?php
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nino_id = $_POST['idNino'];

    $conexion = new Conexion();
    $conn = $conexion->conectar();

    $sql = "SELECT persona.idPersona, persona.nom_persona, persona.ape_persona, persona.fechaNaci_persona, persona.TipoDocumento_idTipoDocumento, persona.fk_id_tipoSangre, paciente.sexo_paciente, paciente.Acudiente_Persona_idPersona, paciente.Pediatra_idPediatra_idPersona
            FROM persona
            JOIN paciente ON persona.idPersona = paciente.idPaciente_idPersona
            WHERE paciente.idPaciente_idPersona = ?";
    $stmt = $conn->prepare($sql);
    if ($stmt) {
        $stmt->bind_param("i", $nino_id);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            mostrarDatosNino($row);
        } else {
            echo "<script>alert('No se encontró ningún niño con ese ID.');</script>";
            echo "<script> window.close(); </script>";
        }

        $stmt->close();
    } else {
        echo "Error al preparar la consulta: " . $conn->error;
    }

    $conexion->cerrarConexion($conn);
} else {
    echo "<p>No se proporcionó ningún término de búsqueda.</p>";
}
?>

<script>
    function eliminarNino(idPersona) {
        if (confirm('¿Estás seguro de que deseas eliminar este paciente?')) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "eliminarNino.php", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    alert(xhr.responseText);
                    window.close();
                }
            };
            xhr.send("idPersona=" + idPersona);
        }
    }
    //onclick="eliminarNino('<?php echo $row['idPersona']; ?>')"
</script>
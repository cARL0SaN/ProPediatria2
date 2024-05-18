<?php
require_once 'conexion.php';
function mostrarDatosPediatra($row)
{
?>
    <!DOCTYPE html>
    <html lang="es">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Detalle del Pediatra</title>
        <script src="../PHP & JS/admin.js" defer></script>
        <link rel="stylesheet" href="../CSS/DatosBusNPA.css">
    </head>

    <body>
        <h1>Pediatra</h1>
        <form class="campoActualizar" action="actualizarPediatra.php" method="post" enctype="multipart/form-data">
            <div class="columna">
                <div>
                    <label>Identificación:</label>
                    <input type="text" type="hidden" name="pediatra_id" value="<?php echo $row['idPersona']; ?>" readonly>
                </div>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="nom_persona" value="<?php echo $row['nom_persona']; ?>">
                </div>
                <div>
                    <label>Correo:</label>
                    <input type="text" name="correo_persona" value="<?php echo $row['correo_persona']; ?>">
                </div>
                <div>
                    <label>Fecha Nacimiento:</label>
                    <input type="date" name="fechaNaci_persona" value="<?php echo $row['fechaNaci_persona']; ?>">
                </div>
                <div>
                    <label>Lugar de Trabajo:</label>
                    <input type="text" name="lugarLabora_pediatra" value="<?php echo $row['lugarLabora_pediatra']; ?>">
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="text" name="clave_acce" value="<?php echo htmlspecialchars($row['clave_acce']); ?>">
                </div>
            </div>
            <div class="columna">
                <div>
                    <label>Apellido:</label>
                    <input type="text" name="ape_persona" value="<?php echo $row['ape_persona']; ?>">
                </div>
                <div>
                    <label>Telefono:</label>
                    <input type="text" name="telefono_persona" value="<?php echo $row['telefono_persona']; ?>">
                </div>
                <div>
                    <label>Tipo Doc:</label>
                    <input type="text" name="TipoDocumento_idTipoDocumento" value="<?php echo $row['TipoDocumento_idTipoDocumento']; ?>">
                </div>
                <div>
                    <label>Tipo Sangre:</label>
                    <input type="text" name="fk_id_tipoSangre" value="<?php echo $row['fk_id_tipoSangre']; ?>">
                </div>
                <div>
                    <label>Sexo:</label>
                    <input type="text" name="sexo_pediatra" value="<?php echo $row['sexo_pediatra']; ?>">
                </div>
                <div>
                    <label>Foto:</label>
                    <input type="text" name="foto_pediatra" value="<?php echo $row['foto_pediatra']; ?>">
                </div>
            </div>
            <div class="clear"></div>
            <input type="submit" value="Actualizar" id="botonActualizar">
            <button type="button" name="Eliminar" onclick="eliminarPediatra(<?php echo $row['idPersona']; ?>)">Eliminar</button>
            <button type="button" name="action" value="Cancelar" onclick="cancelar()">Cancelar</button>
        </form>
        <form class="estadoAcceso" id="estadoForm">
            <div>
                <label>Usuario:</label>
                <input type="text" name="usuario" value="<?php echo htmlspecialchars($row['idPersona']); ?>" readonly>
            </div>
            <div>
                <div>
                    <label>Estado: </label>
                    <input type="text" name="fk_id_estado" value="<?php echo htmlspecialchars($row['fk_id_estado']); ?>" readonly>
                </div>
            </div>
            <div class="clear"></div>
            <button type="button" name="estado" value="Activo" onclick="ActualizarEstadoAcc(this.value)">Activo</button>
            <button type="button" name="estado" value="Inactivo" onclick="ActualizarEstadoAcc(this.value)">Inactivo</button>
        </form>
    </body>

    </html>
<?php
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $pediatra_id = $_POST['buscar'];

    $conexion = new Conexion();
    $conn = $conexion->conectar();

    $sql = "SELECT persona.idPersona, persona.nom_persona, persona.ape_persona, persona.correo_persona, persona.telefono_persona, persona.fechaNaci_persona, persona.TipoDocumento_idTipoDocumento, persona.Rol_idRol, persona.fk_id_tipoSangre, pediatra.sexo_pediatra, pediatra.lugarLabora_pediatra, pediatra.foto_pediatra, acceso.Persona_idPersona, acceso.clave_acce, acceso.fk_id_estado
            FROM persona
            JOIN pediatra ON persona.idPersona = pediatra.idPediatra_idPersona
            LEFT JOIN acceso ON persona.idPersona = acceso.Persona_idPersona
            WHERE pediatra.idPediatra_idPersona = ?";
    $stmt = $conn->prepare($sql);
    if ($stmt) {
        $stmt->bind_param("i", $pediatra_id);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            mostrarDatosPediatra($row);
        } else {
            echo "<script>alert('No se encontró ningún pediatra con ese ID.');</script>";
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
    function ActualizarEstadoAcc(estado) {
        var pediatra_id = document.getElementsByName("pediatra_id")[0].value;
        var form = document.getElementById("estadoForm");
        var formData = new FormData(form);
        formData.append("fk_id_estado", estado);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "actualizarEstadoAcceso.php", true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert(xhr.responseText);
                window.close();
            } else {
                alert('Error al procesar la solicitud.');
            }
        };
        xhr.send(formData);
    }
</script>

<script>
    function eliminarPediatra(idPersona) {
        if (confirm('¿Estás seguro de que deseas eliminar este pediatra?')) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "eliminarPediatra.php", true);
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
</script>
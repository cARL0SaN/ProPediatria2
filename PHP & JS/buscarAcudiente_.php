<?php
include_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id_Acudiente = $_POST["idAcudiente"];

    $conexion = new Conexion();
    $conn = $conexion->conectar();

    $sql = "SELECT persona.idPersona, persona.nom_persona, persona.ape_persona, persona.correo_persona, persona.telefono_persona, persona.fechaNaci_persona, persona.TipoDocumento_idTipoDocumento, persona.Rol_idRol, persona.fk_id_tipoSangre, acudiente.fk_id_vinculo, acudiente.direccion_acudiente, acudiente.Persona_idPersona, acceso.Persona_idPersona, acceso.clave_acce, acceso.fk_id_estado
            FROM persona
            JOIN acudiente ON persona.idPersona = acudiente.Persona_idPersona
            LEFT JOIN acceso ON persona.idPersona = acceso.Persona_idPersona
            WHERE acudiente.Persona_idPersona = ?";

    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("i", $id_Acudiente);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
?>
            <form class="campoActualizar" action="actualizarAcudiente.php" method="post" enctype="multipart/form-data">
                <div>
                    <label>Identificación:</label>
                    <input type="text" name="idAcudiente" value="<?php echo $row['idPersona']; ?>" readonly>
                </div>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="nom_persona" value="<?php echo $row['nom_persona']; ?>">
                </div>
                <div>
                    <label">Apellido:</label>
                    <input type="text" name="ape_persona" value="<?php echo $row['ape_persona']; ?>">
                </div>
                <div>
                    <label">Correo:</label>
                    <input type="text" name="correo_persona" value="<?php echo $row['correo_persona']; ?>">
                </div>
                <div>
                    <label">Telefono:</label>
                    <input type="text" name="telefono_persona" value="<?php echo $row['telefono_persona']; ?>">
                </div>
                <div>
                    <label">Fecha de Nacimiento:</label>
                    <input type="date" name="fechaNaci_persona" value="<?php echo $row['fechaNaci_persona']; ?>" >
                </div>
                <div>
                    <label">Direccion:</label>
                    <input type="text" name="direccion_Acudiente" value="<?php echo $row['direccion_acudiente']; ?>" >
                </div>
                <div>
                    <label">Contraseña:</label>
                    <input type="text" name="clave" value="<?php echo $row['clave_acce']; ?>">
                </div>

                <input type="submit" value="Actualizar" id="botonActualizar">
                <button type="button" name="Eliminar" onclick="eliminarAcudiente('<?php echo $row['idPersona']; ?>')">Eliminar</button>
            </form>

                <form class="estadoAcceso" id="estadoForm">
                <div>
                    <label">Usuario:</label>
                    <input type="text" name="usuario" value="<?php echo $row['Persona_idPersona']; ?>" readonly>
                </div>
                <div>
                    <label>Estado: </label>
                    <input type="text" name="fk_id_estado" value="<?php echo htmlspecialchars($row['fk_id_estado']); ?>" readonly>
                </div>
                <button type="button" name="estado" value="Activo" onclick="ActualizarEstadoAcc(this.value)">Activo</button>
                <button type="button" name="estado" value="Inactivo" onclick="ActualizarEstadoAcc(this.value)">Inactivo</button>
            </form>

                
                
<?php
        } else {
            echo "<script>alert('No se encontró ningún acudiente con ese ID.');</script>";
        }

        $stmt->close();
    } else {
        echo "Error al preparar la consulta: " . $conn->error;
    }

    $conexion->cerrarConexion($conn);
}
?>

<script>
    function ActualizarEstadoAcc(estado) {
        var pediatra_id = document.getElementsByName("idAcudiente")[0].value;
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
    function eliminarAcudiente(idPersona) {
        if (confirm('¿Estás seguro de que deseas eliminar este acudiente?')) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "eliminarAcudiente.php", true);
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
<?php
include_once "conexion.php";
session_start();

if (isset($_SESSION['Persona_idPersona'])) {
    $conexion = new Conexion();
    $conn = $conexion->conectar();
    $img = "../img/perfil.png";

    $id = $_SESSION['Persona_idPersona'];

    $sql = "SELECT * FROM acceso WHERE Persona_idPersona = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    if ($row['fk_id_estado'] === 0) {
        echo "<script>alert('La cuenta esta inactiva')</script>";

        session_destroy();
        header("refresh:1;url=../HTML/inicio_sesion.html");
        exit();
    } else {
        $sql = "SELECT nom_persona, ape_persona, correo_persona, telefono_persona, fechaNaci_persona FROM persona WHERE idPersona = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();

        if ($row) {
            $sql2 = "SELECT lugarLabora_pediatra, foto_pediatra FROM pediatra WHERE idPediatra_idPersona = ?";
            $stmt2 = $conn->prepare($sql2);
            $stmt2->bind_param("i", $id);
            $stmt2->execute();
            $result2 = $stmt2->get_result();
            $row2 = $result2->fetch_assoc();

            if ($row2['foto_pediatra'] != null) {
                $img = $row2['foto_pediatra'];
            }

            $Cnom = $row['nom_persona'];
            $Cape = $row['ape_persona'];
            $Cemail = $row['correo_persona'];
            $Ctel = $row['telefono_persona'];
            $Cfec = $row['fechaNaci_persona'];
            $Ctrabajo = $row2['lugarLabora_pediatra'];

            if ($Cemail == null) {
                $Cemail = "";
            }
            if ($Ctel == null) {
                $Ctel = "";
            }

            include '../HTML/Ven_Pediatra.html';
        } else {
            echo "<script>alert('error')</script>";
        }

        // Cerrar las consultas y la conexión
        $stmt->close();
        $stmt2->close();
    }
} else {
    echo "<script>alert('La variable de sesión está vacía')</script>";
    header("refresh:1;url=../HTML/index.html");
}

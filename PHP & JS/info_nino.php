<?php
include_once "conexion.php";
session_start();

if (isset($_SESSION['Persona_idPersona'])) {
    $conexion = new Conexion();
    $conn = $conexion->conectar();

    $id = $_SESSION['Persona_idPersona'];
    $id_nino = $_GET['ident'];

    $sql0 = "SELECT Rol_idRol FROM persona WHERE idPersona = ?";
    $stmt0 = $conn->prepare($sql0);
    $stmt0->bind_param("i", $id);
    $stmt0->execute();
    $result0 = $stmt0->get_result();
    $row0 = $result0->fetch_assoc();

    // Consulta preparada para evitar inyección SQL
    $sql = "SELECT idPaciente_idPersona, sexo_paciente FROM paciente WHERE idPaciente_idPersona = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_nino);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    if ($row) {
        $Cid = $row['idPaciente_idPersona'];
        $Csex = $row['sexo_paciente'] === 'F' ? 'Femenino' : 'Masculino';

        // Consulta preparada para evitar inyección SQL
        $sql2 = "SELECT nom_persona, ape_persona, fechaNaci_persona FROM persona WHERE idPersona = ?";
        $stmt2 = $conn->prepare($sql2);
        $stmt2->bind_param("i", $Cid);
        $stmt2->execute();
        $result2 = $stmt2->get_result();
        $row2 = $result2->fetch_assoc();

        if ($row2) {
            $Cnom = $row2['nom_persona'];
            $Cape = $row2['ape_persona'];
            $Cfec = $row2['fechaNaci_persona'];

            // Consulta preparada para evitar inyección SQL
            $sql3 = "SELECT Acudiente_Persona_idPersona FROM paciente  WHERE idPaciente_idPersona = ?";
            $stmt3 = $conn->prepare($sql3);
            $stmt3->bind_param("i", $Cid);
            $stmt3->execute();
            $result3 = $stmt3->get_result();
            $row3 = $result3->fetch_assoc();

            $sql4 = "SELECT telefono_persona FROM persona  WHERE idPersona = ?";
            $stmt4 = $conn->prepare($sql4);
            $stmt4->bind_param("i", $row3['Acudiente_Persona_idPersona']);
            $stmt4->execute();
            $result4 = $stmt4->get_result();
            $row4 = $result4->fetch_assoc();

            if ($row4) {
                $Ctel = $row4['telefono_persona'];
                $sql5 = "SELECT idVisita, pesoPaciente_visita, alturaPaciente_visita, perimetroCefaPaciente_visita, fecha_visita, IMC_visita, nom_persona 
                FROM visita INNER JOIN pediatra ON visita.Pediatra_idPediatra_idPersona = pediatra.idPediatra_idPersona INNER JOIN persona 
                ON pediatra.idPediatra_idPersona = persona.idPersona WHERE visita.fk_idPaciente_idPersona = $id_nino";
                $result5 = $conn->query($sql5);
                include '../HTML/Ventana_nino.html';
            } else {
                echo "<script>alert('No se pudo obtener el teléfono del acudiente')</script>";
            }
        } else {
            echo "<script>alert('No se pudo obtener la información del paciente')</script>";
        }
    } else {
        echo "<script>alert('No se encontraron pacientes asociados al id')</script>";
    }






    // Cerrar las consultas y la conexión
    $stmt0->close();
    $stmt->close();
    $stmt2->close();
    $stmt3->close();
    $conn->close();
} else {
    echo "<script>alert('La variable de sesión está vacía')</script>";
    header("url=../HTML/index.html");
    exit();
}

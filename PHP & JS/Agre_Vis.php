<?php
include_once "conexion.php";
session_start();

if (isset($_SESSION['Persona_idPersona'])) {

    $conexion = new Conexion();
    $conn = $conexion->conectar();

    $id = $_SESSION['Persona_idPersona'];
    $fec_visita = $_POST["fecha"];
    $id_nino = $_POST["id_nino"];

    $talla = $_POST["talla"];
    $peso = $_POST["peso"];
    $peri = $_POST["peri"];

    if ($talla != "") {
        $talla2 = $talla / 100;
    }

    if ($peso != "" && $talla != "") {
        $imc = $peso / pow($talla2, 2);
    }
    

    $obs = $_POST["obser"];
    if ($obs == '') {
        $obs = 'Sin observaciones';
    }

    $seleccionados = $_POST["seleccionados2"];
    $seleccionados2 = $_POST["seleccionados"];

    $query = "SELECT MAX(idVisita) AS idVisita FROM visita";
    $stmt = $conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    if ($result->num_rows == 0) {
        $visita = 1;
    } else {
        $visita = $row['idVisita'] + 1;
    }

    $sqlPersona = "INSERT INTO visita (idVisita, pesoPaciente_visita, alturaPaciente_visita, perimetroCefaPaciente_visita, fecha_visita, obserCirugPaciente_visita, IMC_visita, Pediatra_idPediatra_idPersona, fk_idPaciente_idPersona) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sqlPersona);
    $stmt->bind_param("idddssdii", $visita, $peso, $talla, $peri, $fec_visita, $obs, $imc, $id, $id_nino);
    $result = $stmt->execute();

    if ($_POST['des3'] === 'no') {
        $observaciones2 = '';
        $sql = "INSERT INTO visita_has_tipoenfermedad (Visita_idVisita, TipoEnfermedad_idTipoEnfermedad, observacion_visitaEnfermedad) 
           VALUES ('$visita', 0, '$observaciones2')";
        $conn->query($sql);
    } else {
        $lineas2 = explode("\n", $seleccionados2);
        foreach ($lineas2 as $linea) {
            if (!empty(trim($linea))) {
                $datos = explode(" - Observación: ", $linea);

                $TipoEnfermedad = $datos[0];
                $observaciones2 = $datos[1];

                $query2 = "SELECT idTipoEnfermedad FROM tipoenfermedad WHERE nom_TipoEnfermedad = ?";
                $stmt2 = $conn->prepare($query2);
                $stmt2->bind_param("s", $TipoEnfermedad);
                $stmt2->execute();
                $result2 = $stmt2->get_result();
                $row2 = $result2->fetch_assoc();

                echo $idTipoEnfermedad = $row2['idTipoEnfermedad'];

                $sql = "INSERT INTO visita_has_tipoenfermedad (Visita_idVisita, TipoEnfermedad_idTipoEnfermedad, observacion_visitaEnfermedad) 
                    VALUES ('$visita', '$idTipoEnfermedad', '$observaciones2')";

                if ($conn->query($sql) === TRUE) {
                    echo "Datos insertados correctamente.";
                    $stmt2->close();
                } else {
                    echo "Error al insertar datos: " . $conn->error;
                }
            }
        }
    }

    if ($_POST['des1'] === 'no') {
        $observaciones = '';
        $sql = "INSERT INTO tipovacuna_has_visita (TipoVacuna_idTipoVacuna, Visita_idVisita, observacion_visitaVacuna) 
           VALUES (0, '$visita', '$observaciones')";
        $conn->query($sql);
    } else {
        $lineas = explode("\n", $seleccionados);
        foreach ($lineas as $linea) {
            if (!empty(trim($linea))) {
                $datos = explode(" - Observación: ", $linea);

                $TipoVacuna = $datos[0];
                $observaciones = $datos[1];

                $query2 = "SELECT idTipoVacuna FROM tipovacuna WHERE nom_TipoVacuna = ?";
                $stmt2 = $conn->prepare($query2);
                $stmt2->bind_param("s", $TipoVacuna);
                $stmt2->execute();
                $result2 = $stmt2->get_result();
                $row2 = $result2->fetch_assoc();

                $idTipoVacuna = $row2['idTipoVacuna'];

                $sql = "INSERT INTO tipovacuna_has_visita (TipoVacuna_idTipoVacuna, Visita_idVisita, observacion_visitaVacuna) 
                VALUES ('$idTipoVacuna', '$visita', '$observaciones')";

                if ($conn->query($sql) === TRUE) {
                    echo "Datos insertados correctamente.";
                    $stmt2->close();
                } else {
                    echo "Error al insertar datos: " . $conn->error;
                }
            }
        }
    }



    //echo $visita, " ", $talla, " ", $peso, " ", $peri, " ", $talla2, " ", $imc;
    /*

    $sqlPersona = "INSERT INTO visita (idVisita, pesoPaciente_visita, alturaPaciente_visita, perimetroCefaPaciente_visita, fecha_visita, obserCirugPaciente_visita, IMC_visita, Pediatra_idPediatra_idPersona, fk_idPaciente_idPersona) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sqlPersona);
    $stmt->bind_param("iiiissiii", $visita, $peso, $talla, $peri, $fec_visita, $obs, $imc, $id, $id_nino);
    $result = $stmt->execute();

    $lineas = explode("\n", $seleccionados);

    foreach ($lineas as $linea) {
        $datos = explode(" - Observación: ", $linea);

        $idTipoVacuna = $datos[0];
        $observaciones = $datos[1];

        $sql = "INSERT INTO tipovacuna_has_visita (TipoVacuna_idTipoVacuna, Visita_idVisita, observacion_visitaVacuna) 
            VALUES ('$visita', '$idTipoVacuna', '$observaciones')";

        if ($conn->query($sql) === TRUE) {
            echo "Datos insertados correctamente.";
        } else {
            echo "Error al insertar datos: " . $conn->error;
        }
    }
*/

    $stmt->close();
    $conn->close();
    echo 'refresh:1;', '<script>window.close()</script>';
} else {
    echo "<script>alert('La variable de sesión está vacía')</script>";
    header("url=../HTML/index.html");
    exit();
}

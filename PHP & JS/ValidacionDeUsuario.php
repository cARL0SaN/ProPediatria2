<?php
include_once "conexion.php";

// Verifica si se han enviado datos por POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Iniciar sesión
    session_start();


    $db = mysqli_connect('localhost', 'root', '', 'propediatria');

    $errors0 = "<script>alert('Acceso denegado a Administrador')</script>";
    $errors1 = "<script>alert('Acceso denegado a Pediatra')</script>";
    $errors2 = "<script>alert('Acceso denegado a Acudiente')</script>";
    $errors3 = "<script>alert('Acceso denegado')</script>";

    if (isset($_POST['validar'])) {
        $id = mysqli_real_escape_string($db, $_POST['ident']);
        $cont = mysqli_real_escape_string($db, $_POST['contrasena']);

        // Comprobar si el nombre de usuario es válido
        $query = "SELECT Persona_idPersona, clave_acce FROM acceso WHERE Persona_idPersona='$id'";
        $results = mysqli_query($db, $query);
        $row = mysqli_fetch_assoc($results);

        if (mysqli_num_rows($results) == 1) {
            $query1 = "SELECT idPersona, Rol_idRol FROM persona WHERE idPersona='$id'";
            $results1 = mysqli_query($db, $query1);
            $row1 = mysqli_fetch_assoc($results1);

            if ($row['Persona_idPersona'] == $row1['idPersona']) {
                $var = $row1['Rol_idRol'];
            }

            if ($var == 1) {
                if ($cont == $row['clave_acce']) {
                    // Inicio de sesión válido
                    $_SESSION['Persona_idPersona'] = $id;
                    echo "<script>alert('Bienvenido')</script>";
                    header("refresh:1;url=../HTML/Index_Administrador.html");
                    exit();
                } else {
                    // Contraseña inválida
                    echo $errors1;
                }
            }
            if ($var == 2) {
                if ($cont == $row['clave_acce']) {
                    // Inicio de sesión válido
                    $_SESSION['Persona_idPersona'] = $id;
                    header("refresh:1;url=info_pediatra.php");
                    exit();
                } else {
                    // Contraseña inválida
                    echo $errors1;
                }
            } else {
                if ($cont == $row['clave_acce']) {
                    // Inicio de sesión válido
                    $_SESSION['Persona_idPersona'] = $id;
                    $query2 = "SELECT idPaciente_idPersona, Acudiente_Persona_idPersona FROM paciente WHERE Acudiente_Persona_idPersona='$id'";
                    $results2 = mysqli_query($db, $query2);
                    $row2 = mysqli_fetch_assoc($results2);
                    $id_nino = $row2['idPaciente_idPersona'];
                    header("refresh:1;url=info_nino.php?ident=$id_nino");
                    exit();
                } else {
                    // Contraseña inválida
                    echo $errors2;
                }
            }
        } else {
            echo $errors3;
        }
    }
    header("refresh:1;url=../HTML/inicio_sesion.html");
    exit();
} else {
    // Si no se han enviado datos por POST, redirige a la página de inicio de sesión
    header("Location: Index.html");
    exit();
}

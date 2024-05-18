<?php
session_start(); // Iniciar la sesión si aún no está iniciada

// Destruir la sesión
if (isset($_SESSION['Persona_idPersona'])) {
    session_destroy();

    // Redirigir a la página de inicio o a donde desees
    header("Location: ../HTML/index.html");
    exit();
}
?>


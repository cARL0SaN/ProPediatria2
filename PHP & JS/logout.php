<?php
session_start(); // Iniciar la sesión si aún no está iniciada

// Destruir la sesión
session_destroy();

// Redirigir a la página de inicio o a donde desees
header("Location: ../index.html");
exit;
?>
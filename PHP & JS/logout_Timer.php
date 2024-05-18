<?php
$sessionActive = isset($_SESSION['Persona_idPersona']) && !empty($_SESSION['Persona_idPersona']);
?>

<script>
    var sessionActive = <?php echo json_encode($sessionActive); ?>;
    if (sessionActive) {
        const inactivityTime = 10 * 60 * 1000; // 10 minutos en milisegundos

        let timeout;

        function startTimer() {
            timeout = setTimeout(() => {
                // Mostrar mensaje de confirmación antes de redirigir
                if (confirm("Tu sesión se cerrará debido a la inactividad. ¿Quieres continuar?")) {
                    // Redirigir a la página de cierre de sesión si se confirma
                    window.location.href = 'logout.php';
                }
            }, inactivityTime);
        }

        function resetTimer() {
            clearTimeout(timeout);
            startTimer();
        }

        document.addEventListener('mousemove', resetTimer);
        document.addEventListener('keypress', resetTimer);

        startTimer(); // Iniciar el temporizador al cargar la página
    }
</script>

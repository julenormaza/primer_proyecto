<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $apellido = htmlspecialchars($_POST["apellido"]);
    $email = htmlspecialchars($_POST["email"]);

    echo "<h2>Hola, $nombre $apellido</h2>";
    echo "<p>Te has registrado con el correo: <strong>$email</strong></p>";
} else {
    echo "<p>Hubo un error en el envío del formulario.</p>";
}
?>
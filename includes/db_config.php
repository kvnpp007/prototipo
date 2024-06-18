<?php
// db_config.php
$servername = "localhost";
$username = "nombre_usuario";
$password = "contraseña";
$dbname = "nombre_base_datos";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>

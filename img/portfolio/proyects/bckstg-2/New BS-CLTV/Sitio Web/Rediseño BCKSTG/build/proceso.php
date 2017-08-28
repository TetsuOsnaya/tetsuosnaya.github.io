<?php
$usuario = 'dbo645147558';
$huesped = 'db645147558.db.1and1.com';
$clave ='y0s0yp0ll0';
$DB = 'db645147558';

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
/*
$conexion = mysqli_connect()
mysql_connect($huesped,$usuario,$clave) or die("No  se pudo ralizar la conexion");
$db = mysql_select_db($DB,$conexion) or die("No se pudo seleccionar la base de datos");
$nombre ='SET JAFET';
$consulta = "SELECT * FROM prueba WHERE NOMBRE='$nombre'";
$resultado = mysql_query($consulta) or die("No se pudo realizar consulta");
foreach ($resultado as $id => $lol) {
	echo "<p>{$id},{$lol}</p>";
}*/


$conexion = mysqli_connect(
  $huesped,
  $usuario,
  $clave,
  $DB
);

if ($conexion == FALSE){
  echo('Error en la conexión.');
  exit();
}

$resultado = mysqli_query(
  $conexion,
  "INSERT INTO Suscriptores (NOMBRE, CORREO)
VALUES ('{$nombre}','{$correo}')"
);

if ($resultado == FALSE){
  echo('Error en la inserción.');
  mysqli_close($conexion);
  exit();
}else {
  echo "Proceso exitoso";
  mysqli_close($conexion);
  exit();
}


?>

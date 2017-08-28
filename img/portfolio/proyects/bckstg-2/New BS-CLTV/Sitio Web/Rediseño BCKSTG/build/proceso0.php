<?php
$usuario = 'dbo645147558';
$huesped = 'db645147558.db.1and1.com';
$clave ='y0s0yp0ll0';
$DB = 'db645147558';

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$proceso = $_POST['proceso'];
$buscar = $_POST['buscar'];
/****************************************/

function utf8_encode_deep(&$input) {
    if (is_string($input)) {
        $input = utf8_encode($input);
    } else if (is_array($input)) {
        foreach ($input as &$value) {
            utf8_encode_deep($value);
        }
        unset($value);
    } else if (is_object($input)) {
        $vars = array_keys(get_object_vars($input));

        foreach ($vars as $var) {
            utf8_encode_deep($input->$var);
        }
    }
}

/********************************************/
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
else {
 switch ($proceso) {

  case 1:
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
   break;

   case 2:
   $resultado = mysqli_query(
    $conexion,
    'SELECT TIT,IMG,URL FROM Contenido'
   );

   if ($resultado == FALSE){
    echo('Error en la consulta.');
    mysqli_close($conexion);
    exit();
   }
   else {
    $posts=array();
    while($fila = mysqli_fetch_assoc($resultado)){
    $posts[]=$fila;
    }
    utf8_encode_deep($posts);

    mysqli_free_result($resultado);
    mysqli_close($conexion);


    $json1=json_encode($posts);
    echo "{$json1}";
   }

   break;


   case 3:
   $resultado = mysqli_query(
    $conexion,
    "SELECT TIT,IMG,URL FROM Contenido WHERE UPPER(TIT) LIKE UPPER('%{$buscar}%')"
   );

   if ($resultado == FALSE){
    echo('Error en la consulta.');
    mysqli_close($conexion);
    exit();
   }
   else {
    $posts=array();
    while($fila = mysqli_fetch_assoc($resultado)){
    $posts[]=$fila;
    }
    utf8_encode_deep($posts);

    mysqli_free_result($resultado);
    mysqli_close($conexion);


    $json1=json_encode($posts);
    echo "{$json1}";
   }
   break;

  default:
     echo "Servicio no valido";
   break;
 }
}




?>

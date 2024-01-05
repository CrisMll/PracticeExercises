<?php
/*
Crear dos variables, "país" y "continente", mostrarlas por pantalla
e imprimir el tipo de cada una.
*/

$pais = "España";
$continente = "Europa";

echo nl2br("El país es $pais y el continente es $continente \n");
echo "El tipo de dato de $pais es: ", gettype($pais),"<br/>";
echo "El tipo de dato de $continente es: ", gettype($continente);

?>
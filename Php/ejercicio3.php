<?php

/*Escribir por pantalla los cuadrados de los 40 primeros números*/

echo'<h1>Cuadrados de los primeros números naturales con bucle for</h1>';
$cuadrado = 0;

for($num = 1; $num <= 40; $num++){
    $cuadrado = $num * $num;
    echo"$num x $num = $cuadrado<br/>";
}

echo'<h1>Cuadrados de los primeros números naturales con bucle while</h1>';
$num = 1;
$cuadrado = 0;
while($num <= 40){
    $cuadrado = $num * $num;
    echo"El cuadrado de $num es $cuadrado<br/>";
    $num++;
}
?>
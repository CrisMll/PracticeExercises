<?php

/*
Escribe un scripts que muestre por pantalla los numeros pares del 1 al 100
*/

echo '<h1>Numeros pares del 1 al 100</h1>';

for($i = 1; $i <= 100; $i++){
    if($i % 2 == 0){
        echo "$i<br/>";
    }/*else{
        echo  nl2br("\n El número es impar \n");
    }*/
}
?>
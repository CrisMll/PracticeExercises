<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4 de php</title>
</head>
<body>
    <h1>Calculadora</h1>
    <h3>Recoger dos numeros por método GET y realizar operaciones de calculadora: suma, resta, multiplicación y división.</h3>
    <form method="GET">
        <p><!--Al tratarse de un ejercicio rápido de práctica que no requiere CSS, se envuelve en un <p> para que sea más ordenado. -->
            <label for="numero1"> Introduce un número: 
                <input type="number" id="numero1" name="numero1">
            </label>
        </p>
        <p>
            <label for="numero2"> Introduce otro número: 
                <input type="number" id="numero2" name="numero2">
            </label>
        </p>
        <button type="submit">Enviar</button>
    </form>
<?php
//Primero se comprueba si existe informacion enviada con el formulario, y si existe, toma los valores introducidos y los adjudica a cada variable.
if($_SERVER['REQUEST_METHOD']==='GET') {
    if (isset($_GET['numero1']) && isset($_GET['numero2']) && $_GET['numero1'] != '' && $_GET['numero2'] != ''){
        $num1 = $_GET['numero1'];
        $num2 = $_GET['numero2'];
    }
}
echo '<h2>Calculadora</h2>';
echo "Suma:  $num1 + $num2 = ", $num1+$num2,'<br/>';
echo "Resta:  $num1 - $num2 = ", $num1-$num2,'<br/>';
echo "Multiplicación:  $num1 * $num2 = ", $num1*$num2,'<br/>';
echo "División:  $num1 / $num2 = ", $num1/$num2,'<br/>';


//Lo mismo se podría hacer con el método POST(más recomendable),simplemente cambiando GET por POST en el formulario html y el código PHP al asignar la variable.
//El ejercicio indica que se haga con GET. 


?>
</body>
</html>
/**
 * 
 * Escribe una función rango que tome dos argumentos, inicio y final,
 * y retorne un array que contenga todos los números desde inicio hasta (e incluyendo) final.
 */

function rango(num1,num2,){
    let secuencia  = [];
    for(let i = num1; i <= num2; i++){
        secuencia.push(i);
    }
    return secuencia
}
console.log('Primer Ejercicio')
console.log(rango(1,10));


/* Luego, escribe una función suma que tome un array de números y retorne la suma de estos números. 
Ejecuta el programa de ejemplo y ve si realmente retorna 55.
*/

function suma(numeros){
    let resultado = 0;
    for(let i = 0; i < numeros.length; i++){
        resultado += numeros[i];
    }
    return resultado
}
console.log('Segundo Ejercicio')
console.log(suma(rango(1, 10)));


/**
 *  Como una misión extra, modifica tu función rango para tomar un tercer argumento opcional que
 * indique el valor de “paso” utilizado para cuando construyas el array. Si no se da ningún paso,
 * los elementos suben en incrementos de uno, correspondiedo al comportamiento anterior. 
 * La llamada a la función rango(1, 10, 2) deberia retornar [1, 3, 5, 7, 9]. 
 * Asegúrate de que también funcione con valores de pasos negativos para que rango(5, 2, -1) 
 * produzca [5, 4, 3, 2].
 *
 */

function rango2(num1,num2,salto){
    let secuencia  = [];
    if(salto > 0){
        for(let i = num1; i <= num2; i += salto){
            secuencia.push(i);
        }
    }else{
        for(let i = num1; i >= num2; i += salto){
            secuencia.push(i);
        }
    }
    return secuencia;
}
console.log('Tercer Ejercicio');
console.log(rango2(10,1,-3));
console.log(rango2(1,10,2));
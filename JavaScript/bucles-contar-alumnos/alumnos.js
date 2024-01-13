/*
Queremos realizar un pequeño programa con JavaScript que nos muestre los alumnos que han llegado a clase de forma ordenada:
1) Generaremos un nuevo array denominado alumnos
2) Mediante la función prompt solicitaremos el nombre del alumno conforme llegue a clase
a. Mediante la función if y while seguiremos preguntando nombres de alumnos hasta que se introduzca la sentencia de finalización que definamos.
b. Mediante push añadiremos un nuevo alumno al array
3) Mediante la función sort ordenaremos el array de alumnos
4) Mediante la estructura for recorreremos el array y mostraremos el contenido del array de forma ordenada.*/


let alumnos = [];
let continuar;

do {
    let alumno = prompt('¿Desea introducir el nombre de un alumno? (s/n)');
    continuar = alumno.toLowerCase();

    if (continuar === 's') {
        alumno = prompt('Indica el nombre del alumno que acaba de llegar');
        alumnos.push(alumno);
        alumnos.sort();
    } else if (continuar !== 'n') {
        alert('No es una respuesta válida');
    }
} while (continuar !== 'n');

document.write(`Hoy han venido al colegio estos alumnos: <br>`)
for(i = 0; i < (alumnos.length); i++){
    document.write(`${alumnos[i]} <br>`);
}



/*
Utiliza un bucle do-while que se ejecutará al menos una vez y continuará ejecutándose mientras la respuesta no sea 'n'.
Si la respuesta no es 's' ni 'n', mostrará un mensaje de no válida y continuará el bucle.
Finalmente, al salir del bucle, mostrará la lista de alumnos ordenada.

Se puede hacer con un while simple pero si la respuesta no es válida, saldría del bucle y no preguntaría más.
*/


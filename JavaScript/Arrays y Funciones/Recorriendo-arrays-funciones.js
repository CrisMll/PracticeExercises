/**
 * 
 * PROGRAMA QUE:
 * 
 * 1) Pida 6 números por pantalla y los incluya en un array
 * 2) Mostrar el array entero (todos los elementos) en la consola y en el html
 */

//1 y 2) 
let mi_array = [];

for(i = 0; i < 6; i++){
    mi_array.push(Number(prompt('Introduce un número')));
}

let mostrarNumeros = (elemento)=>{
    document.body.innerHTML += `<h2>Mi array contiene estos números: </h2>`;
    document.write('<ul>');
    elemento.forEach((elemento) => {
        document.write('<li>'+ elemento + '</li>');
    });
    document.write('</ul>');
}

mostrarNumeros(mi_array);

//3)Sacar el array ordenado

let ordenarArray = () =>{
    mi_array.sort(function(a, b) {
        return a - b;
    });
    document.body.innerHTML += `<p>Este es mi array ordenado: ${mi_array}</p>`
}

ordenarArray();

// 4) Sacar el array invertido
let ordenarInverso = () =>{
    mi_array.sort(function(a, b) {
        return b - a;
    });
    document.body.innerHTML += `<p>Este es mi array ordenado al revés: ${mi_array}</p>`
}

ordenarInverso();

// 5) Mostrar cuántos elementos tiene el array
document.body.innerHTML += `<p>El array contiene ${mi_array.length} numeros</p>`
console.log(`El array contiene ${mi_array.length} numeros`)


// 6) Búsqueda de un valor introducido por usuario, que diga si lo encuentra y su índice.

let busqueda = (num) => {
    let buscar = mi_array.some(elemento => elemento == num);

    if(buscar){
        document.body.innerHTML += `<p>El número se encuentra en la posición: ${mi_array.indexOf(num)}</p>`
    }else{
        alert `El número no se encuentra en el array`
    }
}

console.log(busqueda(2));
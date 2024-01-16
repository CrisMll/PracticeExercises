
let numero = Number(prompt('Introduce un numero para ver su tabla de multiplicar'));
let resultado = 0;

document.body.innerHTML += `<h2>Tabla del numero elegido por el usuario :</h2>`;

for(let i = 1; i <= 10; i++){
    resultado = numero * i;
    document.body.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
}

// Todas las tablas por consola

for(let j = 1; j <= 10; j++){
    document.body.innerHTML += `<h2>Tabla del ${j}</h2>`;
    for(let r = 1; r <= 10; r++){
        document.body.innerHTML +=`<p>${j} x ${r} = ${j*r}</p>`;
    }
}



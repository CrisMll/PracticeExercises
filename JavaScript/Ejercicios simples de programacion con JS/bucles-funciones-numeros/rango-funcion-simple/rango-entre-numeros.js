// Muestra los números introducidos entre dos que elija el usuario.


//  ##### SOLUCION CON FUNCIONES Y OBJETOS  ######

let num1;
let num2;


let listaNumeros = {
num1 : Number(prompt('Introduce un primer número')),
num2 : Number(prompt('Introduce un segundo número')),
numeros : [],

calcularNumeros: function(){
    for(let i = this.num1+1; i < this.num2; i++){
        this.numeros.push(i);
        }
    },

mostrarNumeros: function () {
    if (this.numeros.length === 0) {
        document.body.innerHTML += 'No hay números para mostrar .';
        } else {
        document.body.innerHTML += `Los números entre ${this.num1} y ${this.num2} son: ${this.numeros.join(', ')}`;
        }
    }


}

listaNumeros.calcularNumeros()
listaNumeros.mostrarNumeros()

// ##### SOLUCION SIMPLE #####

/**
 * 
 *  let num1;
    let num2;

    num1 = Number(prompt('Introduce un número'))
    num2 = Number(prompt('Introduce otro número'))

    document.write(`<h2> Los números entre ${num1} y ${num2} son: </h2>`);

    for(let i = num1 + 1; i < num2; i++){
        document.write(i + ' , ');
    }
 * 
 * 
 * 
 */
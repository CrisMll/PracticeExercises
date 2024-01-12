let num;
const Dado = {
    tirarDado: function() {
        const dado = document.getElementById('dado');
        dado.classList.add('girar');

        num = Math.round(Math.random() * 5) + 1;

        const tiradaResultado = document.getElementById('tirada');
        tiradaResultado.textContent = `El número es: ${num}`;

        setTimeout(() => {
            dado.classList.remove('girar');
        }, 1000);
    }
};

/**
 * Primero añade girar para hacer la animacion del boton al pulsar, y se quita después para que solo gire al pulsar
 * La funcion obtiene con Math.random y .round, un numero aleatorio entre el 1 y el 6
 * Muestra el resultado de la tirada
 * 
*/

/**
    En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:

    El primer elemento lo sacamos del array, ya que es el nombre del cliente.
    Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
    Después añadimos al final del array el nombre del usuario que sacamos antes.

    Debes devolver el array modificado:
 * 
 */
let pedido1 = ['Cristina','cocacola', 'pizza']

function procesarPedido(pedido1) {
    let cliente = pedido1.shift();
    pedido1.unshift('bebida');
    pedido1.push(cliente);
    return pedido1;
}

console.log(procesarPedido(pedido1));
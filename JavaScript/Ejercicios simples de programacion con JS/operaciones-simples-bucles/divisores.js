//Escribe un programa que indique todos los divisores de un numero introducido por el usuario

let num1 = Number(prompt('Introduce un número'))
let divisores = []


for(let i = 1; i <= num1; i++){
    if(num1 % i == 0){
        divisores.push(i)
    }
}

document.body.innerHTML += `<h2> Los divisores de ${num1} son: </h2> <p>${divisores}</p>`
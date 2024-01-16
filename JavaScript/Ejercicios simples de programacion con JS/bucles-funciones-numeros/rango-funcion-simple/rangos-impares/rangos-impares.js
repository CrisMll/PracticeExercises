let num1;
let num2;

num1 = Number(prompt('Introduce un número'))
num2 = Number(prompt('Introduce otro número'))

document.write(`<h2> Los números impares entre ${num1} y ${num2} son: </h2>`);

for(let i = num1 + 1; i < num2; i++){
    if(i % 2 != 0){
    document.write(i + ' , ');
    }
}
    
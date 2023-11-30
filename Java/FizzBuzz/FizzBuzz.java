package Reto_0_FizzBuzz;

/*Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
 - Múltiplos de 3 por la palabra "fizz".
 - Múltiplos de 5 por la palabra "buzz".
 - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".*/

public class FizzBuzz {
	
	public static void main(String[] args) {
	
		 fizzbuzz();	 	
	}
		public static void fizzbuzz(){
		
		for(int num =1; num<=100;num++){
			if(num%3==0 && num%5==0){
				System.out.println("FizzBuzz");
			}else if (num%3==0){
				System.out.println("Fizz");
			}else if (num%5==0){
				System.out.println("Buzz");	
			}else{
				System.out.println(num);
			}
		}
	}
}
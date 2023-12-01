import java.util.Scanner;

public class TablaMultiplicar{
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);

        /*Crea un programa que sea capaz de solicitarte un número y se
        * encargue de imprimir su tabla de multiplicar entre el 1 y el 10.
        * - Debe visualizarse qué operación se realiza y su resultado.
        *   Ej: 1 x 1 = 1
        *       1 x 2 = 2
        *       1 x 3 = 3
        *       ... 
        */
        System.out.print("Escribe un numero: ");
        int num1 = scan.nextInt();

        //Ahora se imprime por pantalla la tabla de multiplicar

        System.out.println("La tabla de multiplicar del "+ num1+ " es: ");
        for(int i = 1; i <=10; i++){
            int multiplicar = num1 * i;
            System.out.println(num1 + " x " + i + " = " + multiplicar);
        }

        scan.close();














    }
}
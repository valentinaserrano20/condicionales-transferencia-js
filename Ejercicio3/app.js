// Crea un programa que pida un número entero y muestre:
// • "Número positivo" si el número es mayor que 0.
// • "Número negativo" si es menor que 0.
// • "Cero" si es igual a 0.
import libreria from 'prompt-sync';
const prompt = libreria();

let numero= parseInt(prompt("ingrese un numero entero:"));

if (numero >0){
  console.log("Su numero es positivo");
}
else if(numero <0){
  console.log("Su numero es negativo");
}
else if(numero ===0){
  console.log("Su numero es igual 0");
}

let paroimpar= (numero % 2 == 0) ? "Su numero es par" : "Su numero es impar";

console.log(paroimpar);

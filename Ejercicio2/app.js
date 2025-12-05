// Un cine aplica las siguientes reglas:
// • Si el cliente tiene menos de 12 años, el valor de la entrada es 5000.
// • Si tiene entre 12 y 18 años, el valor es 8000.
// • Si es mayor de 18, el valor es 10000
// • Si el cliente es estudiante (condición adicional), se le aplica un descuento del 20%
// al valor de la entrada.

import libreria from 'prompt-sync';
const prompt = libreria();

let edad= prompt("ingrese su Edad:");
let estudiante= prompt("Es usted estudiante? si/no:").toLowerCase();
let valorEntrada;

if (edad >18){
  valorEntrada=10000;
  console.log("El valor de su entrada es:" + valorEntrada);  
}
else if(edad>12 && edad<=18){
  valorEntrada=8000;
  console.log("El valor de su entrada es:" + valorEntrada);
}
else{
  valorEntrada=5000;
  console.log("El valor de su entrada es:" + valorEntrada);
}

if(estudiante === "si"){
  valorEntrada-= valorEntrada*0.20;
  console.log("Su entrada tendra un descuento por ser estudiante y el valor de su entrada sera de:" + valorEntrada);
}
else{
  console.log("no cuenta con un descuento aplicado ya que no es estudiante");
  
}
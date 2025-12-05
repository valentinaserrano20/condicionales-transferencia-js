// Un estudiante aprueba una materia si:
// • Su nota final es mayor o igual a 60 y
// • Su asistencia es mayor o igual al 80%.
// Si no cumple ambas condiciones, debe mostrar "Reprobado".
import libreria from 'prompt-sync';
const prompt = libreria();

let notaFinal= parseInt(prompt("ingrese su nota final: "));
let asistencia= parseInt(prompt("Cuantas veces vino a clase(siendo 10 clases): "));

let minimoasistencia = 10 * 0.8; 

if( notaFinal >=60 && asistencia > minimoasistencia){
  console.log("Aprobo su materia");
}
else{
  console.log("Reprobado");
  
}
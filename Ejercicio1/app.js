// Un sistema debe permitir el acceso a un usuario si cumple estas condiciones:
// • El nombre de usuario es "admin".
// • La contraseña es "1234".
// Si no cumple las dos condiciones, debe mostrar "Acceso denegado"
import libreria from 'prompt-sync';
const prompt = libreria();

let usuario= prompt("ingrese su nombre de usuario:");
let contraseña= prompt("ingrese su contraseña:");
if(usuario === "admin" && contraseña === "1234"){
  console.log("Sus credenciales son correctas. Entrando al sistema");
}
else{
  console.log("Acceso denegado");
  
}
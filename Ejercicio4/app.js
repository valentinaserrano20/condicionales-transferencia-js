// Un cajero automático presenta el siguiente menú:
// 1. Consultar saldo
// 2. Retirar dinero
// 3. Depositar dinero
// 4. Salir
// Crea un programa con switch que muestre la acción correspondiente según el número ingresado

import libreria from 'prompt-sync';
const prompt = libreria();

let numero= parseInt(prompt(`Ingrese la opcion segun lo que desea realizar en el cajero automatico:
  1. Consultar saldo
  2. Retirar dinero
  3. Depositar dinero
  4. Salir
  `));

let dinero =200000;

switch(numero){
  case 1:
    console.log("Usted Escogio la opcion de Consultar dinero");
    console.log(`Su monto actual de dinero es: ${dinero}`);
  break
  case 2:
    console.log("Usted Escogio la opcion de retirar dinero");
    let retiro= parseInt(prompt(`Ingrese cuanto dinero desea retirar siendo este menor a ${dinero}:
      `));
    console.log(`usted ha retirado ${retiro} y su monto actual es de ${dinero-retiro}`);
  break
  case 3:
    console.log("Usted Escogio la opcion de consignar dinero");
    let consignar= parseInt(prompt(`Ingrese cuanto dinero desea consignar: 
      `));
    console.log(`usted ha consignado ${consignar} y su monto actual es de ${dinero+consignar}`);
  break
  case 4:
    console.log("cancelando la Operacion. Saliendo del programa");
  break
  default:
    console.log("Escoja una de las opciones indicadas");
  break
}
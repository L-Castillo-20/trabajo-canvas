const prompt = require("prompt-sync")({ sigint: true });

let numero1 = Number(prompt("Ingrese el primer número: "));
let numero2 = Number(prompt("Ingrese el segundo número: "));
let numero3 = Number(prompt("Ingrese el tercer número: "));

const numberlist = [numero1, numero2, numero3];
const orderedlist = numberlist.sort((a, b) => a - b);

console.log(`Número menor: ${orderedlist[0]}
Número del medio: ${orderedlist[1]}
Número mayor: ${orderedlist[2]}`);

console.log(`Lista de números de menor a mayor: ${orderedlist}`);
console.log(`Lista de números de mayor a menor: ${[...orderedlist].reverse()}`);

if (numero1 === numero2 && numero2 === numero3) {
  console.log("Los tres números son iguales.");
} else {
  console.log("No todos los números son iguales.");
}

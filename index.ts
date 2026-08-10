import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

let systemName:string = "Codiguito";
let version:number = 0.1;
let userName:string = "makaveli"

const texto = `==================================
  `+ systemName + " v" + version + `
  ¡Bienvenido, ` + userName + `!
==================================`;

console.log (texto);

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
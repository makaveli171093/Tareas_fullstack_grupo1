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

let tareas: string[] = [];

let sw = 0;

while (sw != 4) {
  const answer = await rl.question(`Elija la tarea a realizar:
    1. Agregar tarea
    2. Eliminar ultima tarea
    3. Listar tareas
    4. Salir
    tu respuesta:  `);
  sw = parseInt(answer);
  switch (sw) {
    case 1:
      const answer = await rl.question("Ingrese la tarea a agregar: ");
      tareas.push(answer);
      break;
    case 2:
      let tareaEliminada = tareas.pop();
      console.log(`Tarea eliminada: ${tareaEliminada}`);
      break;
    case 3:
      for (let i = 0; i < tareas.length; i++) {
        console.log(`Tarea ${i + 1}: ${tareas[i]}`);
      }
    case 4:
      break;
  }
}
console.log("Saliendo del programa...");

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();


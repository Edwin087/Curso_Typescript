// Definición de Variables con TypeScript
let saludos: string = "hola mundo";
let numero: number = 10;
//any para cualquier tipo de dato
let cualquiera: any;
cualquiera = "cualquiera";
cualquiera = 10;

const PI = 3.14;

function saludar() {
  console.log(saludos);
  console.log(numero);
  console.log(PI);
}
saludar();

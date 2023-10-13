class Persona {
  private Nombre: string;

  constructor(nombre: string) {
    this.Nombre = nombre;
  }
  getNombre(): string {
    return this.Nombre;
  }
  static metodoStatico(): number {
    return 10;
  }
}
let persona1 = new Persona("Edwin");
console.log(persona1.getNombre());
console.log(Persona.metodoStatico());

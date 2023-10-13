"use strict";
class Persona {
    constructor(nombre) {
        this.Nombre = nombre;
    }
    getNombre() {
        return this.Nombre;
    }
    static metodoStatico() {
        return 10;
    }
}
let persona1 = new Persona("Edwin");
console.log(persona1.getNombre());
console.log(Persona.metodoStatico());

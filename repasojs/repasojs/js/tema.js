import Tarea from './tarea.js';

export default class Tema extends Tarea {
    constructor(nombre, prioridad, tiempo) {
        super(nombre, prioridad);
        this.tiempo = tiempo;
    }

    tiempoEstudio() {
        console.log(`${this.nombre} con prioridad ${this.prioridad} se debe estudiar ${this.tiempo} horas`);
    }
}
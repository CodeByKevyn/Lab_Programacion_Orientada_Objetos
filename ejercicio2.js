function Mascota (nombre, especie, edad, peso){
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;
    this.presentarse = function(){
        return `Mascota: ${this.nombre} | Especie: ${this.especie} | Edad: ${this.edad} años | Peso: ${this.peso}kg`;
    }
}

const mascota1 = new Mascota("pepito", "gato", 2, 7)
const mascota2 = new Mascota("orion", "perro", 3, 20)
const mascota3 = new Mascota("periquito", "loro", 2, 1)

mascota1.presentarse();
mascota2.presentarse();
mascota3.presentarse();
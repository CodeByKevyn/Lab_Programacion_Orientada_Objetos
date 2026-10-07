function Mascota (nombre, especie, edad, peso){
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;
    this.presentarse = function(){
        console.log(`${this.nombre} - ${this.especie} - ${this.edad} - ${this.peso} `)
    }
}

const mascota1 = new Mascota("pepito", "gato", 2, 7)
const mascota2 = new Mascota("orion", "perro", 3, 20)
const mascota3 = new Mascota("periquito", "loro", 2, 1)

mascota1.presentarse();
mascota2.presentarse();
mascota3.presentarse();
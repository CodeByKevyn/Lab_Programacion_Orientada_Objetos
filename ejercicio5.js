const prompt = require('prompt-sync')();

function Vehiculo(nombre, marca, anio, velocidadmaxima, cilindraje) {
    this.nombre = nombre;
    this.marca = marca;
    this.anio = anio;
    this.velocidadmaxima = velocidadmaxima;
    this.cilindraje = cilindraje;

    this.consultar = function() {
        if (this.anio >= 2020) {
            console.log(`El vehículo ${this.nombre} (${this.anio}) está catalogado en vehículos nuevos.`);
        } else {
            console.log(`El vehículo ${this.nombre} (${this.anio}) está catalogado en vehículos no tan nuevos.`);
        }
    };

    // Método 2: Modifica una propiedad (Repotenciar el cilindraje)
    this.repotenciar = function(nuevoCilindraje) {
        this.cilindraje = nuevoCilindraje;
        console.log(`¡Vehículo repotenciado! El cilindraje de ${this.nombre} ahora es de ${this.cilindraje} cc.`);
    };

    this.evaluarEnfoque = function() {
        if (this.cilindraje >= 2000) {
            console.log(`El motor de ${this.nombre} (${this.cilindraje} cc) está enfocado en mayor VELOCIDAD FINAL y potencia.`);
        } else {
            console.log(`El motor de ${this.nombre} (${this.cilindraje} cc) está enfocado en mayor TORQUE y fuerza inicial.`);
        }
    };
}


console.log("\n--- Registro del Vehículo 1 ---");
const nombre1 = prompt("Nombre o modelo del vehículo 1: ");
const marca1 = prompt("Marca del vehículo 1: ");
const anio1 = Number(prompt("Año del vehículo 1: "));
const velocidad1 = Number(prompt("Velocidad máxima (km/h): "));
const cilindraje1 = Number(prompt("Cilindraje (cc): "));

const vehiculo1 = new Vehiculo(nombre1, marca1, anio1, velocidad1, cilindraje1);

console.log("\n--- Registro del Vehículo 2 ---");
const nombre2 = prompt("Nombre o modelo del vehículo 2: ");
const marca2 = prompt("Marca del vehículo 2: ");
const anio2 = Number(prompt("Año del vehículo 2: "));
const velocidad2 = Number(prompt("Velocidad máxima (km/h): "));
const cilindraje2 = Number(prompt("Cilindraje (cc): "));

const vehiculo2 = new Vehiculo(nombre2, marca2, anio2, velocidad2, cilindraje2);

console.log("\n--- Registro del Vehículo 3 ---");
const nombre3 = prompt("Nombre o modelo del vehículo 3: ");
const marca3 = prompt("Marca del vehículo 3: ");
const anio3 = Number(prompt("Año del vehículo 3: "));
const velocidad3 = Number(prompt("Velocidad máxima (km/h): "));
const cilindraje3 = Number(prompt("Cilindraje (cc): "));

const vehiculo3 = new Vehiculo(nombre3, marca3, anio3, velocidad3, cilindraje3);



console.log("\n=== PRUEBAS DE MÉTODOS ===");


console.log(`\n--- Probando ${vehiculo1.nombre} ---`);
vehiculo1.consultar();
vehiculo1.evaluarEnfoque();
vehiculo1.repotenciar(2500); 
vehiculo1.evaluarEnfoque();  

console.log(`\n--- Probando ${vehiculo2.nombre} ---`);
vehiculo2.consultar();
vehiculo2.evaluarEnfoque();

console.log(`\n--- Probando ${vehiculo3.nombre} ---`);
vehiculo3.consultar();
vehiculo3.evaluarEnfoque();
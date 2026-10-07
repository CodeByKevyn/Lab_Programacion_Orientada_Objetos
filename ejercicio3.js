function Estudiante (nombre, salon, nota){
    this.nombre = nombre;
    this.salon = salon;
    this.nota = nota;

    if (this.nota >= 3.0) {

        this.aprobado = true;
    } else {

        this.aprobado = false;
    }

    this.mostrarResultado = function() {

        if (this.aprobado === true) {

            console.log(`El estudiante ${this.nombre} APROBO el curso con una nota de ${this.nota}.`);
        } else {

            console.log(`El estudiante ${this.nombre} REPROBO el curso con una nota de ${this.nota}.`);
        }
    };
}

const estudiante1 = new Estudiante("kevyn", 1, 4)
const estudiante2 = new Estudiante("samuel", 2, 2.3)
const estudiante3 = new Estudiante("miguel", 5, 1.5)
const estudiante4 = new Estudiante("leo", 9, 5)

estudiante1.mostrarResultado();
estudiante2.mostrarResultado();
estudiante3.mostrarResultado();
estudiante4.mostrarResultado();

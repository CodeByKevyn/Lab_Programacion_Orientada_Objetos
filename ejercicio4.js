function Libro (nombre, anio, editorial){
    this.nombre = nombre;
    this.anio = anio;
    this.editorial = editorial;
    this.prestado = false
    this.prestar = function(){
        if(this.prestado === false){
            this.prestado = true
            console.log(`El libro "${this.nombre}" ha sido prestado con éxito.`);
        }else{
            console.log(`¡ALERTA! El libro "${this.nombre}" ya está prestado.`);
        }
    }
    this.devolver = function(){
        if(this.prestado === true){
            this.prestado = false
            console.log(`El libro "${this.nombre}" ha sido devuelto.`);
        }else{
            console.log(`¡ALERTA INCONSISTENCIA! El libro "${this.nombre}" no figuraba como prestado.`);
        }
    }

}


const libro1 = new Libro("Cien Años de Seriedad", 1980, "Editorial Colombiana");

libro1.prestar();  
libro1.prestar();  
libro1.devolver(); 
libro1.devolver(); 
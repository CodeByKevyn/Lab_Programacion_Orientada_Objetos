function Computador(marca, procesador, ram, precio){
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio
    this.mostrardatos = function(){
        console.log(`${this.marca} - ${this.procesador} - ${this.ram} - ${this.precio}`)
    }
}

const pc1 = new Computador("asus", "amd", "64gb", 125000)
const pc2 = new Computador("sansui", "ryzen", "22gb", 125000)
const pc3 = new Computador("lenovo", "geforce", "12gb", 125000)

pc1.mostrardatos(); 
pc2.mostrardatos(); 
pc3.mostrardatos(); 
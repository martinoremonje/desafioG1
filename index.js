class Consultorio{
    #nombre;
    #pacientes;
    constructor(nombre){
        this.#nombre = nombre;
        this.#pacientes = [];
    }
    getNombre(){
        return this.#nombre
    }
    setNombre(nombre){
        this.#nombre = nombre
    }
    getPacientes(){
        return this.#pacientes
    }
    addPacientes(paciente){
        this.#pacientes.push(paciente)
    }
};

class Paciente {
    #nombre;
    #edad;
    #rut;
    #diagnostico;

    constructor(nombre, edad, rut, diagnostico) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#rut = rut;
        this.#diagnostico = diagnostico;
    }

    get Nombre() {
        return this.#nombre;
    }

    get Edad() {
        return this.#edad;
    }

    get Rut() {
        return this.#rut;
    }

    get Diagnostico() {
        return this.#diagnostico;
    }

    set Nombre(nombre) {
        this.#nombre = nombre;
    }

    set Edad(edad) {
        this.#edad = edad;
    }

    set Rut(rut) {
        this.#rut = rut;
    }

    set Diagnostico(diagnostico) {
        this.#diagnostico = diagnostico;
    }
};

Consultorio.prototype.findName = function(nombre){
    let found = [];
    this.getPacientes().forEach(e =>{
        if(e.getNombre() == nombre){
          found.push(e)         
        }
    });
    return found
};

let paciente1 = new Paciente("martin", 32, "179023873", "cool");
let paciente2 = new Paciente("pepe", 32, "179023873", "cool");
console.log(paciente1.getNombre());
let consultorio1 = new Consultorio("Psiquiatria");
console.log(consultorio1.getNombre())
console.log(consultorio1.getPacientes());
consultorio1.addPacientes(paciente1);
consultorio1.addPacientes(paciente2);
console.log(consultorio1.getPacientes());
console.log(consultorio1.findName("martin"))



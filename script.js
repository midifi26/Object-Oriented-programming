// Ejercicio POO 1

// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
class Persona {
    constructor(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    ObtDetalles(){
        console.log(`Me llamo ${this.nombre}, tengo ${this.edad} y soy ${this.genero}`)
    }
};

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.
class Estudiante extends Persona{
    constructor(nombre , edad , genero , curso , grupo){
        super(nombre,edad,genero);
        this.curso = curso;
        this.grupo = grupo;
    }
   registrar(){
    console.log(`Soy ${this.nombre}, tengo ${this.edad} soy ${this.genero}, curso ${this.curso} y estoy en el grupo ${this.grupo}.`);
   } 
};

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.
class Profesor extends Persona{
    constructor(nombre , edad , genero , asignatura , nivel){
        super(nombre , edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar(){
        console.log(`Me llamo ${this.nombre}, tengo ${this.edad} y soy ${this.genero}, imparto la asignatura de ${this.asignatura} en nivel ${this.nivel}.`);
    }
};

// Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.
let misDatos= new Persona ('Michelle', 24, 'mujer');
let informacion = new Estudiante('Mauricio', 20, 'Hombre','Grado Superior de Marketing', 'C');
let presentacion = new Profesor('Anibal', 45, 'Hombre', 'Quimica', 'Universitario');

misDatos.ObtDetalles();
informacion.registrar();
presentacion.asignar();



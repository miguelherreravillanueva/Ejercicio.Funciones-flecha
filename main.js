// 1. Funciones flecha

// Convierte la siguiente función en una función flecha:

        // function saludar() {
        //   return "Hola";
        // }

const saludar = () => "Hola"
    console.log(saludar())


// Convierte la siguiente función en una función flecha en línea:

    //  function division(a,b) {
    //   return a / b;
    // }

const division = (a, b) => a / b;
console.log(division(10,5))


// Convierte la siguiente función en una función flecha:

    // function miNombre(nombre) {
    //   return `Mi nombre es ${nombre}`;
    // }

const miNombre = nombre => "Mi nombre es " + nombre;
console.log(miNombre("Miguelito"))


// Convierte las siguientes funciones en funciones flecha:

    // function test2() {
    // console.log("Función test 2 ejecutada.");
    // }
    // function test1(callback) {
    // callback();
    // }	
 
const test2 = () => console.log("Función test 2 ejecutada.");
const test1 = (callback) => callback();
console.log(test1,test2)


// 2. Foreach

// Utiliza la siguiente array para resolver los próximos ejercicios: 
      
let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },
        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
      ];

    //   Crea un array con la gente mayor de 25 años y muéstralo por consola.

    const mayor25 = []
    gente.forEach((persona) => {
          if (persona.edad > 25) {
            mayor25.push(persona);
          }
        });
    console.log(mayor25)
  

    //   Crea un array con la gente que empieza por J. 
    
const nombreJ = []
    gente.forEach((inicial) => {
        if (inicial.nombre.startsWith("J")) {
            nombreJ.push(inicial);
        }
    });
    console.log(nombreJ)


// 3. Map

// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.

const arrayMayor25 = gente.map((persona)=> {
        if(persona.edad > 25){
        return persona
    }
});
console.log(arrayMayor25);

// Crea un array con la gente que empieza por J. 

const arrayNombreJ = gente.map((nombreJ) => {
       if(nombreJ.nombre.startsWith("J")){
        return nombreJ
    }
});
console.log(arrayNombreJ)

// Dado el siguiente array, crea otro que sea el resultado dé elevar cada número a sí mismo:

const numbers = [ 4, 5, 6, 7, 8, 9, 10];
const arrayNumbers = numbers.map((increment)=> Math.pow(increment, increment))
console.log(arrayNumbers)


// Resultado esperado

// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]



// 4. Filter

// Crea un segundo array que devuelva los impares

 const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let filterNumbers = numbers1.filter(numero => numero % 2 != 0)
 console.log(filterNumbers)

//  Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:

const foodList = [
        {
          name: 'Tempeh',
          isVeggie: true
        },
        {
          name: 'Cheesbacon burguer',
          isVeggie: false
        },
        {
          name: 'Tofu burguer',
          isVeggie: true
        },
        {
          name: 'Entrecot',
          isVeggie: false
        }
      ];

      /* [
          'Que rico Tempeh me voy a comer!',
          'Que rica Tofu burguer me voy a comer!'
         ]
      */

const vegan = foodList.filter(plates => plates.isVeggie === true)
.map((plateFilter) =>`Que rico ${plateFilter.name} me voy a comer!`);
console.log(vegan)



// 5. Reduce

// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:


const numeros = [39, 2, 4, 25, 62];
const multiply = numeros.reduce((a,b) => a*b)
console.log(multiply)

// Salida--> 483600

//Ejercicio 27

let numero1;

let numero2;

numero1 = 2;

numero2 = 4;

console.log(numero1 + numero2);

console.log(numero1 - numero2);

console.log(numero1 * numero2);

console.log(numero1 / numero2);

console.log(numero1 % numero2);



//Ejercicio 28

let numero = 9

console.log(numero * 1);

console.log(numero * 2);

console.log(numero * 3);

console.log(numero * 4);

console.log(numero * 5);

console.log(numero * 6);

console.log(numero * 7);

console.log(numero * 8);

console.log(numero * 9);

console.log(numero * 10);



//Ejercicio 29

let longitud = 10;

console.log(longitud * 4);



//Ejercicio 30

let lado = 5;

console.log(lado * lado);


//Ejercicio 31


let lado1 = 10;

let lado2 = 20;

let lado3 = 5;

console.log(lado1 + lado2 + lado3);


//Ejercicio 32


let altura = 10;

let base = 4;

console.log(altura + base);

console.log(base * altura);


//Ejercicio 33


let cantidadDePersonas = 100;

cantidadDePersonas += 5;

console.log("Cantidad de personas: " + cantidadDePersonas);

cantidadDePersonas -= 3;

console.log("Cantidad de personas: " + cantidadDePersonas);

cantidadDePersonas *= 2;

console.log("Cantidad de personas: " + cantidadDePersonas);



//Ejercicio 34

let ingresos;

let ganancias;

let impuestos;

ingresos = 1000;

ganancias = 600;

impuestos = 500;

let objetivosDeIngresos = 800;

let objetivosDeImpuestos = 400;

let bonoDeGanancias = 600;

console.log("Objetivo de ingresos: " + (ingresos >= objetivosDeIngresos))

console.log("Objetivo de impuestos: " + (impuestos < objetivosDeImpuestos))

console.log("Bono de ganancias: " + (bonoDeGanancias === ganancias))

//Ejercicio 35

let numeroDeCliente = 143245;

let numeroDeClienteIngresado = '143245';

console.log("El número ingresado por el cliente es correcto: ", numeroDeCliente == numeroDeClienteIngresado);

console.log("El cliente ingresó un número de cliente válido:", numeroDeCliente === numeroDeClienteIngresado);


//Ejercicio 36
//Aclaro que cambio nombre de variables porque en ejercicio 27 usamos mismos nombres

let numeroUno

let numeroDos

numeroUno = 10

numeroDos = 20

console.log("La variable numeroUno y numeroDos tienen el mismo valor", numeroUno == numeroDos);

console.log("La variable numeroUno y numeroDos son distintas", numeroUno != numeroDos);


//Ejercicio 37

let promedioParaAprobar

let promedioDelAlumno

promedioParaAprobar = 6

promedioDelAlumno = 4

console.log("El alumno tiene un promedio mayor o igual que el requerido: " + (promedioDelAlumno >= promedioParaAprobar));

let puntos = promedioParaAprobar - promedioDelAlumno

console.log(`Al alumno le faltaron ${puntos} para aprobar`);
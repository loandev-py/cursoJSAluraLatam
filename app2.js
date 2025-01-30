// Mostrar un mensaje de bienvenida
console.log("¡Bienvenido al programa!");

// Crear una variable con tu nombre y mostrar un mensaje con console.log
let nombre = "Hilker";
console.log(`¡Hola, ${nombre}!`);

// Mostrar un mensaje con alert
alert(`¡Hola, ${nombre}!`);

// Preguntar por el lenguaje de programación favorito
let lenguajeFavorito = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(`El lenguaje de programación favorito es: ${lenguajeFavorito}`);

// Suma de dos números
let valor1 = 5;
let valor2 = 3;
let resultadoSuma = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultadoSuma}.`);

// Resta de dos números
let resultadoResta = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultadoResta}.`);

// Verificar si es mayor o menor de edad
let edad = parseInt(prompt("Por favor, ingresa tu edad:"));
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Verificar si un número es positivo, negativo o cero
let numero = parseFloat(prompt("Introduce un número:"));
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

// Bucle while para mostrar números del 1 al 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Determinar si una nota está aprobada o no
let nota = 8;
if (nota >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

// Generar un número aleatorio
let numeroAleatorio = Math.random();
console.log(`Número aleatorio: ${numeroAleatorio}`);

// Generar un número entero aleatorio entre 1 y 10
let numeroEnteroAleatorio10 = Math.floor(Math.random() * 10) + 1;
console.log(`Número entero aleatorio entre 1 y 10: ${numeroEnteroAleatorio10}`);

// Generar un número entero aleatorio entre 1 y 1000
let numeroEnteroAleatorio1000 = Math.floor(Math.random() * 1000) + 1;
console.log(`Número entero aleatorio entre 1 y 1000: ${numeroEnteroAleatorio1000}`);
//Variables
//let numeroSecreto = 2;
//let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

//console.log(numeroUsuario);
/*
Este código realiza
la comparación
*/
/*if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
}*/
/*
1)Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".*/
//alert('!bienvenida y bienvenido a nuestro sitio web.')
/*2)Declara una variable llamada nombre y asígnale el valor "Luna".*/
//let nombre ='Luna'; 
/*3)Crea una variable llamada edady asígnale el valor 25.*/
//let edad = 25;
/*4)Establece una variable numeroDeVentas y asígnale el valor 50.*/
//let numeroDeVentas = 50;
/*5)Establece una variable saldoDisponible y asígnale el valor 1000.*/
//saldoDisponible = 10000;
/*6)Muestra una alerta con el texto "¡Error! Completa todos los campos".*/
//alert('!Error! completa todos los campos');
/*7)Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". 
Ahora muestra una alerta con el valor de la variable mensajeDeError .*/
//let error = '!Error! completa todos los campos'; 
//alert(error);
/*8)Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .*/
//let nombreUsuario = prompt('indica el nombre de usuario');
/*9)Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.*/
//let edadUsuario = prompt('ingrese su edad');
/*10)Ahora, si la edad es mayor o igual a 18, muestra una alerta con el 
mensaje "¡Puedes obtener tu licencia de conducir!".*/
//if(edadUsuario >= 18) return alert('Puedes obtener tu licencia');


/*1)Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra 
"¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaDeLaSemana = prompt('ingresa el dia de la semana '); 
if(diaDeLaSemana === 'sabado'|| diaDeLaSemana === 'Domingo'){
    alert('¡Buen fin de semana!' );
}else{ 
    alert('¡Buena semana!');
}*/
/*2)Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numero = prompt('Escribe un número positivo o negativo');
if (numero > 0) {
    alert('Número positivo');
} else if (numero < 0) {
    alert('Número negativo');
} else {
    alert('El número es cero');
}*/
/*3)Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra
"¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
let puntuacion = 105;
if (puntuacion >= 100) {
    console.log('¡Enhorabuena, has ganado!');
} else {
    console.log('Inténtalo de nuevo para ganar.');
}*/
/*4)Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template 
string para incluir el valor del saldo.
let saldoCuenta = prompt('ingrese el saldo en la cuenta'); // Ejemplo de saldo
alert(`Tu saldo es de $${saldoCuenta}.`);*/
/*5)Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de 
bienvenida usando ese nombre.
let nombre2 = prompt('Por favor, ingresa tu nombre');
alert(`¡Bienvenido, ${nombre}!`);*/

// clase 3: ---------------------------------------------------------------------------------------------------------

/*let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}*/

// practica clase 3 

//Desafíos - Respuestas
/*1)Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;
while (contador <= 10) {
console.log(contador);
contador++;
}*/

/*2)Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let contador = 10;
while (contador >= 0) {
console.log(contador);
contador--;
}*/

/*3)Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");

while (numeroMaximo >= 0) {
console.log(numeroMaximo);
numeroMaximo--;
}*/

/*4)Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numeroMaximo = prompt("Ingresa un número para la cuenta progresiva:");;
let contador = 0;

while (contador <= numeroMaximo) {
console.log(contador);
contador++
}"*/

// clase 04 -----------------------------------------------------------------------------------------------

//Variables
/*let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}*/


//clase 05 ----------------------------------------------------------------------------------------------

//Variables
let numeroMaximoPosible = 1000;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
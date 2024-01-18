let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';
function clickBotonConsole() { 
    console.log('el boton fue clicado');
}

function BotonPrompt() {
     let ciudad = prompt('Digame una ciudad de Brazil');
     alert(`Estuve en la ciudad de ${ciudad} y me acorde de ti.`);
}

function alertaBoton() { 
    alert('YO AMO JAVASCRIPT');
}

function sumaBoton() { 
    let num1 = parseInt(prompt('Digame el primer numero'));
    let num2 = parseInt(prompt('Digame el segundo numero'));

    alert(`el resultado de Sumar el primer numero ${num1} y el segundo numero ${num2} es igual a: ${num1 + num2}`);
}
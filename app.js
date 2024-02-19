let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    console.log(intentos);


    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroSecreto === numeroDeUsuario);

    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;     
}

function limpiarCaja() {
   let valorCaja = document.querySelector('#valorUsuario');
   valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    } else {
    // si el numero generado esta incluido en la lista 
if (listaNumerosSorteados.includes (numeroGenerado)) {
    return generarNumeroSecreto();
} else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}

}

}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalos de numeros 
    condicionesIniciales();
    // Generar el numero aleatorio, de arriba sin el -let-
    // Inicializar el numero de intentos
  condicionesIniciales();
    // Deshabilitar el boton de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

//Resolución del desafío 2.. 1. Crear una función que muestra "¡Hola, mundo!" en la consola//

function mostrarHola() {
    console.log("¡Hola, mundo!");
  }
  
  mostrarHola();

  // 2. Crear una función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola//

  function mostrarHolaNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
  }
  
  mostrarHolaNombre("David");

  // 3. Crear una función que recibe un número como parámetro y devuelve el doble de ese número.//
  function numeroDoble(numero) {
    return numero * 2;
  }

  let resultadoDoble = numeroDoble(5);
  console.log(resultadoDoble);

  //4. Crear una función que recibe tres números como parámetros y devuelve su promedio.//
function calcularPromedio(a,b,c){
    return (a+b+c)/3;
}
let promedio = calcularPromedio(10, 10, 10);
console.log(promedio);

//5. Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos.//
function numeroMayor(a,b) {
    return a > b ? a : b;
}
let resultadoMayor = numeroMayor(87,1);
console.log(resultadoMayor);

//6. Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo//
function numeroCuadrado(numero){
    return (numero * numero);
}
let resultadoCuadrado = numeroCuadrado(5);
console.log(resultadoCuadrado);

//Ejemplo de comillas invertidas (backticks) para crear plantillas de cadenas
const nombre = "DVD";
const edad = 40;
const pais = "Mexico";
const mensaje = `Hola, soy ${nombre} , vivo en ${pais} y tengo ${edad} años.`;
console.log(mensaje);

// Salida: Hola, soy Juan y tengo 30 años.

// Creando un array o arreglo... 
//Puedes crear un array en JavaScript declarando una variable y asignándole valores entre corchetes []

let frutas = ["Manzana", "Uva", "Naranja"];

//Acceder a los valores
console.log(frutas[1]);

//Agregar frutas
frutas.push("Fresa");
frutas.push("Mango");
frutas.push("Pera");

console.log(frutas);

console.log(frutas[1], frutas[3]);
//Para eliminar el ultimo elemento usar pop
frutas.pop();
console.log(frutas);


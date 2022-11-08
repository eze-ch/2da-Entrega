// funciones
let user;
let num1, num2, resulAux;
let op;
let continuar;
const resultados = [];

function inUser() {
    user = prompt("¿Quién es el usuario?");
}

function potencia(num1, num2){
    let res = 1;

    for(let i=1; i<=num2; i++){
        res = res*num1;
    }

    return res;
}

function hipotenusa(num1, num2){
    let res = Math.sqrt((num1*num1)+(num2*num2));
    return res;
}

function calculadora(valor1, valor2, operacion) {
    switch (operacion) {
        case "+":
            return valor1 + valor2;
            break;
        case "-":
            return valor1 - valor2;
            break;
        case "*":
            return valor1 * valor2;
            break;
        case "/":
            return valor1 / valor2;
            break;
        case "%":
            return valor1*(valor2/100);
            break;
        case "pot":
            return potencia(valor1, valor2);
            break;
        case "hyp":
            return hipotenusa(valor1, valor2);
            break;  
        default:
            alert("Operando invalido. Revisa la lista de posibles comandos:\n + suma \n - resta \n * multiplicacion \n / division \n % porcentaje \n pot potencia \n hyp hipotenusa");
            return 0;
            break;
    }
}

alert("Bienvenido a la Calculadora mas Noob de la historia");

do {
    inUser();
    if(user == null)
        alert("Ingrese un nombre valido");
    else
        alert("Hola " +user+ "!!!");

} while (user == null);


alert("Te comento los posibles operandos:\n + suma \n - resta \n * multiplicacion \n / division \n % porcentaje \n pot potencia \n hyp hipotenusa \n Ver resultado en Consola (F12)");

do {
    continuar = "";

    num1 = parseInt(prompt("Ingresar numero 1"));
    num2 = parseInt(prompt("Ingresar numero 2"));
    op = prompt("Ingresar operando");

    resulAux = calculadora(num1, num2, op);
    console.log("Resultado: " + resulAux);
    resultados.push(resulAux);

    num1 = 0;
    num2 = 0;
    op = "";

    continuar = prompt("Desea hacer otra operacion? (si/no)")

} while (continuar == "si");

console.log("Resultados: " + resultados);
alert("Hasta la proxima " +user+ "!!!");



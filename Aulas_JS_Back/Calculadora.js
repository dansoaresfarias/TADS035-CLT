const prompt = require('prompt-sync')();

let num1, op, num2;

num1 = parseFloat(prompt("Informe o primeiro número para operarmos: "));
op = prompt("Informe um operador (+ - x /): ");
num2 = parseFloat(prompt("Informe o segundo número para operarmos: "));

switch (op) {
    case "+":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case "-":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case "x":
        console.log(`${num1} x ${num2} = ${num1 * num2}`);
        break;
    case "/":
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log(`Operador ${op} invalido.`);
        break;
}

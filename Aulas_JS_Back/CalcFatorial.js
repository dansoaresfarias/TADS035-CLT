// 5! = 5*4*3*2*1
// 4! = 4*3*2*1
// 5! = 5 * 4!
// n! = n * (n-1)!
const prompt = require('prompt-sync')();

function fatorial(n) {
    if(n == 1){
        return 1;
    }else{
        return n * fatorial(n-1);
    }    
}

let n = parseInt(prompt("Informe um numero inteiro positivo: "));
console.log(`${n}! = ${fatorial(n)}`);
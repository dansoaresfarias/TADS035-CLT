import esfera from "./Esfera.js";

const prompt = require('prompt-sync')();

let raio = Number(prompt("Informe o raio da esfera: "));
console.log(`O volume da esfera é ${esfera.volumeEsf(raio).toFixed(2)}
A área da esfera é ${esfera.areaEsf(raio).toFixed(2)}
A circunferência da esfera é ${esfera.circEsf(raio).toFixed(2)}`);
const prompt = require('prompt-sync')();

let repetir;

do {
    console.clear();
    let nota, media = 0, conceito;

    for (let i = 1; i <= 3; i++) {
        nota = parseFloat(prompt(`Informe a ${i}ª nota: `));
        media += nota;
    }

    media /= 3;

    (media >= 9.5) ? conceito = "Excelente" :
        (media < 9.5 && media >= 8.5) ? conceito = "Ótimo" :
            (media < 8.5 && media >= 7) ? conceito = "Bom" :
                (media < 7 && media >= 5) ? conceito = "ANS" : conceito = "Insuficiente"

    console.log(`Sua média foi ${media.toFixed(2)}, e seu conceito é ${conceito}`);

    repetir = prompt("Deseja repetir o programa (sim | não): ").toLowerCase();
} while (repetir == "sim");
// Muda tua vida Nayara!!!
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; i < 10; i++) {
    let numeros = []

    for (let i = 0; i < 6; i++) {
        let numeroSrt = getRandomInt(60) + 1;
        if (numeros.includes(numeroSrt)) {
            i--;
        } else {
            numeros.push(numeroSrt);
        }
    }

    console.log(numeros);
}
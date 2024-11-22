
function volumeEsf(raio) {
    // ve = 4/3 PI R3
    let volume = (4/3) * Math.PI * raio**3;
    return volume;
}

function areaEsf(raio) {
    return 4 * Math.PI * raio**2;
}

function circEsf(raio) {
    return 2 * Math.PI * raio;
}
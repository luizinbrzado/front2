function dividir(a,b) {
    if(b == 0) {
        return "Impossível calcular";
    } else {
        return a/b;
    }
}

module.exports = dividir;
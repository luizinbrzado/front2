function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let jogador = prompt("Jogador 1 - faça sua escolha!\n1 - Pedra\n2 - Papel\n3 - Tesoura");
let computador = getRandomInt(1, 4);

let win;

switch (jogador) {
    case 1:
        if(computador == 2) {win = 2; break;}
        else if(computador == 3) win = 1; break;
    case 2:
        if(computador == 1) {win = 2; break;}
        else if(computador == 3) win = 1; break;
    case 3:
        if(computador == 1) {win = 2; break;}
        else if(computador == 2) win = 1; break;
}

console.log(win);

if(win == 0) {
    alert("Empate!");
} else if(win == 1) {
    alert("Jogador ganhou!");
} else {
    alert("Computador ganhou!");
}
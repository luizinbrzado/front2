const dividir = require('./modules/dividir');
const subtrair = require('./modules/subtrair');
const multiplicar = require('./modules/multiplicar');
const somar = require('./modules/somar');

let valor1 = prompt("valor 1:")
let valor2 = prompt("valor 2:")


// console.log(dividir(1,0));
// console.log(subtrair(1,2));
// console.log(multiplicar(1,2));
// console.log(somar(1,2));

alert(somar(valor1, valor2));
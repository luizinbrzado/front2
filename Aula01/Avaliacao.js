// Aula 01 - 08/09/2021
// Front End II
// Avaliação Diagnóstica

/* 
    Para isso, crie um script que permita adicionar uma sequência de números (um array de
números) consecutivamente para receber as notas dos 4 bimestres. Após isso, crie uma
estrutura na qual todos os números do array sejam somados sequencialmente: o primeiro
número seja somado ao segundo e o resultado seja impresso no console. Então,
temos que pegar esse resultado e adicionar o terceiro número a ele, e assim por
diante, até terminarmos de percorrer o array. Seguindo a lógica do exemplo a seguir:

    Por fim, a soma desses números deve ser dividida pelo total de bimestres (4) para calcular a
média e guardada em uma variável, a qual deve ser exibida no console.

    Terminada esta etapa é hora de preparar o código para ficar mais amigável ao usuário final,
com mensagens que informem a nota do aluno e sua condição:
    1. Utilizando a função console.log informe a nota que o aluno teve em cada um dos
bimestres e por fim sua nota final. Por exemplo: “Parabéns pela conclusão do primeiro
bimestre. Sua nota foi: 8.”;
    2. Após mostrar a nota final, crie uma estrutura de decisão que informe se o aluno foi
aprovado ou não, sendo a média da escola 7.
    3. Por fim, comente as etapas do código.
*/

// Array com nota dos 4 bimestres
let notasBim = [6.9, 6.9, 6.9, 7.1];

// Variável para total das notas
let total = 0;

// Função que percorre o Array pra somas as notas
let notasTotais = notasBim.forEach(
    (item) => total += item
);

// Variável que armazena a nota final com ponto flutuante
let notaFinal = (total/notasBim.length).toFixed(1);

// Imprimindo a nota final com apenas um número após a vírgula
console.log(notaFinal);

// Imprimindo as notas do 1º ao 4º bimestre respectivamente e a nota final
console.log(notasBim + " são suas notas do 1º ao 4º bimestre, respectivamente. Sua nota final foi " + notaFinal + "!");

// Imprimindo para o usuário se foi aprovado ou não
if (notaFinal>=7) {
    console.log("Você foi aprovado!");
    // alert("Você foi aprovado!");
} else {
    console.log("Infelizmente você não passou, mas não desista!");
    // alert("Infelizmente você não passou, mas não desista!");
};
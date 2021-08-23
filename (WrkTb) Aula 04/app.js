// // header
// let variavelHeader = document.querySelector('header');
// console.log(variavelHeader);

// // h1
// let variavelH1 = document.querySelector('h1');
// console.log(variavelH1);

// // body
// let variavelBody = document.querySelector('body');
// console.log(variavelBody);

// // .conteudo / div
// let variavelConteudo = document.querySelector('.conteudo');
// console.log(variavelConteudo);

// // h5
// let variavelH5 = document.querySelector('h5');
// console.log(variavelH5);

// // ul
// let variavelUl = document.querySelector('ul');
// console.log(variavelUl);

// // li
// let variavelLi = document.querySelectorAll('li');
// console.log(variavelLi);

// //section
// let variavelsection = document.querySelector('section');
// console.log(variavelsection);

// // article
// let variavelArticle = document.querySelectorAll('article');
// console.log(variavelArticle);

// // .animado
// let variavelAnimado = document.querySelector('.animado');
// console.log(variavelAnimado);

// // .diferente
// let variavelDiferente = document.querySelector('.diferente');
// console.log(variavelDiferente);

// // h2
// let variavelH2 = document.querySelectorAll('h2');
// console.log(variavelH2);

// // p
// let variavelP = document.querySelectorAll('p');
// console.log(variavelP);

const listadeFelinos = [
    {
        title: 'O tigre',
        imgUrl: './imagens/tigre.jpg',
        description: 'O Tigre (Panthera tigris) é uma das espécies da subfamília dos panterinos (família Felidae) pertencente ao gênero Panthera. Só é encontrado no continente asiático; É um predador carnívoro e é a maior espécie de felino do mundo, junto com o leão, podendo ambos atingir um tamanho comparável ao dos maiores fósseis de felinos.',
        createdAt: '2021-06-01T23:12:11.837Z'
    },
    {
        title: 'O leão',
        imgUrl: './imagens/leao.jpg',
        description: 'O leão (Panthera leo) é um mamífero carnívoro da família dos felídeos que é uma das cinco espécies do gênero Panthera. Leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África Subsaariana (com exceção das regiões de selva da costa atlântica e da Bacia do Congo) e em uma pequena área do noroeste da Índia',
        createdAt: '2021-05-05T23:12:11.837Z'
    },
    {
        title: 'O leopardo',
        imgUrl: './imagens/leopardo.jpg',
        description: 'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felídeos. Como três dos outros gatos do gênero Panthera: o leão, o tigre e a onça, eles se caracterizam por uma modificação no osso hióide que lhes permite rugir. É também conhecida como pantera marrom e, quando tem a pelagem totalmente escura, como pantera negra (melânica).',
        createdAt: '2021-05-05T23:12:11.837Z'
    },
    {
        title: 'A pantera negra',
        imgUrl: './imagens/pantera-negra.jpg',
        description: 'A pantera negra é uma variação negra (melanismo) de várias espécies de grandes felinos, principalmente o leopardo (Pantherapardus) e a onça pintada (Panthera onca). Mas deve-se ressaltar que não é uma espécie nova, nem mesmo uma subespécie, é simplesmente uma variação negra desses animais.',
        createdAt: '2021-04-09T23:12:11.837Z'
    },
    {
        title: 'O jaguar',
        imgUrl: './imagens/jaguar.jpg',
        description: 'O jaguar, jaguar ou yaguareté (Panthera onca) é um felino carnívoro da subfamília dos Panterinos e gênero Panthera. É a única das cinco espécies atuais desse gênero encontradas na América. É também o maior felino da América e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).',
        createdAt: '2021-05-18T23:12:11.837Z'
    },
    {
        title: 'O guepardo',
        imgUrl: './imagens/chita.jpg',
        description: 'A chita (Acinonyx jubatus) 1 é um membro atípico da família dos felídeos. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido, atingindo velocidade máxima de 115 km / h em corridas de até quatrocentos ou quinhentos metros.',
        createdAt: '2021-05-22T23:12:11.837Z'
    },
];


listadeFelinos.forEach((value, indice) => { 
    let template = `<h2>${value.title}</h2>
    <img src="${value.imgUrl}" alt="">
    <p>${value.description}</p>
    <p>${value.createdAt}</p>`;
    document.querySelector('.title').innerHTML = template;

    let imgTamanho = document.querySelector('img');
    imgTamanho.style.width = '250px';
});
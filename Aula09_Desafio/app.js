let formulario = document.createElement('form');
formulario.setAttribute('method', 'post');
formulario.setAttribute('action', '#');
document.body.appendChild(formulario);

let nome = document.createElement('input');
nome.setAttribute('type', 'text');
nome.setAttribute('name', 'nome');
nome.setAttribute('class', 'cadastro')
formulario.appendChild(nome);

let sobrenome = document.createElement('input');
sobrenome.setAttribute('type', 'text');
sobrenome.setAttribute('name', 'sobrenome');
sobrenome.setAttribute('class', 'cadastro')
formulario.appendChild(sobrenome);

let email = document.createElement('input');
email.setAttribute('type', 'email');
email.setAttribute('name', 'email');
email.setAttribute('class', 'cadastro')
formulario.appendChild(email);

let btn = document.createElement('button');
btn.setAttribute('type', 'submit');
btn.textContent = "Clique aqui";
document.body.appendChild(btn);

var variavel = Array.from(document.getElementsByClassName('cadastro'))
variavel.forEach((el) => {
    el.addEventListener('focusout', function () {
        el.setAttribute('disabled', true);
    })
    el.addEventListener('mouseout', () => {
        el.setAttribute('disabled', true);
    })
})

btn.addEventListener('click', () => {
    nome.removeAttribute('disabled');
    sobrenome.removeAttribute('disabled');
    email.removeAttribute('disabled')
})
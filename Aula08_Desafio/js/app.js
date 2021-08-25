// 1. Crie um formulário com campos de input e botões de submit e reset.
var body = document.querySelector("body");

body.innerHTML = `<form action="">
<input type="text">
<button class="btnSubmit" type="submit">Enviar</button>
<button type="reset">Limpar</button>
</form>
<p onmouseover="mudarCor(this, 'red')" onmouseout="mudarCor(this, 'blue')">Arco-íris!</p>`;

// 2. Previna a página de ser recarregada quando houver o submit
// utilizando preventDefault().
var btnSubmit = document.querySelector(".btnSubmit");
btnSubmit.addEventListener('click', e => {
    e.preventDefault();
})

// 3. Mostre um alerta na página quando a tela terminar de ser carregada.
window.onload = () => {alert("Página carregada!")}

// 4. Adicione uma cor a um texto quando o mouse ficar acima do mesmo e
// outra cor quando ele sair do mesmo.
function mudarCor(obj, cor) {
    obj.style.color=cor;
}
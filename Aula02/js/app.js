let situacao = confirm("Para acessar o sistema pressione OK")

if(situacao==true) {
    window.location.href = "acessoPermitido.html";
} else {
    window.location.href = "acessoNegado.html";
}
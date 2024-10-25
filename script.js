
function mostrar_imagem_castro() {
    const input = document.getElementById('button-uptade-imagem');
    const fotoPerfil = document.getElementById('foto-cadastro');
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        fotoPerfil.src = e.target.result;
    }

    if (file) {
        reader.readAsDataURL(file); // Lê a imagem como URL
    }
}

function mudaPagina_Cadastro1_2(){
    window.location.href = "Cadastro2.html";
    enviar_Cadastro1();
}

function enviar_Cadastro1(){
    if(document.getElementById = null){
        alert("tá faltando coisa aí tio");
    }
}

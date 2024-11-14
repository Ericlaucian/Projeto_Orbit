
let nome;

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
window.onload = function mostra_nome(){
    document.getElementById("nome-home") = nome;
}

function mudaPagina_Cadastro1_2(){
    if(document.getElementById("nome").value == "" || document.getElementById("Data-de-Nascimento").value == "" || 
        document.getElementById("email").value == "" || document.getElementById("CPF").value == "" || document.getElementById("button-uptade-imagem").value == "" ){
        alert("tá faltando coisa aí tio");
    } else{
        Cadastro2();
    }
}

function mudaPagina_Cadastro2_3(){
    if(document.getElementById("Cidade").value == "" || document.getElementById("Bairro").value == "" || 
        document.getElementById("CEP").value == "" || document.getElementById("Rua").value == ""){
        alert("tá faltando coisa aí tio");
    } else{
        Cadastro3();
    }
}

function Cadastro1(){
    window.location.href = "cadastro/Cadastro1.html";
}
function Cadastro2(){
    window.location.href = "cadastro/Cadastro2.html";
}
function Cadastro3(){
    window.location.href = "cadastro/Cadastro3.html";
}
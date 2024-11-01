
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
        nome = document.getElementById("nome").value;
        window.location.href = "Cadastro2.html";
    }
}

function mudaPagina_Cadastro2_3(){
    if(document.getElementById("Cidade").value == "" || document.getElementById("Bairro").value == "" || 
        document.getElementById("CEP").value == "" || document.getElementById("Rua").value == ""){
        alert("tá faltando coisa aí tio");
    } else{
        window.location.href = "Cadastro3.html";
    }
}

function Cadastro1(){
    window.location.href = "Cadastro1.html";
}

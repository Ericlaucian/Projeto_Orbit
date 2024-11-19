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

if(window.location.pathname.includes("Cadastro1.html")){
    window.onload = function(){
        document.getElementById('nome').value = localStorage.getItem('nome') || '';
        document.getElementById('Data-de-Nascimento').value = localStorage.getItem('dtNascimento') || '';
        document.getElementById('email').value = localStorage.getItem('email') || '';
        document.getElementById('CPF').value = localStorage.getItem('CPF') || '';
        document.getElementById('button-uptade-imagem').value = localStorage.getItem('ftPerfil') || '';
    };

    

    function mudaPagina_Cadastro1_2(){
        if(document.getElementById("nome").value == "" || document.getElementById("Data-de-Nascimento").value == "" || 
        document.getElementById("CPF").value == "" || document.getElementById("button-uptade-imagem").value == "" ){
            alert("tá faltando coisa aí tio");
        } else{
            const nome = document.getElementById('nome').value;
            const dtNascimento = document.getElementById('Data-de-Nascimento').value;
            const CPF = document.getElementById('CPF').value;
            const ftPerfil = document.getElementById("button-uptade-imagem").value;

            localStorage.setItem('nome', nome);
            localStorage.setItem('dtNascimento', dtNascimento);
            localStorage.setItem('CPF', CPF);
            localStorage.setItem('ftPerfil', ftPerfil)

            Cadastro2();
        }
    }
}

if(window.location.pathname.includes("Cadastro2.html")){
    window.onload = function(){
        document.getElementById('Cidade').value = localStorage.getItem('Cidade') || '';
        document.getElementById('Bairro').value = localStorage.getItem('Bairro') || '';
        document.getElementById('CEP').value = localStorage.getItem('CEP') || '';
        document.getElementById('Rua').value = localStorage.getItem('Rua') || '';
    };

    function mudaPagina_Cadastro2_3(){
        if(document.getElementById("Cidade").value == "" || document.getElementById("Bairro").value == "" || 
            document.getElementById("CEP").value == "" || document.getElementById("Rua").value == ""){
            alert("tá faltando coisa aí tio");
        } else{
            const Cidade = document.getElementById('Cidade').value;
            const Bairro = document.getElementById('Bairro').value;
            const CEP = document.getElementById('CEP').value;
            const Rua = document.getElementById('Rua').value;

            localStorage.setItem('Cidade', Cidade);
            localStorage.setItem('Bairro', Bairro);
            localStorage.setItem('CEP', CEP);
            localStorage.setItem('Rua', Rua);

            Cadastro3();
        }
    }
}

if(window.location.pathname.includes("Cadastro3.html")){
    window.onload = function(){
        document.getElementById('Cursos').value = localStorage.getItem('Cursos') || '';
        document.getElementById('Experiência_Profissional').value = localStorage.getItem('Experiência_Profissional') || '';
    };

    function mudaPagina_Cadastro3_4(){
        if(document.getElementById("Cursos").value == "" || document.getElementById("Experiência-Profissional").value == ""){
            alert("tá faltando coisa aí tio");
        } else{
            const Cursos = document.getElementById('Cursos').value;
            const Experiência_Profissional = document.getElementById('Experiência_Profissional').value;

            localStorage.setItem('Cursos', Cursos);
            localStorage.setItem('Experiência_Profissional', Experiência_Profissional);

            Cadastro4();
        }
    }
}

function verificarLogin(){
    verificarEmail();
    verificarSenha();
}

function verificarEmail(){
    if(document.getElementById("email-login").value != "" && document.getElementById("email-login").value.endsWith("mail.com")){
        out_modal();
    } else{
        alert("email inválido");
    }
}

function verificarSenha(){
}

function Cadastro1(){
    window.location.href = "Cadastro1.html";
}
function Cadastro2(){
    window.location.href = "Cadastro2.html";
}
function Cadastro3(){
    window.location.href = "Cadastro3.html";
}

function Cadastro4(){
    window.location.href = "Cadastro4.html"
}

function login_modal(){
    document.getElementById("login").style.display = "block";
}

function out_modal(){
    document.getElementById("login").style.display = "none";
}
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

    function salvarInfo1(){
        const nome = document.getElementById('nome').value;
        const dtNascimento = document.getElementById('Data-de-Nascimento').value;
        const CPF = document.getElementById('CPF').value;
        const ftPerfil = document.getElementById("button-uptade-imagem").value;

        localStorage.setItem('nome', nome);
        localStorage.setItem('dtNascimento', dtNascimento);
        localStorage.setItem('CPF', CPF);
        localStorage.setItem('ftPerfil', ftPerfil)
    }

    function mudaPagina_Cadastro1_2(){
        if(document.getElementById("nome").value == "" || document.getElementById("Data-de-Nascimento").value == "" || 
        document.getElementById("CPF").value == "" || document.getElementById("button-uptade-imagem").value == "" ){
            alert("tá faltando coisa aí tio");
        } else{
            Cadastro2();
        }
    }

    document.getElementById("mudar-pagina").addEventListener('click', ()=>{
        salvarInfo1();
        mudaPagina_Cadastro2_3();
    });
}

if(window.location.pathname.includes("Cadastro2.html")){
    window.onload = function(){
        document.getElementById('Cidade').value = localStorage.getItem('Cidade') || '';
        document.getElementById('Bairro').value = localStorage.getItem('Bairro') || '';
        document.getElementById('CEP').value = localStorage.getItem('CEP') || '';
        document.getElementById('Rua').value = localStorage.getItem('Rua') || '';
    };

    function salvarInfo2(){
        const Cidade = document.getElementById('Cidade').value;
        const Bairro = document.getElementById('Bairro').value;
        const CEP = document.getElementById('CEP').value;
        const Rua = document.getElementById('Rua').value;

        localStorage.setItem('Cidade', Cidade);
        localStorage.setItem('Bairro', Bairro);
        localStorage.setItem('CEP', CEP);
        localStorage.setItem('Rua', Rua);
    }

    function mudaPagina_Cadastro2_3(){
        if(document.getElementById("Cidade").value == "" || document.getElementById("Bairro").value == "" || 
            document.getElementById("CEP").value == "" || document.getElementById("Rua").value == ""){
            alert("tá faltando coisa aí tio");
        } else{
            Cadastro3();
        }
    }

    document.getElementById("mudar-pagina").addEventListener('click', ()=>{
        salvarInfo2();
        mudaPagina_Cadastro2_3();
    });

    document.getElementById("voltar-cadastro").addEventListener('click', ()=>{
        salvarInfo2();
        Cadastro1();
    });
}

if(window.location.pathname.includes("Cadastro3.html")){
    window.onload = function(){
        document.getElementById('Cursos').value = localStorage.getItem('Cursos') || '';
        document.getElementById('Experiência_Profissional').value = localStorage.getItem('Experiência_Profissional') || '';
    };

    function salvarInfo3(){
        const Cursos = document.getElementById('Cursos').value;
        const Experiência_Profissional = document.getElementById('Experiência_Profissional').value;

        localStorage.setItem('Cursos', Cursos);
        localStorage.setItem('Experiência_Profissional', Experiência_Profissional);
    }

    function mudaPagina_Cadastro3_4(){
        if(document.getElementById("Cursos").value == "" || document.getElementById("Experiência_Profissional").value == ""){
            alert("tá faltando coisa aí tio");
        } else{
            Cadastro4();
        }
    }
    document.getElementById("curriculo").addEventListener('change', ()=>{
        if(document.getElementById("curriculo").files[0].name.endsWith(".pdf")){
            document.getElementById("curriculo-nome").innerText = document.getElementById("curriculo").files[0].name;
        }else{
            document.getElementById("curriculo-nome").innerText = "Escolha um PDF"
        }
    })

    document.getElementById("mudar-pagina").addEventListener('click', ()=>{
        salvarInfo3();
        mudaPagina_Cadastro3_4();
    });

    document.getElementById("voltar-cadastro").addEventListener('click', ()=>{
        salvarInfo3();
        Cadastro2();
    });
}

if(window.location.pathname.includes("Cadastro4.html")){
    window.onload = function(){
        document.getElementById('senha').value = localStorage.getItem('senha') || '';
        document.getElementById('email').value = localStorage.getItem('email') || '';
    };

    function salvarInfo4(){
        const Senha = document.getElementById('senha').value;
        const senha_confirm = document.getElementById('senha_confirm').value;
        const email = document.getElementById('email').value;

        localStorage.setItem('senha', Senha);
        localStorage.setItem('senha_confirm', senha_confirm);
        localStorage.setItem('email', email);
    }

    function concluirCadastro(){
        if(document.getElementById("senha").value == "" || document.getElementById("senha_confirm").value == "" || document.getElementById("email").value == ""){
            alert("tá faltando coisa aí tio");
        } else{
            salvarInfo4()
            CadastroFinal();
        }
    }

    document.getElementById("concluirCadastro").addEventListener('click', ()=>{
        salvarInfo4();
        concluirCadastro();
    });

    document.getElementById("voltar-cadastro").addEventListener('click', ()=>{
        salvarInfo4();
        Cadastro3();
    });
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

function CadastroFinal(){
    window.location.href = "CadastroFinal.html"
}

function login_modal(){
    document.getElementById("login").style.display = "block";
}

function out_modal(){
    document.getElementById("login").style.display = "none";
}

// =================================== PARTE DO IAN ======================================

function loadProfile() {
    document.getElementById("view-nome-completo").textContent =
      localStorage.getItem("nome-completo") || "Não informado";
    document.getElementById("view-data-nascimento").textContent =
      localStorage.getItem("data-nascimento") || "Não informado";
    document.getElementById("view-estado").textContent =
      localStorage.getItem("estado") || "Não informado";
    document.getElementById("view-cidade").textContent =
      localStorage.getItem("cidade") || "Não informado";
    document.getElementById("view-escolaridade").textContent =
      localStorage.getItem("escolaridade") || "Não informado";
    document.getElementById("view-endereco").textContent =
      localStorage.getItem("endereco") || "Não informado";
    document.getElementById("view-curso").textContent =
      localStorage.getItem("curso") || "Não informado";
    document.getElementById("view-descricao").textContent =
      localStorage.getItem("descricao") || "Não informado";
    document.getElementById("view-photo").src =
      localStorage.getItem("photo") || "https://via.placeholder.com/120";
  }

function toggleEditMode() {
const viewProfile = document.getElementById("view-profile");
const editProfile = document.getElementById("edit-profile");

if (viewProfile.style.display === "none") {
    viewProfile.style.display = "flex";
    editProfile.style.display = "none";
    loadProfile(); // Carrega o perfil novamente ao voltar ao modo visualização
} else {
    viewProfile.style.display = "none";
    editProfile.style.display = "flex";

    // Preenche os campos de edição com os dados armazenados no localStorage
    document.getElementById("edit-nome-completo").value =
    localStorage.getItem("nome-completo") || "";
    document.getElementById("edit-data-nascimento").value =
    localStorage.getItem("data-nascimento") || "";
    document.getElementById("edit-estado").value =
    localStorage.getItem("estado") || "";
    document.getElementById("edit-cidade").value =
    localStorage.getItem("cidade") || "";
    document.getElementById("edit-escolaridade").value =
    localStorage.getItem("escolaridade") || "";
    document.getElementById("edit-endereco").value =
    localStorage.getItem("endereco") || "";
    document.getElementById("edit-curso").value =
    localStorage.getItem("curso") || "";
    document.getElementById("edit-descricao").value =
    localStorage.getItem("descricao") || "";
    document.getElementById("edit-photo-preview").src =
    localStorage.getItem("photo") || "https://via.placeholder.com/120";
}
}

function formatDate(input) {
let value = input.value.replace(/\D/g, "");
if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
if (value.length > 5) value = value.slice(0, 5) + "/" + value.slice(5);
input.value = value;
}

function previewPhoto() {
const file = document.getElementById("edit-photo").files[0];
const reader = new FileReader();

reader.onloadend = function () {
    document.getElementById("edit-photo-preview").src = reader.result;
};

if (file) {
    reader.readAsDataURL(file);
}
}

function saveProfile() {
localStorage.setItem(
    "nome-completo",
    document.getElementById("edit-nome-completo").value
);
localStorage.setItem(
    "data-nascimento",
    document.getElementById("edit-data-nascimento").value
);
localStorage.setItem(
    "estado",
    document.getElementById("edit-estado").value
);
localStorage.setItem(
    "cidade",
    document.getElementById("edit-cidade").value
);
localStorage.setItem(
    "escolaridade",
    document.getElementById("edit-escolaridade").value
);
localStorage.setItem(
    "endereco",
    document.getElementById("edit-endereco").value
);
localStorage.setItem(
    "curso",
    document.getElementById("edit-curso").value
);
localStorage.setItem(
    "descricao",
    document.getElementById("edit-descricao").value
);
const photoSrc = document.getElementById("edit-photo-preview").src;
localStorage.setItem("photo", photoSrc);

alert("Informações salvas com sucesso!");
toggleEditMode(); // Volta para o modo visualização após salvar
}

  document.addEventListener("DOMContentLoaded", loadProfile);

  // ================================= PARTE MELO ==========================

  // Dados simulados (substituir por dados do banco de dados no futuro)
const jobs = [{
        title: "Desenvolvedor Front-End",
        description: "Criação de interfaces modernas.",
        city: "São Paulo",
        state: "SP",
        timeLeft: "5 dias",
        modality: "Presencial",
        details: {
            education: "Ensino Superior Completo",
            experience: "2 anos na área",
            observations: "Conhecimento em React.",
            deadline: "30/11/2024",
            location: "São Paulo, SP",
        },
    },
    {
        title: "Técnico de Manutenção",
        description: "Manutenção de sistemas elétricos.",
        city: "Rio de Janeiro",
        state: "RJ",
        timeLeft: "10 dias",
        modality: "Híbrido",
        details: {
            education: "Ensino Técnico",
            experience: "3 anos na área",
            observations: "Disponibilidade para viagens.",
            deadline: "05/12/2024",
            location: "Rio de Janeiro, RJ",
        },
    },
];

// Gerar os cartões de vagas
const jobsContainer = document.querySelector(".jobs-container");
jobs.forEach((job, index) => {
    const jobCard = document.createElement("div");
    jobCard.classList.add("job-card");
    jobCard.innerHTML = `
        <h3>${job.title}</h3>
        <p>${job.description}</p>
        <p>${job.city}, ${job.state}</p>
        <p><strong>${job.timeLeft}</strong></p>
        <p>${job.modality}</p>
        <button class="details-button" data-index="${index}">Ver Mais</button>
    `;
    jobsContainer.appendChild(jobCard);
});

// Modal de detalhes
const modal = document.getElementById("job-modal");
const closeModal = document.querySelector(".close-btn");

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("details-button")) {
        const index = e.target.dataset.index;
        const job = jobs[index];

        // Preencher modal
        document.getElementById("job-title").textContent = job.title;
        document.getElementById("job-education").textContent = job.details.education;
        document.getElementById("job-experience").textContent = job.details.experience;
        document.getElementById("job-modality").textContent = job.modality;
        document.getElementById("job-location").textContent = job.details.location;
        document.getElementById("job-observations").textContent = job.details.observations;
        document.getElementById("job-deadline").textContent = job.details.deadline;

        modal.classList.remove("hidden");
    }
});

// Fechar modal
closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

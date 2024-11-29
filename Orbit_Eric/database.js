let nomes = [];
let idade = [];
let CPF = [];
let rua = [];
let cidade = [];
let bairro = [];
let estado = [];
let email = [];

let id_auto_increment = nomes.length;

document.getElementById("submit").addEventListener('click', ()=>{
    nomes.push(document.getElementById("nome").value);
    document.getElementById("matriz").innerText = nomes;
})

document.getElementById("find").addEventListener('click', ()=>{
    document.getElementById("posição").innerText = nomes[document.getElementById("id").value - 1];
})
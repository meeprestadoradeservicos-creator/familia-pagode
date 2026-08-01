// =======================================
// DJ PRO 5.0 MASTER
// script.js
// Administração
// =======================================


// CARREGAR CONFIGURAÇÃO AO ABRIR

window.onload = function(){

    const dados = localStorage.getItem("painelDJ");

    if(dados){

        const config = JSON.parse(dados);

        document.getElementById("dj1").value = config.dj1 || "";
        document.getElementById("dj2").value = config.dj2 || "";
        document.getElementById("dj3").value = config.dj3 || "";
        document.getElementById("dj4").value = config.dj4 || "";

        document.getElementById("hora1").value = config.hora1 || "";
        document.getElementById("hora2").value = config.hora2 || "";
        document.getElementById("hora3").value = config.hora3 || "";
        document.getElementById("hora4").value = config.hora4 || "";

        document.getElementById("frase").value = config.frase || "";

    }

};


// SALVAR CONFIGURAÇÃO

function salvarConfiguracao(){

    const configuracao = {

        dj1: document.getElementById("dj1").value,
        dj2: document.getElementById("dj2").value,
        dj3: document.getElementById("dj3").value,
        dj4: document.getElementById("dj4").value,

        hora1: document.getElementById("hora1").value,
        hora2: document.getElementById("hora2").value,
        hora3: document.getElementById("hora3").value,
        hora4: document.getElementById("hora4").value,

        frase: document.getElementById("frase").value

    };

    localStorage.setItem("painelDJ", JSON.stringify(configuracao));

    alert("Configuração salva com sucesso!");

}
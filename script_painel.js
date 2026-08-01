
// =======================================
// DJ PRO 5.0 MASTER
// script_painel.js CORRIGIDO
// PARTE 1
// =======================================


// ================================
// CONFIGURAÇÃO PADRÃO
// ================================

let configuracao = {

    dj1:"DJ EDSON PAGODE",
    dj2:"DJ MILLA PAGODE",
    dj3:"DJ ARLEY SA DREAMS",
    dj4:"DJ PEROLA HELSING",

    hora1:"19:00",
    hora2:"20:30",
    hora3:"22:00",
    hora4:"23:30",

    frase:"Bem-vindos à Família Pagode"

};


// ================================
// CARREGAR CONFIGURAÇÃO DO ADMIN
// ================================

function carregarConfiguracao(){

    const dados = localStorage.getItem("painelDJ");

    if(dados){

        configuracao = JSON.parse(dados);

    }

}



// ================================
// RELÓGIO
// ================================

function atualizarRelogio(){

    const relogio = document.getElementById("relogio");

    if(!relogio) return;


    const agora = new Date();


    const horas =
    String(agora.getHours()).padStart(2,"0");


    const minutos =
    String(agora.getMinutes()).padStart(2,"0");


    const segundos =
    String(agora.getSeconds()).padStart(2,"0");


    relogio.textContent =
    horas + ":" + minutos + ":" + segundos;

}



// ================================
// CONVERTER HORÁRIO
// ================================

function converterMinutos(hora){

    const partes = hora.split(":");


    return (

        parseInt(partes[0]) * 60 +

        parseInt(partes[1])

    );

}



// ================================
// FIM DA PARTE 1
// NÃO SALVE AINDA
// AGUARDE A PARTE 2
// =======================================
// =======================================
// PARTE 2
// =======================================


// ================================
// DJ ATUAL
// ================================

function atualizarDJAtual(){

    const djAtual = document.getElementById("djAtual");

    if(!djAtual) return;


    const agora = new Date();


    const atualMinutos =
    agora.getHours() * 60 +
    agora.getMinutes();



    let dj = "AGUARDANDO INÍCIO";



    if(
        atualMinutos >= converterMinutos(configuracao.hora1) &&
        atualMinutos < converterMinutos(configuracao.hora2)
    ){

        dj = configuracao.dj1;

    }

    else if(
        atualMinutos >= converterMinutos(configuracao.hora2) &&
        atualMinutos < converterMinutos(configuracao.hora3)
    ){

        dj = configuracao.dj2;

    }

    else if(
        atualMinutos >= converterMinutos(configuracao.hora3) &&
        atualMinutos < converterMinutos(configuracao.hora4)
    ){

        dj = configuracao.dj3;

    }

    else if(
        atualMinutos >= converterMinutos(configuracao.hora4)
    ){

        dj = configuracao.dj4;

    }



    djAtual.textContent = dj;

}



// ================================
// PRÓXIMOS DJS
// ================================

function atualizarListaDJs(){

    const lista =
    document.getElementById("listaDJs");


      if(!lista) return;



    lista.innerHTML =

    "🎧 " + configuracao.dj1 + " ........ " + configuracao.hora1 + "<br><br>" +

    "🎧 " + configuracao.dj2 + " ........ " + configuracao.hora2 + "<br><br>" +

    "🎧 " + configuracao.dj3 + " ........ " + configuracao.hora3 + "<br><br>" +

    "🎧 " + configuracao.dj4 + " ........ " + configuracao.hora4;

}

// ================================
// CONTADOR
// ================================

function atualizarContador(){

    const contador =
    document.getElementById("contador");


    if(!contador) return;



    const agora = new Date();


    const atual =
    agora.getHours() * 60 +
    agora.getMinutes();



    const segundos =
    agora.getSeconds();



    let proximo = null;



    let horarios = [

        configuracao.hora1,
        configuracao.hora2,
        configuracao.hora3,
        configuracao.hora4

    ];



    for(let h of horarios){

        let valor =
        converterMinutos(h);


        if(valor > atual){

            proximo = valor;
            break;

        }

    }



    if(proximo === null){

        contador.innerHTML =
        "PROGRAMAÇÃO ENCERRADA";

        return;

    }



    let falta =
    ((proximo - atual) * 60) - segundos;



    let h =
    Math.floor(falta / 3600);



    let m =
    Math.floor((falta % 3600) / 60);



    let s =
    falta % 60;



    contador.innerHTML =

    String(h).padStart(2,"0") + ":" +

    String(m).padStart(2,"0") + ":" +

    String(s).padStart(2,"0");

}



// =======================================
// FIM DA PARTE 2
// NÃO SALVE AINDA
// AGUARDE A PARTE 3
// =======================================
// =======================================
// PARTE 3
// =======================================


// ================================
// EQUALIZADOR
// ================================

const barras = [

    "▂▅▇▅▂",

    "▅▇▂▇▅",

    "▇▂▅▂▇",

    "▅▂▇▅▂"

];


let indiceBarra = 0;



function atualizarEqualizador(){

    const equalizador =
    document.querySelector(".equalizador");


    if(!equalizador) return;


    equalizador.textContent =
    barras[indiceBarra];


    indiceBarra++;


    if(indiceBarra >= barras.length){

        indiceBarra = 0;

    }

}



// ================================
// RODAPÉ
// ================================

function atualizarFrase(){

    const rodape =
    document.querySelector(".rodape");


    if(rodape && configuracao.frase){

        rodape.textContent =
        configuracao.frase;

    }

}



// ================================
// ATUALIZA PAINEL
// ================================

function atualizarPainel(){

    carregarConfiguracao();

    atualizarRelogio();

    atualizarDJAtual();

    atualizarListaDJs();

    atualizarContador();

    atualizarFrase();

    atualizarEqualizador();

}



// ================================
// INICIAR SISTEMA
// ================================

atualizarPainel();


setInterval(atualizarPainel,1000);


setInterval(atualizarEqualizador,300);



// =======================================
// DJ PRO 5.0 MASTER
// SCRIPT FINALIZADO
// =======================================
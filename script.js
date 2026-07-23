// =========================
// RELÓGIO
// =========================

function atualizarRelogio() {

    const agora = new Date();

    const h = String(agora.getHours()).padStart(2, "0");
    const m = String(agora.getMinutes()).padStart(2, "0");
    const s = String(agora.getSeconds()).padStart(2, "0");

    const relogio = document.getElementById("relogio");

    if (relogio) {
        relogio.textContent = h + ":" + m + ":" + s;
    }

}

// =========================
// PAINEL DOS DJS
// =========================

function atualizarPainel() {

    const agora = new Date();

    const hora = agora.getHours();

    let djAtual = "PROGRAMACAO INICIA AS 19:00";
    let proximoDJ = "DJ EDSON PAGODE";

    if (hora >= 19 && hora < 20) {

        djAtual = "DJ EDSON PAGODE";
        proximoDJ = "DJ MILLA PAGODE";

    } else if (hora >= 20 && hora < 21) {

        djAtual = "DJ MILLA PAGODE";
        proximoDJ = "DJ ARLEY SA DREAMS";

    } else if (hora >= 21 && hora < 22) {

        djAtual = "DJ ARLEY SA DREAMS";
        proximoDJ = "DJ PEROLA HELSING";

    } else if (hora >= 22 && hora < 23) {

        djAtual = "DJ PEROLA HELSING";
        proximoDJ = "ENCERRAMENTO";

    } else if (hora >= 23) {

        djAtual = "PROGRAMACAO ENCERRADA";
        proximoDJ = " ATE A PROXIMA FESTA";

    }

    // Atualiza os nomes

    const nomeDJ = document.getElementById("nomeDJ");

    if (nomeDJ) {
        nomeDJ.textContent = djAtual;
    }

    const proximo = document.getElementById("proximoDJ");

    if (proximo) {
        proximo.textContent = proximoDJ;
    }

    // Limpa destaques da tabela

    for (let i = 19; i <= 22; i++) {

        let linha = document.getElementById("dj" + i);

        if (linha) {

            linha.style.background = "";
            linha.style.color = "";

        }

        let indicador = document.getElementById("ind" + i);

        if (indicador) {

            indicador.textContent = "";

        }

    }

    // Destaca DJ atual

    if (hora >= 19 && hora <= 22) {

        let linha = document.getElementById("dj" + hora);

        if (linha) {

            linha.style.background = "#FFD700";
            linha.style.color = "#000";

        }

        let indicador = document.getElementById("ind" + hora);

        if (indicador) {

            indicador.textContent = " ?? AO VIVO";

        }

    }

}

// =========================

setInterval(function () {

    atualizarRelogio();
    atualizarPainel();

}, 1000);

atualizarRelogio();
atualizarPainel();
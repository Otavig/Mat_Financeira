function juros_simples(c, i, t) {
    let j = c * (i / 100) * t;
    let m = c + j;
    return `O juros será de <span class="red-text">${j.toFixed(2)}R$</span> e o montante de <span class="red-text">${m.toFixed(2)}R$</span>.`;
}

function juros_composto(c, i, t) {
    let m = c * Math.pow(1 + i / 100, t);
    let j = m - c;
    return `O juros será de <span class="red-text">${j.toFixed(2)}R$</span> e o montante de <span class="red-text">${m.toFixed(2)}R$</span>.`;
}

document.addEventListener("DOMContentLoaded", function () {
    let resposta = document.querySelector(".resposta");
    let titulo = document.querySelector(".juros");
    let pergunta;

    do {
        pergunta = window.prompt("Qual você quer realizar?" + "\n" + "1: Juros Simples" + "\n" + "2: Juros Composto");
        alert("Lembre-se de converter a taxa por mês e ano igual o tempo.");
        c = parseFloat(window.prompt("Qual a capital inicial?"));
        i = parseFloat(window.prompt("Taxa de juros?"));
        t = parseFloat(window.prompt("Qual o tempo?"));

        switch (pergunta) {
            case "1":
                titulo.textContent = "Juros Simples";
                resposta.innerHTML = juros_simples(c, i, t);
                break;

            case "2":
                titulo.textContent = "Juros Composto";
                resposta.innerHTML = juros_composto(c, i, t);
                break;

            default:
                alert("Erro: Opção inválida");
                break;
        }
    } while (pergunta !== "1" && pergunta !== "2");
});

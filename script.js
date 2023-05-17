const pedra = document.getElementById("pedra");
const papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");
const tentarNovamente = document.getElementById("tentar-novamente")
var numeroAleatorio = randomGen();

function randomGen() {
    return Math.floor(Math.random() * 3) + 1
};

function CriarResposta(respostaTexto) {
    var bot = document.getElementById("escolheu");
    if (bot) {
        bot.parentNode.removeChild(bot);
    }

    bot = document.createElement("h1");
    bot.id = "escolheu";
    var texto = document.createTextNode("O computador escolheu: ");
    bot.appendChild(texto);
    var resposta = document.createTextNode(respostaTexto);
    bot.appendChild(resposta);
    document.body.appendChild(bot);
}
var escolhaBot = numeroAleatorio;
function resultados(escolhaUser) {
    var resultado = document.getElementById("resultado");
    if (resultado) {
        document.body.removeChild(resultado);
    }
    resultado = document.createElement("h2");
    resultado.id = "resultado";

    var mensagem;

    if (
        (escolhaUser === "papel" && numeroAleatorio === 1) ||
        (escolhaUser === "pedra" && numeroAleatorio === 3) ||
        (escolhaUser === "tesoura" && numeroAleatorio === 2)
    ) {
        mensagem = "Parabéns! Você venceu!";
    }else if (
        (escolhaUser === "papel" && numeroAleatorio === 2) ||
        (escolhaUser === "pedra" && numeroAleatorio === 1) ||
        (escolhaUser === "tesoura" && numeroAleatorio === 3)
    ) {
        mensagem = "Empate!";
    } else {
        mensagem = "Burro! Perdeu kkkk"
    }

    resultado.textContent = mensagem;
    document.body.appendChild(resultado);
    desativarBotoes();
    tentarNovamente.style.display = "block";
}

function desativarBotoes() {
    pedra.classList.add("botao-inativo");
    papel.classList.add("botao-inativo");
    tesoura.classList.add("botao-inativo");
}

tentarNovamente.addEventListener("click", function(){
    location.reload();
});

pedra.addEventListener("click", function() {
    var escolhaUser = "pedra";
    resultados(escolhaUser);
    if (numeroAleatorio === 1) {
        CriarResposta("pedra!");
    } else if (numeroAleatorio === 2) {
        CriarResposta("papel!");
    } else {
        CriarResposta("tesoura!");
    }
});

papel.addEventListener("click", function() {
    var escolhaUser = "papel";
    resultados(escolhaUser);
    if (numeroAleatorio === 1) {
        CriarResposta("pedra!");
    } else if (numeroAleatorio === 2) {
        CriarResposta("papel!");
    } else {
        CriarResposta("tesoura!");
    }
});

tesoura.addEventListener("click", function() {
    var escolhaUser = "tesoura";
    resultados(escolhaUser);
    if (numeroAleatorio === 1) {
        CriarResposta("pedra!");
    } else if (numeroAleatorio === 2) {
        CriarResposta("papel!");
    } else {
        CriarResposta("tesoura!");
    }
});

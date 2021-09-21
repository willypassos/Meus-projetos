// Capturar/selecionar os elementos de interesse
let botaoPedra = document.getElementById("botaoPedra");
let botaoPapel = document.getElementById("botaoPapel");
let botaoTesoura = document.getElementById("botaoTesoura");
let botaoResetar = document.getElementById("botaoResetar");
let apresentacao = document.getElementById("result");
let pontuacaoDoUsuario = 0;
let pontuacaoDoComputador = 0;

/* Teste de alteração de elemento
botaoPapel.style.backgroundColor = "red"
botaoPapel.style.width = "300px"
botaoResetar.style.backgroundColor="white"
*/

/*
O usuário jogou pedra e o computador jogou tesoura, vitória do usuário
*/

// Teste
// console.log(botaoPedra, botaoPapel, botaoTesoura);

// Criar a função jogar()
function jogar(evento){
    let idClicado = evento.target.id;
    let jogadaDoUsuario = idClicado.replace("botao","").toLowerCase();

    let jogadaDoComputador = jogaComputador();
    let jogada = jogadaDoUsuario + jogadaDoComputador;
    console.log(jogada);
    if(
        jogada=="papelpedra" ||
        jogada=="tesourapapel" ||
        jogada=="pedratesoura"
    ) {
        console.log("Usuário ganha");
        pontuacaoDoUsuario++;
        apresentacao.innerHTML = `Você jogou ${jogadaDoUsuario}. O computador jogou ${jogadaDoComputador}. Você ganhou!`;
        evento.target.className = "green-glow";
    } else if(
        jogada=="pedrapapel" ||
        jogada=="papeltesoura" ||
        jogada=="tesourapedra"
    ) {
        console.log("Computador ganhou");
        pontuacaoDoComputador++;
        apresentacao.innerHTML = `Você jogou ${jogadaDoUsuario}. O computador jogou ${jogadaDoComputador}. Você perdeu!`;
        evento.target.className = "red-glow";
    } else {
        console.log("Empate!")
        apresentacao.innerHTML = `Você jogou ${jogadaDoUsuario}. O computador jogou ${jogadaDoComputador}. Deu empate!`;
        evento.target.className = "gray-glow";
    }
    setTimeout(function(){evento.target.className=""}, 300);
    mostraPlacar()
}

function jogaComputador(){
    // passo 1: Sortear e guardar um número numa variável.
    let sorteado = 30*Math.random();

    // passo 2: verificar em que pedaço da régua ele está
    if(sorteado <= 10){
        return "pedra";
    } else if(sorteado>10 && sorteado <= 20) {
        return "papel";
    } else {
        return "tesoura";
    }

    // passo 3: retornar pedra, papel ou tesoura,
    //          dependendo do número obtido

}

function mostraPlacar(){
    // Capturar o elemento que mostra os pontos do usuário
    let placarUsuario = document.getElementById("placarUsuario");
    
    // Alterar o conteúdo desse elemento com o pontuacaoDoUsuario
    placarUsuario.innerHTML = pontuacaoDoUsuario;

    // Capturar o elemento que mostra os pontos do computador
    let placarComputador = document.getElementById("placarComputador");

    // Alterar o conteúdo do elemento para mostrar a pontuação do computador
    placarComputador.innerHTML = pontuacaoDoComputador;

    // Capturar o elemento de id="placares"
    let placares = document.getElementById("placares");
    
    if(pontuacaoDoUsuario < pontuacaoDoComputador){
        // Se computador ganhando: pintar de vermelho
        placares.className = "red-glow";

    } else if(pontuacaoDoUsuario > pontuacaoDoComputador) {
        // Se usuário ganhando: pintar de verde
        placares.className = "green-glow";
    } else {
        // Se empatado: pintar de nada.
        placares.className = "";
    }

}

function resetarPlacar(){
    // É feio, mas resolve...
    // window.location.reload();

    // Um outro jeito.
    pontuacaoDoUsuario = 0;
    pontuacaoDoComputador = 0;
    mostraPlacar();
}

// Associar o click dos botões à função jogar
botaoPedra.onclick = jogar;
botaoPapel.onclick = jogar;
botaoTesoura.onclick = jogar;
botaoResetar.onclick = resetarPlacar;
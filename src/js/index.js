/*
    Alt+Shift+A = transforma um bloco de linhas em comentário

    Objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML correspondete ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - verificar se o body ja tem modo escuro, adicionar a classe modo-escuro no body. remover a classe do modo-escuro do body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
    Objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - verificar se o body ja tem modo escuro, remover a classe do modo-escuro do body
        - passo 7 - trocar a imagem do botão de alterar tema pra sol
*/



// Passo 1 

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")
//Passo 2 

const body = document.querySelector("body");
//Passo 3 - Arrow Function
botaoAlterarTema.addEventListener("click", () => {
    //Passo 4 
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        //Passo 5
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
})
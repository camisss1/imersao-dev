let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("header input");
let botaoBusca = document.querySelector("#botao-busca");
let dados = [];

// Função para carregar os dados iniciais e renderizar os cards
async function carregarDadosIniciais() {
    try {
        let resposta = await fetch("data.json");
        dados = await resposta.json();
        renderizarCards(dados);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

document.addEventListener("DOMContentLoaded", carregarDadosIniciais);

// Adiciona os gatilhos para iniciar a busca
botaoBusca.addEventListener("click", iniciarBusca);
campoBusca.addEventListener("input", iniciarBusca); // Busca enquanto o usuário digita
campoBusca.addEventListener("keydown", (event) => { // Permite buscar com a tecla "Enter"
    if (event.key === "Enter") {
        iniciarBusca();
    }
});

async function iniciarBusca() {
    // Se os dados ainda não foram carregados, busca do JSON. 
    if (dados.length === 0) {
        try {
            let resposta = await fetch("data.json");
            dados = await resposta.json();
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            return; //Interrompe a execução se houver erro
        }
    }

    const termoBusca = campoBusca.value.toLowerCase();
    const dadosFiltrados = dados.filter(dado => 
        (dado.nome && dado.nome.toLowerCase().includes(termoBusca)) ||
        (dado.descricao && dado.descricao.toLowerCase().includes(termoBusca)) ||
        (dado.genero && dado.genero.toLowerCase().includes(termoBusca)) ||
        (dado.diretor && dado.diretor.toLowerCase().includes(termoBusca)) ||
        (dado.tags && dado.tags.some(tag => tag.toLowerCase().includes(termoBusca)))
    );

    renderizarCards(dadosFiltrados);

}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar novos
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p>${dado.data_criacao}</p>
            <p>${dado.descricao}</p>
            <p>Diretor: ${dado.diretor}</p>
            <p>Gênero: ${dado.genero}</p>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
        `
        cardContainer.appendChild(article);
    }    
}

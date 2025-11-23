Catálogo de Filmes Interativo

Este projeto é uma aplicação web front-end desenvolvida para servir como uma base de conhecimento de filmes. Ele apresenta uma coleção de filmes clássicos e aclamados em uma interface limpa e responsiva, com uma poderosa funcionalidade de busca em tempo real. A aplicação carrega os dados de um arquivo JSON local e os exibe em formato de cards, permitindo que o usuário explore a lista ou encontre filmes específicos de forma rápida e intuitiva.

  Funcionalidades Principais
  
Visualização em Grade: Os filmes são exibidos em uma grade responsiva (2 colunas em telas maiores, 1 em dispositivos móveis), com um design que lembra cartazes.

Carregamento Dinâmico: Todos os filmes são carregados e exibidos na tela assim que a página é aberta.

Busca Abrangente: A barra de pesquisa permite filtrar os filmes em tempo real com base em múltiplos critérios:

  . Nome do filme
  
  . Descrição
  
  . Gênero
  
  . Diretor
  
  . Tags associadas
  
Design Moderno: Interface com tema escuro, fontes estilizadas e efeitos sutis de hover para uma melhor experiência do usuário.

Links Externos: Cada card de filme contém um link "Saiba mais" que direciona para uma página com mais informações (atualmente, Rotten Tomatoes).

  Tecnologias Utilizadas
  
Este projeto foi construído utilizando tecnologias web fundamentais, sem a necessidade de frameworks complexos, demonstrando o poder do "JavaScript Baunilha" (Vanilla JS).

HTML5: Para a estruturação semântica do conteúdo.

CSS3: Para a estilização e o layout.

Flexbox e Grid Layout: Utilizados para criar um layout moderno e responsivo.

Variáveis CSS (Custom Properties): Para um tema consistente e de fácil manutenção.

Media Queries: Para garantir que a aplicação se adapte a diferentes tamanhos de tela (design responsivo).

JavaScript (ES6+): Para toda a lógica e interatividade da aplicação.

Fetch API: Para carregar os dados dos filmes de forma assíncrona a partir do arquivo data.json.

Async/Await: Para lidar com as operações assíncronas de maneira limpa e legível.

Manipulação do DOM: Para criar e atualizar dinamicamente os cards de filmes na tela.

Event Listeners: Para capturar as interações do usuário, como digitação no campo de busca e cliques em botões.

  Estrutura do Projeto
  
index.html: Arquivo principal que contém a estrutura da página.

style.css: Contém todos os estilos para a aparência da aplicação.

script.js: Responsável pela lógica de carregamento de dados, renderização dos cards e funcionalidade de busca.
data.json: Arquivo que funciona como um banco de dados estático, contendo a lista de objetos, onde cada objeto representa um filme com suas respectivas informações.

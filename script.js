// Objeto que armazena os dados de cada personagem
const biografias = {
    // Dados para o James Sunderland (o valor de data-personagem="james")
    'james': {
        titulo: "James Sunderland - O Herói de Culpas",
        imagem: "assets/jamessunderland.jpg", // Use a imagem maior se tiver
        texto: "James Sunderland chega à cidade de Silent Hill após receber uma carta de sua esposa Mary, falecida há três anos. Ele está em uma jornada de negação e culpa, confrontando as criaturas que representam seu subconsciente e, no final, a verdade sobre a morte de sua esposa."
    },
    
    // Dados para a Angela Orosco (o valor de data-personagem="angela")
    'angela': {
        titulo: "Angela Orosco - O Inferno Pessoal",
        imagem: "assets/angelaorosco.jpg",
        texto: "Angela está em busca de sua mãe, mas na verdade está fugindo de seu trauma de abuso sexual e físico por seu pai. Ela vê o mundo como um lugar de fogo e desespero, e suas criaturas (como o 'Abstract Daddy') representam seus opressores. Seu arco é uma das histórias mais tristes do jogo."
    },

    // Dados para a Maria
    'maria': {
        titulo: "Maria - A Tentação e a Punição",
        imagem: "assets/maria.jpg",
        texto: "Maria é uma manifestação dos desejos e culpas de James. Ela se parece com Mary, mas é sexualmente mais ousada e atrevida. Ela existe para tentar e atormentar James, morrendo repetidamente, o que força James a reviver sua perda e sentir sua culpa. Ela é a Mary idealizada, mas imperfeita."
    },

    // Dados para o Eddie
    'eddie': {
        titulo: "Eddie Dombrowski - A Fúria do Bullying",
        imagem: "assets/eddie.jpg",
        texto: "Eddie é um jovem mentalmente instável que sofreu bullying por causa de seu peso. Em Silent Hill, ele encontra o poder de se vingar, matando sem remorso. A cidade o transformou em um assassino, alimentando sua raiva e paranoia até o confronto final com James."
    }
    // Adicione mais personagens aqui (Laura, Mary, Pyramid Head...)
};

// 1. Obter referências para os elementos do DOM
const modal = document.getElementById('biografia-modal');
const closeButton = document.querySelector('.close-button');
const backButton = document.getElementById('modal-back-button');

const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-img');
const modalText = document.getElementById('modal-text');

// Seleciona todas as imagens que devem ser clicáveis
const personagensClicaveis = document.querySelectorAll('.personagem-clicavel');


// 2. Função para abrir o modal e carregar o conteúdo
function abrirBiografia(personagemKey) {
    const data = biografias[personagemKey]; // Pega os dados do personagem

    if (data) {
        // Injeta os dados no modal
        modalTitle.textContent = data.titulo;
        modalImage.src = data.imagem;
        modalImage.alt = data.titulo;
        modalText.textContent = data.texto;

        // Mostra o modal
        modal.style.display = 'block';
    }
}

// 3. Função para fechar o modal
function fecharModal() {
    modal.style.display = 'none';
}


// 4. Adicionar os Listeners (o que faz o código rodar no clique)

// Faz todas as imagens serem 'escutadas'
personagensClicaveis.forEach(img => {
    img.style.cursor = 'pointer'; // Adiciona o cursor de clique

    img.addEventListener('click', function() {
        // Pega o valor do atributo data-personagem que definimos no HTML
        const key = this.getAttribute('data-personagem'); 
        abrirBiografia(key);
    });
});

// Listener para o botão de fechar (X)
closeButton.addEventListener('click', fecharModal);

// Listener para o botão "Voltar à Lista"
backButton.addEventListener('click', fecharModal);

// Fecha o modal se o usuário clicar fora da caixa de conteúdo
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        fecharModal();
    }
});
const board = document.getElementById('board');
const resetButton = document.getElementById('reset');
let cardValues = ['🍎', '🍌', '🍇', '🍊', '🍉', '🍓', '🍒', '🍍'];
let cards = [...cardValues, ...cardValues]; // Double les cartes
let flippedCards = [];
let matchedCards = [];

// Fonction pour mélanger les cartes
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fonction pour créer le plateau de jeu
function createBoard() {
    board.innerHTML = '';
    const shuffledCards = shuffle(cards);
    shuffledCards.forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value;
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    });
}

// Fonction pour retourner la carte
function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        this.textContent = this.dataset.value;
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 1000);
        }
    }
}

// Vérifie si les cartes correspondent
function checkForMatch() {
    const [firstCard, secondCard] = flippedCards;
    if (firstCard.dataset.value === secondCard.dataset.value) {
        matchedCards.push(firstCard, secondCard);
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    } else {
        firstCard.classList.remove('flipped');
        firstCard.textContent = '';
        secondCard.classList.remove('flipped');
        secondCard.textContent = '';
    }
    flippedCards = [];
}

// Réinitialise le jeu
resetButton.addEventListener('click', () => {
    matchedCards = [];
    alert("Jeu réinitialisé.");
    createBoard();
});

// Lancer le jeu
createBoard();

const carrosselContainer = document.querySelector('.carrousel-contanier');
const prevBtn = document.querySelector('.carrossel-btn.prev');
const nextBtn = document.querySelector('.carrossel-btn.next');

let currentPosition = 0; // Posição atual do carrossel
const cardWidth = 16% // Largura do card + margem (300px + 20px)

prevBtn.addEventListener('click', () => {
    // Move para a esquerda
    currentPosition += cardWidth;
    if (currentPosition > 0) {
        currentPosition = 0; // Impede que o carrossel vá além do início
    }
    carrosselContainer.style.transform = `translateX(${currentPosition}px)`;
});

nextBtn.addEventListener('click', () => {
    // Move para a direita
    currentPosition -= cardWidth;
    const maxScroll = -(carrosselContainer.scrollWidth - carrosselContainer.clientWidth);
    if (currentPosition < maxScroll) {
        currentPosition = maxScroll; // Impede que o carrossel vá além do final
    }
    carrosselContainer.style.transform = `translateX(${currentPosition}px)`;
});
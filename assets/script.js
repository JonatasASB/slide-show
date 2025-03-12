let slider = document.querySelector('.slider--width');
let slides = document.querySelectorAll('.slider--item');
let slideWidth = slides[0].offsetWidth;
let totalSlides = slides.length;

// Clona os slides para criar um loop infinito
slides.forEach(slide => {
    let clone = slide.cloneNode(true);
    slider.appendChild(clone);
});

// Ajusta a largura total do slider
slider.style.width = `${slideWidth * (totalSlides * 2)}px`;
slider.style.display = 'flex';

// Configura a animação contínua
let animationSpeed = 1000; // Velocidade do movimento (menor = mais rápido)
let position = 0;

function slide() {
    position -= animationSpeed; // Move 1px para a esquerda
    slider.style.transform = `translateX(${position}px)`;

    // Quando alcançar a metade, reseta para evitar overflow
    if (Math.abs(position) >= slideWidth * totalSlides) {
        position = 0;
    }

    requestAnimationFrame(slide); // Chama a função continuamente
}

// Inicia a animação
slide();

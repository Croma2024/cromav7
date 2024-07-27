/*function resta(num1,num2) {
    var resultado = num1 - num2;
    console.log(resultado);
}

resta(20,5);*/

function abrirMenu() {
    var menu = document.querySelector(".lista");
    menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    const totalImages = images.length;
    let currentIndex = 0;

    // Ocultar todas las imágenes excepto la primera
    for (let i = 1; i < totalImages; i++) {
        images[i].style.display = 'none';
    }

    function showNextSlide() {
        // Ocultar la imagen actual
        images[currentIndex].style.display = 'none';
        // Calcular el índice de la siguiente imagen
        currentIndex = (currentIndex + 1) % totalImages;
        // Mostrar la siguiente imagen
        images[currentIndex].style.display = 'block';
    }

    function showPreviousSlide() {
        // Ocultar la imagen actual
        images[currentIndex].style.display = 'none';
        // Calcular el índice de la imagen anterior
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        // Mostrar la imagen anterior
        images[currentIndex].style.display = 'block';
    }



    document.getElementById('nextBtn').addEventListener('click', showNextSlide);
    document.getElementById('prevBtn').addEventListener('click', showPreviousSlide);


});



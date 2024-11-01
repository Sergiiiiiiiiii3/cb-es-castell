const canvas = document.getElementById('basketballCanvas');
const ctx = canvas.getContext('2d');

// Contenedor de la obra de net art
const netArtSection = document.getElementById('net-art');

canvas.width = window.innerWidth;
canvas.height = 400;

let isOverBall = false;
let lastIsOverBall = false;
const ballImage = new Image();
ballImage.src = 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png'; // URL de la imagen

// Dibuja la pelota de baloncesto usando una imagen
function drawBall() {
    const ballRadius = 40; // Radio de la pelota
    const ballX = canvas.width / 2 - ballRadius; // X del rectángulo para la imagen
    const ballY = canvas.height / 2 - ballRadius; // Y del rectángulo para la imagen

    // Dibuja la imagen de la pelota
    ctx.drawImage(ballImage, ballX, ballY, ballRadius * 2, ballRadius * 2); // Dibuja la imagen en el canvas
}

// Cambia el color de fondo de #net-art solo cuando el ratón cambia de estar dentro a fuera o viceversa
function changeBackgroundColor() {
    if (isOverBall !== lastIsOverBall) { // Cambia el fondo solo si hay cambio de estado
        netArtSection.style.backgroundColor = (netArtSection.style.backgroundColor === 'blue') ? 'white' : 'blue';
        lastIsOverBall = isOverBall; // Actualiza el estado previo
    }
}

// Verifica si el ratón está sobre la pelota
canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const distance = Math.sqrt((x - (canvas.width / 2)) ** 2 + (y - (canvas.height / 2)) ** 2);
    isOverBall = distance < 40; // Radio de la pelota

    changeBackgroundColor();
});

// Limpia el lienzo y dibuja de nuevo
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    requestAnimationFrame(animate);
}

// Asegúrate de que la imagen esté cargada antes de comenzar la animación
ballImage.onload = function() {
    animate();
};


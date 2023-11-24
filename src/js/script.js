document.addEventListener('DOMContentLoaded', function() {
    function drawing() {
        var c = document.getElementById("sky");
        var ctx = c.getContext("2d");
        var xMax = c.width = window.innerWidth;
        var yMax = c.height = window.innerHeight;

        var hmTimes = Math.round(xMax + yMax);

        for (var i = 0; i <= hmTimes; i++) {
            var randomX = Math.floor((Math.random() * xMax) + 1);
            var randomY = Math.floor((Math.random() * yMax) + 1);
            var randomSize = Math.floor((Math.random() * 2) + 1);
            var opacityOne = Math.floor((Math.random() * 9) + 1);
            var opacityTwo = Math.floor((Math.random() * 9) + 1);
            var randomHue = Math.floor((Math.random() * 360) + 1);
            ctx.fillStyle = "hsla(" + randomHue + ", 30%, 80%, ." + opacityOne + opacityTwo + ")";
            ctx.fillRect(randomX, randomY, randomSize, randomSize);
        }
    }

    function startExperience() {
        // Mostrar el contenido
        document.querySelector('.intro').style.display = 'block';
        document.querySelector('h1').style.display = 'block';
        document.querySelector('.content-wrapper').style.display = 'block';
        document.querySelector('.skip-intro-btn').style.display = 'block';

        // Ocultar el botón de inicio
        document.getElementById('start-button').style.display = 'none';

        // Iniciar otras acciones o animaciones
        drawing();

        // Reproducir el audio inmediatamente
        var audio = document.getElementById('background-audio');
        audio.muted = false;
        audio.play().catch(e => console.error('Error al reproducir el audio:', e));
    }

    // Agregar el evento de clic al botón de inicio
    var startButton = document.getElementById('start-button');
    if (startButton) {
        startButton.addEventListener('click', startExperience);
    } else {
        console.error('El botón de inicio no se encontró en el DOM');
    }
});
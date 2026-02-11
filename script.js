const secretTrigger = document.getElementById('secret-trigger');
const noBtn = document.getElementById('no-btn');
const mainCard = document.getElementById('main-card');
const questionText = document.getElementById('question-text');
const emojiContainer = document.getElementById('emoji-container');
const bg = document.getElementById('bg-animation');
const sound = document.getElementById('cute-sound');

// ACCESO
secretTrigger.addEventListener('click', () => {
    document.getElementById('error-screen').classList.add('hidden');
    document.getElementById('proposal-screen').classList.remove('hidden');
    bg.classList.add('bg-love');
    sound.play();

    // FUNCIÓN DE LLUVIA DE CORAZONES
    function lluviaCorazones() {
        for (let i = 0; i < 25; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-fall';
            heart.innerText = '❤️';

            // Posición inicial aleatoria
            heart.style.left = Math.random() * 98 + 'vw';
            heart.style.fontSize = (1 + Math.random() * 1.2) + 'rem';

            // Animación personalizada para cada corazón
            const duration = 5 + Math.random() * 6;
            const delay = Math.random() * 2.5;
            const rotateStart = Math.floor(Math.random() * 360);
            const rotateEnd = rotateStart + 360 + Math.floor(Math.random() * 180);
            const xSwing = (Math.random() - 0.5) * 80; // -40vw a 40vw

            heart.style.animation = `chaoticFallCustom${i}_${Date.now()} ${duration}s linear ${delay}s forwards`;

            // Crear keyframes únicos para cada corazón
            const styleSheet = document.createElement('style');
            styleSheet.innerHTML = `@keyframes chaoticFallCustom${i}_${Date.now()} {
                0% {
                    transform: translateX(0) translateY(0) rotate(${rotateStart}deg);
                    opacity: 1;
                }
                30% {
                    transform: translateX(${xSwing * 0.5}vw) translateY(30vh) rotate(${rotateStart + 90}deg);
                }
                60% {
                    transform: translateX(${xSwing}vw) translateY(65vh) rotate(${rotateStart + 180}deg);
                }
                100% {
                    transform: translateX(${xSwing * 0.7}vw) translateY(110vh) rotate(${rotateEnd}deg);
                    opacity: 0;
                }
            }`;
            document.head.appendChild(styleSheet);

            document.body.appendChild(heart);
        }
    }
    // Primera lluvia
    lluviaCorazones();
    // Lluvia constante cada 2 segundos
    setInterval(lluviaCorazones, 2000);
});

// CONTINUAR
document.getElementById('continue-btn').addEventListener('click', () => {
    document.getElementById('proposal-screen').classList.add('hidden');
    document.getElementById('final-screen').classList.remove('hidden');
});

// MODO TRISTE

const setSadMode = () => {
    document.body.classList.add('sad-theme');
    mainCard.classList.add('sad-card');
};

const setHappyMode = () => {
    document.body.classList.remove('sad-theme');
    mainCard.classList.remove('sad-card');
    emojiContainer.innerText = "🌹";
};




// Al dar clic o tap en NO, en cualquier dispositivo, cambia a SÍ y muestra mensaje

function showFinalScreen() {
    document.getElementById('final-screen').classList.add('hidden');
    document.getElementById('loki-screen').classList.remove('hidden');

    bg.className = "";
    document.body.style.backgroundColor = "#000";

    const end = Date.now() + 15000;

    (function burst() {
        confetti({
            particleCount: 120,
            spread: 360,
            startVelocity: 35,
            origin: { x: 0.5, y: 0.6 },
            colors: ['#ffeb3b', '#ffffff', '#ff4d6d']
        });
        if (Date.now() < end) setTimeout(burst, 600);
    })();
}

function handleNoBtnClick(e) {
    if (noBtn.innerText !== '¡SÍ! 😍') {
        setSadMode();
        showYesInsteadOfNo();
        e.preventDefault();
    } else {
        showFinalScreen();
    }
}
noBtn.addEventListener('touchstart', handleNoBtnClick);
noBtn.addEventListener('click', handleNoBtnClick);

document.getElementById('yes-btn').addEventListener('click', showFinalScreen);

function showYesInsteadOfNo() {
    // Cambia el texto, pero NO desactiva el botón
    noBtn.innerText = '¡SÍ! 😍';
    noBtn.classList.remove('no-style');
    noBtn.classList.add('pixel-btn');
    // Mensaje tierno arriba
    let msg = document.getElementById('no-msg-mobile');
    if (!msg) {
        msg = document.createElement('div');
        msg.id = 'no-msg-mobile';
        msg.style.fontFamily = "'Press Start 2P', cursive";
        msg.style.fontSize = '0.9rem';
        msg.style.color = '#ff4d6d';
        msg.style.marginBottom = '10px';
        msg.style.textAlign = 'center';
        msg.innerText = '¡Sabía que dirías que sí!';
        const btnGroup = noBtn.parentElement;
        btnGroup.parentElement.insertBefore(msg, btnGroup);
    }
}

// SÍ + CONFETI
document.getElementById('yes-btn').addEventListener('click', () => {
    document.getElementById('final-screen').classList.add('hidden');
    document.getElementById('loki-screen').classList.remove('hidden');

    bg.className = "";
    document.body.style.backgroundColor = "#000";

    const end = Date.now() + 15000;

    (function burst() {
        confetti({
            particleCount: 120,
            spread: 360,
            startVelocity: 35,
            origin: { x: 0.5, y: 0.6 },
            colors: ['#ffeb3b', '#ffffff', '#ff4d6d']
        });
        if (Date.now() < end) setTimeout(burst, 600);
    })();
});

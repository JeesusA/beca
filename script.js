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

    // CORAZONES ALEATORIOS
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-fall';
        heart.innerText = '❤️';

        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = (6 + Math.random() * 6) + 's';
        heart.style.fontSize = (1 + Math.random()) + 'rem';

        document.body.appendChild(heart);
    }
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
    questionText.innerText = "¿EN SERIO NO QUIERES?";
    emojiContainer.innerText = "💔😭";
};

const setHappyMode = () => {
    document.body.classList.remove('sad-theme');
    mainCard.classList.remove('sad-card');
    questionText.innerText = "¿QUIERES SER MI VALENTINE?";
    emojiContainer.innerText = "🌹";
};

noBtn.addEventListener('mouseenter', setSadMode);
noBtn.addEventListener('mouseleave', setHappyMode);

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

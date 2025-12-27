// Get the body so we can listen for key presses
document.body.addEventListener('keydown', function(e) {
    if (e.code === 'Space') { // Only triggers on SPACE
        e.preventDefault(); // Stop page from scrolling
        shakeEightBall();
    }
});

// List your audio clips here (put them in an "audio" folder)
const answers = [
    'audio/yes.mp3',
    'audio/no.mp3',
    'audio/maybe.mp3',
    'audio/try-again.mp3'
];

function shakeEightBall() {
    // Pick a random answer
    const randIndex = Math.floor(Math.random() * answers.length);
    const audio = new Audio(answers[randIndex]);
    audio.play();

    // Optional: visual feedback
    const ball = document.getElementById('eightball');
    if (ball) {
        ball.classList.add('shake');
        setTimeout(() => ball.classList.remove('shake'), 500);
    }
}

document.body.addEventListener('keydown', function(e) {
  if (e.code === 'Space') {
    e.preventDefault();
    shakeEightBall();
  }
});

const answers = [
  'audio/yes.mp3',
  'audio/no.mp3',
  'audio/maybe.mp3',
  'audio/try-again.mp3'
];

function shakeEightBall() {
  const randIndex = Math.floor(Math.random() * answers.length);
  const audio = new Audio(answers[randIndex]);
  audio.play();

  const ball = document.getElementById('eightball');
  if (ball) {
    ball.classList.add('shake');
    setTimeout(() => ball.classList.remove('shake'), 500);
  }
}

// Ejemplo de JavaScript
function showConfetti() {
  const container = document.querySelector('.confetti-container');
  for (let i = 0; i < 50; i++) { // Genera 50 confetis
    const conf = document.createElement('div');
    conf.classList.add('confetti');
    conf.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
    conf.style.top = `${Math.random() * 100}vh`; // Posición vertical aleatoria
    conf.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Color aleatorio
    container.appendChild(conf);
  }
}
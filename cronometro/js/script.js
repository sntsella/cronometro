const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

//variavel global let interval
let interval;
// variaveis para controlar o tempo
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

// Eventos dos botões
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTime);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTime);

// funcao para iniciar o temporizador
function startTimer() {
  interval = setInterval(() => {
    if (!isPaused) {
      milliseconds += 10;

      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }

      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      minutesEl.textContent = formatTime(minutes);
      secondsEl.textContent = formatTime(seconds);
      millisecondsEl.textContent = formatMilliseconds(milliseconds);
    }
  }, 10);

  startBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

//Funcao de Pausar
function pauseTime() {
  isPaused = true;
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "block";
}

//funcao de resetar
function resetTime() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  // zera o visual
  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
  millisecondsEl.textContent = "000";

  //zera os botoes
  startBtn.style.display = "block";
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "none";
}

//funcao de continuar
function resumeTimer() {
  isPaused = false;
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";
}

//funcao para formatar o tempo
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//funcao para formatar o milisegundo
function formatMilliseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}

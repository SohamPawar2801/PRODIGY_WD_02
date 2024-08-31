// Get DOM elements
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

// Variables to track time
let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Function to update display
function updateDisplay() {
  display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to start the stopwatch
function startStopwatch() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }, 1000);
  }
}

// Function to pause the stopwatch
function pauseStopwatch() {
  if (running) {
    running = false;
    clearInterval(timer);
  }
}

// Function to reset the stopwatch
function resetStopwatch() {
  running = false;
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

// Event listeners
startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

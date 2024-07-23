let timer;
let isPaused = false;
let remainingTime = 0;

const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const timeDisplay = document.getElementById('time-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', () => {
    if (!isPaused) {
        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        remainingTime = (hours * 3600) + (minutes * 60) + seconds;
    }
    isPaused = false;
    startTimer();
});

pauseBtn.addEventListener('click', () => {
    clearInterval(timer);
    isPaused = true;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    isPaused = false;
    remainingTime = 0;
    updateDisplay(0);
});

function startTimer() {
    timer = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            updateDisplay(remainingTime);
        } else {
            clearInterval(timer);
        }
    }, 1000);
}

function updateDisplay(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    timeDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

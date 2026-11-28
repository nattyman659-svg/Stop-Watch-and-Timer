// Target the header buttons directly
const stopwatchBtn = document.querySelector('#title1 .btn') || document.querySelectorAll('.header .btn')[0];
const timerBtn = document.querySelector('#title2 .btn') || document.querySelectorAll('.header .btn')[1];

// Target the main view containers
const stopwatchContainer = document.querySelector('.stopwatch-container');
const timerContainer = document.querySelector('.timer-container');

// Stopwatch Tab Click
stopwatchBtn.addEventListener('click', () => {
    stopwatchBtn.classList.add('active');
    timerBtn.classList.remove('active');

    stopwatchContainer.style.display = 'flex';
    timerContainer.style.display = 'none';
});

// Timer Tab Click
timerBtn.addEventListener('click', () => {
    timerBtn.classList.add('active');
    stopwatchBtn.classList.remove('active');

    timerContainer.style.display = 'flex';
    stopwatchContainer.style.display = 'none';
});

const circle = document.querySelector('.ring-progress');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;


circle.style.strokeDasharray = `${circumference}`;
circle.style.strokeDashoffset = 0;

let totalTimeInSeconds = 300; 
let timeRemaining = totalTimeInSeconds;

function updateTimerProgress(remainingTime, totalDuration) {
  // Compute percentage remaining (1.0 -> 0.0)
  const fraction = remainingTime / totalDuration;
  
  // Calculate offset (0 = full circle, total circumference = empty circle)
  const offset = circumference - (fraction * circumference);
  circle.style.strokeDashoffset = offset;
}


let studyMinutes = 2;
let breakMinutes = 1;
let minutes = studyMinutes;
let seconds = 0;
let timer = null;
let isBreakTime = false;

window.onload = function () {
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = "00";
    document.getElementById('start').addEventListener('click', startTimer);
    document.getElementById('reset').addEventListener('click', resetTimer);
    updateTab();
};

function startTimer() {
    if (timer !== null) return; // Prevent multiple timers

    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "inline";

    minutes = isBreakTime ? breakMinutes : studyMinutes;
    seconds = 0;

    timer = setInterval(() => {
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds < 10 ? "0" + seconds : seconds;

        if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
            timer = null;
            isBreakTime = !isBreakTime;
            updateTab();
            startTimer(); // Auto-start next session
        } else {
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    isBreakTime = false;
    minutes = studyMinutes;
    seconds = 0;

    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = "00";
    document.getElementById('start').style.display = "inline";
    document.getElementById('reset').style.display = "none";
    updateTab();
}

function updateTab() {
    document.getElementById('study').classList.toggle('active', !isBreakTime);
    document.getElementById('break').classList.toggle('active', isBreakTime);
}

 

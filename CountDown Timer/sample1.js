let timer;

function startCountdown() {
    let timeInput = document.getElementById('timeInput').value;
    let timerDisplay = document.getElementById('timerDisplay');
    
    if (timer) {
        clearInterval(timer);
    }

    let timeLeft = parseInt(timeInput);

    timerDisplay.textContent = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up!");
        }
    }, 1000);
}
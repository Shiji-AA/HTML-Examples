let btn = document.getElementById("btn");
let timerDisplay = document.getElementById('timerDisplay');

function startCountDown(){
    let timeLeft = Number(document.getElementById('timeInput').value);
    timerDisplay.innerHTML = timeLeft;
    let timer = setInterval(function() {
        timeLeft--;
        timerDisplay.innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up!");
        }
    }, 1000);
}
btn.addEventListener("click",startCountDown)
    
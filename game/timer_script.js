let timerID;
const time = 30000;

function startTimer() {
    timerID = setInterval(fireGameOver, time);
    // How to update timer in dom element so its a countdown timer on screen
}

function resetTimer() {
    clearInterval(timerID);
    return "00";
}
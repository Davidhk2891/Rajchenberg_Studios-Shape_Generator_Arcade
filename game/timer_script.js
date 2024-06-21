let timerID;
const interval = 1000;
const timeCeiling = 30;
let time = timeCeiling;

function startTimer(domElement) {
    
    timerID = setInterval(function() {
        startCountDown(domElement);
    }, interval);
    // How to update timer in dom element so its a countdown timer on screen
}

function startCountDown(domElement) {
    
    // Decrement countdown value
    time--;
    testInput(`Time left: ${time}`);
    domElement.textContent = time;
    if (time <= 0) {
        clearInterval(timerID);
        fireGameOver();
    }
}
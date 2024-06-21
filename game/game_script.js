const sgGameBoardCont = document.querySelector('#sg-game-board-cont');
const sgGameBoardTimerPointsCont = document.querySelector('#sg-game-board-timer-points-cont');
const sgGameBoardContentCont = document.querySelector('#sg-game-board-content-cont');

let isGameOn = false;
let computerPlayed = false;

function showRegularBoard() {
    sgRegularBoard.style.display = "block";
}

function hideRegularBoard() {
    sgRegularBoard.style.display = "none";
}

function showGameBoard() {
    sgGameBoardCont.style.display = "block";
}

function hideGameBoard() {
    sgGameBoardCont.style.display = "none";
}

function drawTimerAndPointsBoard() {
    sgGameBoardTimerPointsCont.innerHTML = makeTimerAndPointsBoard();
}

function drawContentBoard() {
    sgGameBoardContentCont.innerHTML = makeContentBoard();
}

function loadBoardAssets() {
    loadJSGeneratedHTMLRes();
}

function updatePointsInBoard() {
    sgPoints.innerText = updatePoints();
}

function drawFreshInstruction() {
    sgInstruction.innerHTML = formattedCurrentInstruction;
}

function drawFreshInstructionSample() {
    sgInstructionSample.innerHTML = stackComputerShape("<br>");
    sgInstructionSample.style.color = computerColor;
    sgInstructionSample.style.fontSize = computerCharSize;
}

function drawUserResult() {
    sgUserResult.innerHTML = stackPlayerShape("<br>");
    sgUserResult.style.color = playerColor;
    sgUserResult.style.fontSize = playerCharSize;
}

function drawResultCheck() {

    const checkedResult = () => {
        sgResultChecker.innerText = roundWon ?
        `CORRECT ${String.fromCodePoint(0x2705)} +4 time | +10 points` :
        `INCORRECT ${String.fromCodePoint(0x274C)} -1 time | -5 points`;
    }

    setTimeout(checkedResult, 500);
}

function resetSgHUD() {

    sgFlip.checked = false;
    sgChar.value = "#";
    sgCharSize.value = 12;
    sgNumRows.value = 10;
    sgShape.value = "pyramid";
    sgColor.value = "grey";
}

function clearResultCheck() {
    sgResultChecker.innerText = "";
}

function clearGameBoard() {

    clearComputerShape();

    clearPlayerShape();
    clearResultCheck();
    sgResultChecker.innerText = "-";
}

function fireGameOver() {

    resetSgHUD()
    sgPoints.innerText = resetPoints();
    clearInterval(timerID);
    time = timeCeiling;
    sgTimer.innerText = "00";
    sgResultChecker.innerText = "-";
    var result = confirm("GAME OVER\n\nPlay again?");
    if (result) {
        play();
    }
}

function startGameTimer() {
    startTimer(sgTimer);
    // sgTimer.innerText = 
}

function changePlayBtnColors() {
    if (isGameOn) {
        sgPlay.style.color = "white";
        sgPlay.style.backgroundColor = "red";
    } else {
        sgPlay.style.color = "black";
        sgPlay.style.backgroundColor = "#E9E9ED";
    }
}

function checkRound() {

    //Draw user result
    drawUserResult();

    // Compare user result against instruction
    compareInput();

    // Draw round result
    drawResultCheck();

    // Draw next round after 1.5 seconds
    setTimeout(() => {

        // Update points
        updatePointsInBoard();

        // Clear game board
        clearGameBoard();

        // Check if game over
        if (points <= 0)
            fireGameOver();

        // Build new instruction and sample
        buildInstruction();
        buildComputerInstructionSample();

        // Draw fresh instruction and sample
        drawFreshInstruction();
        loadJSGeneratedHTMLRes();
        drawFreshInstructionSample();
    }, 1200);
}

function play() {

    // Hide regular board
    hideRegularBoard();

    // Show game board base
    showGameBoard();

    // Game switches on
    isGameOn = true;

    // Change Play button colors
    changePlayBtnColors();

    // Draw HUD for points and timer
    drawTimerAndPointsBoard();

    // Draw content board
    drawContentBoard();

    // Load JS-generated HTML resources
    loadBoardAssets();

    // Computer builds random instruction with its shape
    buildInstruction();
    buildComputerInstructionSample();

    // Game draws computer's instruction and shape into board   
    drawFreshInstruction();
    drawFreshInstructionSample();

    // Tell the game the computer made her move
    computerPlayed = true;

    // Start game timer
    startGameTimer();
}
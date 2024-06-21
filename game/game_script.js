const sgGameBoardCont = document.querySelector('#sg-game-board-cont');
const sgGameBoardTimerPointsCont = document.querySelector('#sg-game-board-timer-points-cont');
const sgGameBoardContentCont = document.querySelector('#sg-game-board-content-cont');

let isGameOn = false;
let computerPlayed = false;

function hideRegularBoard() {
    sgRegularBoard.style.display = "none";
}

function showGameBoard() {
    sgGameBoardCont.style.display = "block";
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

    alert("GAME OVER");
    resetSgHUD()
    sgPoints.innerText = resetPoints();
    sgTimer.innerText = resetTimer();
    sgResultChecker.innerText = "-";
}

function startGameTimer() {
    startTimer();
    sgTimer.innerText = 
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
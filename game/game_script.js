const sgGameBoardCont = document.querySelector('#sg-game-board-cont');
const sgGameBoardTimerPointsCont = document.querySelector('#sg-game-board-timer-points-cont');
const sgGameBoardContentCont = document.querySelector('#sg-game-board-content-cont');
let sgBoardContentCheckBtn;
let sgInstruction;
let sgInstructionSample;
let sgUserResult;
let sgResultChecker;
let sgPoints;
let sgTimer;

let isGameOn = false;
let computerPlayed = false;
let playerPlayed = false;
let points = 0;

function drawBoardTimerAndPoints() {
    
    sgGameBoardTimerPointsCont.innerHTML = `
        <h2 style="
            margin-top: 15px; 
            text-align: center;
            letter-spacing: 4px;">
                SHAPE GENERATOR <span style="color: orange;">ARCADE</span>
        </h2>
        <hr>
        <div 
            id="timer-points-container" 
            style="
                border: 1px dotted black;
                border-radius: 10px;
                padding: 10px;
                margin: 15px auto 0 auto;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;">

            <div 
                id="timer-container"
                style="
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;">
                        <p id="sg-timer-title">TIME</p>
                        <p id="sg-timer">00</p>
            </div>

            <div 
                id="points-container"
                style="
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;">
                        <p id="sg-points-title">POINTS</p>
                        <p id="sg-points">0</p>
            </div>

        </div>
    `
}

function drawBoardContent() {

    sgGameBoardContentCont.innerHTML = `
        <div 
            id="sg-content-cont"
            style="
                width: 600px;
                height: 400px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 15px;                
                margin: 15px auto;">

                    <div 
                        id="sg-instruction-side-cont"
                        style="
                            width: 100%;
                            height: 100%;
                            border: 1px dotted black;
                            border-radius: 10px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-evenly;
                            align-items: center;">

                            <p 
                                id="sg-instruction"
                                style="
                                    font-size: 0.7rem;
                                    text-align: center;
                                    padding: 6px;">
                            </p>

                            <p
                                id="sg-instruction-sample"
                                style="                                   
                                    margin: 0 auto;
                                    height: 200px;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    text-align: center;">                            
                            </p>

                            <button 
                                id="sg-check"
                                style="
                                    border: 0;
                                    padding: 10px;
                                    margin-top: 15px;
                                    width: 30%;"
                                onclick="checkRound()">
                                        Check
                            </button>

                    </div>

                    <div 
                        id="sg-result-side-cont"
                        style="
                            width: 100%;
                            height: 100%;
                            border: 1px dotted black;
                            border-radius: 10px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-evenly;
                            align-items: center;">

                            <p 
                                id="sg-dumb-instruction"
                                style="
                                    font-size: 0.7rem;
                                    text-align: center;
                                    padding: 6px;"
                                    color: transparent;>
                                        _
                            </p>

                            <p
                                id="sg-user-result"
                                style="                                                                  
                                    margin: 0 auto;
                                    height: 200px;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    text-align: center;">                            
                            </p>

                            <p 
                                id="sg-result-checker"
                                style="
                                    border: 0;
                                    padding: 10px;
                                    margin-top: 15px;
                                    width: 30%;
                                    style: bold;
                                    width: fit-content;">   
                                        - 
                            </p>

                    </div>

            </div>
        </div>`
}

function gainPoints() {
    return points + 10;
}

function losePoints() {
    return points - 5;
}

function resetPoints() {
    points = 0;
    return points;
}

function loadJSGeneratedHTMLRes() {
    sgBoardContentCheckBtn = document.getElementById('sg-check');
    sgInstructionSample = document.getElementById('sg-instruction-sample');
    sgUserResult = document.getElementById('sg-user-result');
    sgResultChecker = document.getElementById('sg-result-checker');
    sgTimer = document.getElementById('sg-timer');
    sgPoints = document.getElementById('sg-points');
    sgInstruction = document.getElementById('sg-instruction');
}

function hideRegularBoard() {
    sgRegularBoard.style.display = "none";
}

function showGameBoard() {
    sgGameBoardCont.style.display = "block";
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

function drawFreshTimerAndPoints() {

    points = roundWon ? gainPoints() : losePoints();   
    sgPoints.innerText = points;
}

function fireGameOver() {

    alert("GAME OVER");
    resetSgHUD()
    sgPoints.innerText = resetPoints();
    sgResultChecker.innerText = "-";
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
        drawFreshTimerAndPoints();

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
    }, 1500);
}

function play() {

    // Hide regular board
    hideRegularBoard();

    // Show game board base
    showGameBoard();

    // Game switches on
    isGameOn = true;

    // Draw HUD for points and timer
    drawBoardTimerAndPoints();

    // Draw content board
    drawBoardContent();

    // Load JS-generated HTML resources
    loadJSGeneratedHTMLRes();

    // Computer builds random instruction with its shape
    buildInstruction();
    buildComputerInstructionSample();

    // Game draws computer's instruction and shape into board   
    drawFreshInstruction();
    drawFreshInstructionSample();

    // Tell the game the computer made her move
    computerPlayed = true;
}
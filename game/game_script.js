const sgGameBoardCont = document.querySelector('#sg-game-board-cont');
const sgGameBoardTimerPointsCont = document.querySelector('#sg-game-board-timer-points-cont');
const sgGameBoardContentCont = document.querySelector('#sg-game-board-content-cont');
let sgBoardContentCheckBtn;
let sgInstructionSample;
let sgUserResult;
let sgResultChecker;

let isGameOn = false;
let computerPlayed = false;
let playerPlayed = false;

function drawBoardTimerAndPoints() {
    hideRegularBoard();
    showGameBoard();
    return `
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
                        <p id="timer-title">TIME</p>
                        <p id="timer">00</p>
            </div>

            <div 
                id="points-container"
                style="
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;">
                        <p id="points-title">POINTS</p>
                        <p id="points">0</p>
            </div>

        </div>
    `
}

function drawBoardContent(uColor, uFont) {

    return `
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
                                
                                        ${formattedCurrentInstruction}
                            </p>

                            <p
                                id="sg-instruction-sample"
                                style="
                                    font-size: ${currentInstruction[5]};
                                    color: ${currentInstruction[2]};                                    
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
                                    font-size: ${uFont};
                                    color: ${uColor};                                    
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
                                    style: bold;">                                        
                            </p>

                    </div>

            </div>
        </div>`
}

function loadJSGeneratedHTMLRes() {
    sgBoardContentCheckBtn = document.getElementById('sg-check');
    sgInstructionSample = document.getElementById('sg-instruction-sample');
    sgUserResult = document.getElementById('sg-user-result');
    sgResultChecker = document.getElementById('sg-result-checker');
}

function hideRegularBoard() {
    sgRegularBoard.style.display = "none";
}

function showGameBoard() {
    sgGameBoardCont.style.display = "block";
}

function drawFreshInstruction() {
    sgGameBoardContentCont.innerHTML = drawBoardContent(currentInstruction);
}

function drawFreshInstructionSample() {
    sgInstructionSample.innerHTML = stackComputerShape("<br>");
}

function drawUserResult() {
    sgUserResult.innerHTML = stackPlayerShape("<br>");
}

function drawResultCheck() {
    sgResultChecker.innerText = roundWon ? "CORRECT" : "INCORRECT";
}

function drawFreshTimerAndPoints() {
    sgGameBoardTimerPointsCont.innerHTML = drawBoardTimerAndPoints();
}

function checkRound() {

    //Draw user result
    drawUserResult();

    // compareInput();

    // buildInstruction();
    // buildComputerInstructionSample();

    // drawFreshTimerAndPoints();

    // drawFreshInstruction();
    // loadJSGeneratedHTMLRes();
    // drawFreshInstructionSample();

    //
    // drawUserResult();
}

function play() {

    // Game switches on
    isGameOn = true;

    // Computer builds random instruction with its shape
    buildInstruction();
    buildComputerInstructionSample();

    // Game draws timer and points HUD
    drawFreshTimerAndPoints();

    // Game draws computer's instruction and shape into board   
    drawFreshInstruction();
    loadJSGeneratedHTMLRes();
    drawFreshInstructionSample();
    computerPlayed = true;
}
const sgGameBoardCont = document.querySelector('#sg-game-board-cont');
const sgGameBoardTimerPointsCont = document.querySelector('#sg-game-board-timer-points-cont');
const sgGameBoardContentCont = document.querySelector('#sg-game-board-content-cont');
let sgBoardContentCheckBtn;
let sgInstructionSample;
let sgUserResult;
let sgResultChecker;

let isGameOn = false;
let roundWon = false;
let randomInsString;
let randomInsArr;
let currentInstruction;

let gameFlip;
let gameFlipDir = "";
let gameChar = "";
let gameCharSize = "";
let gameColor = "";
let gameCount = "";
let gameShape = "";
let gameResult = "";
let gameRows = [];
const gameSpace = " ";

let playerFlip;
let playerFlipDir = "";
let playerChar = "";
let playerCharSize = "";
let playerColor = "";
let playerShape = "";
let playerResult = "";
let playerRows = [];
let playerSpace = " ";

const flipArr = ["fliped", "straight"];
const charArr = ["§", "±", "!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "~", ">"];
const charSizeArr = ["4px", "5px","6px","7px","8px","9px","10px","11px","12px","13px","14px","15px","16px"];
const numRowsArr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];    
const shapeArr = ["pyramid", "square", "line"];
const colorArr = ["grey", "black", "red", "green", "purple", "orange", "pink"];

function makeGameRow(rowNum) {

    let selectedShape;
    switch (gameShape) {
        case "pyramid":
            selectedShape = gameSpace.repeat(gameCount - rowNum) + gameChar.repeat(rowNum) + gameSpace.repeat(gameCount - rowNum);
            break;
        case "square":
            selectedShape = gameChar.repeat(gameCount * 2);
            break;
        case "line":
            selectedShape = gameSpace.repeat(gameCount / 2) + gameChar + gameSpace.repeat(gameCount / 2);
            break;
    }
    return selectedShape;
}

function fillGameShape() {
    
    for (let i = 1; i <= gameCount; i ++) {
        if (!gameFlip)
            gameRows.push(makeGameRow(i));
        else
            gameRows.unshift(makeGameRow(i));
    }
    return gameRows;
}

function stackInstructionShape() {
    clearGameShape();
    for (const row of fillGameShape()) {
        gameResult = gameResult + lineBreakType + row;
    }
}

function stackPlayerShape() {
    clearGameShape();
    for (const row of fillGameShape()) {
        gameResult = gameResult + lineBreakType + row;
    }
}

function printGameShape(lineBreakType) {

    clearGameShape();
    for (const row of fillGameShape()) {
        gameResult = gameResult + lineBreakType + row;
    }

    return gameResult;
}

function clearGameShape() {

    gameResult = "";
    gameRows.length = 0;
    sgInstructionSample.innerHTML = "";
}

function clearAllShapeAssets() {

    gameFlip = false;
    gameFlipDir = "";

    gameCount = 0;
    gameColor = "";
    gameShape = "";
    gameChar = "";
    gameCharSize = "";
}

function hideRegularBoard() {
    sgRegularBoard.style.display = "none";
}

function showGameBoard() {
    sgGameBoardCont.style.display = "block";
}

function buildInstruction() {

    const randomFlip = flipArr[Math.floor(Math.random() * flipArr.length)];
    const randomChar = charArr[Math.floor(Math.random() * charArr.length)];
    const randomCharSize = charSizeArr[Math.floor(Math.random() * charSizeArr.length)];
    const randomNumRows = numRowsArr[Math.floor(Math.random() * numRowsArr.length)];
    const randomShape = shapeArr[Math.floor(Math.random() * shapeArr.length)];
    const randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];

    currentInstruction = `${randomFlip} ${randomNumRows} ${randomColor} ${randomShape} ${randomChar} ${randomCharSize}`.split(" ");
}

function buildInstructionSample() {

    gameFlip = currentInstruction[0] == "fliped" ? true : false;
    gameFlipDir = currentInstruction[0];

    gameCount = currentInstruction[1];

    gameColor = currentInstruction[2];

    gameShape = currentInstruction[3];

    gameChar = currentInstruction[4];

    gameCharSize = currentInstruction[5];
}

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

function drawBoardContent(instruction, uColor, uFont) {

    let currentInstruction = "Make a " + instruction[0] + ", " + instruction[1] + "-row, " +
    instruction[2] + " " + instruction[3] + " made of " + instruction[4] + " of size " + instruction[5];

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
                                
                                        ${currentInstruction}
                            </p>

                            <p
                                id="sg-instruction-sample"
                                style="
                                    font-size: ${instruction[5]};
                                    color: ${instruction[2]};                                    
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

function drawFreshInstruction() {
    sgGameBoardContentCont.innerHTML = drawBoardContent(currentInstruction);
}

function drawFreshInstructionSample() {
    sgInstructionSample.innerHTML = printGameShape("<br>");
    clearAllShapeAssets();
}

function drawUserResult() {
    sgUserResult.innerText = printGameShape("<br>");
}

function drawResultCheck() {
    sgResultChecker.innerText = roundWon ? "CORRECT" : "INCORRECT";
}

function drawFreshTimerAndPoints() {
    sgGameBoardTimerPointsCont.innerHTML = drawBoardTimerAndPoints();
}

function loadJSGeneratedHTMLRes() {
    sgBoardContentCheckBtn = document.getElementById('sg-check');
    sgInstructionSample = document.getElementById('sg-instruction-sample');
    sgUserResult = document.getElementById('sg-user-result');
    sgResultChecker = document.getElementById('sg-result-checker');
} 

function compareInput() {
   
   if (flipDir == currentInstruction[0] && count == currentInstruction[1]
    && color == currentInstruction[2] && shape == currentInstruction[3]
    && char == currentInstruction[4] && charSize == currentInstruction[5]) {

        testInput(
            "Correct" + "\n" +
            flipDir + " and " + currentInstruction[0] + "\n" +
            count + " and " + currentInstruction[1] + "\n" +
            color + " and " + currentInstruction[2] + "\n" +
            shape + " and " + currentInstruction[3] + "\n" +
            char + " and " + currentInstruction[4] + "\n" +
            charSize + " and " + currentInstruction[5] + "\n"
        );
        roundWon = true;
   } else {

        testInput(
            "Incorrect" + "\n" +
            flipDir + " and " + currentInstruction[0] + "\n" +
            count + " and " + currentInstruction[1] + "\n" +
            color + " and " + currentInstruction[2] + "\n" +
            shape + " and " + currentInstruction[3] + "\n" +
            char + " and " + currentInstruction[4] + "\n" +
            charSize + " and " + currentInstruction[5] + "\n"
        );
        roundWon = false;
   }
}

function checkRound() {
    compareInput();

    buildInstruction();
    buildInstructionSample();

    drawFreshTimerAndPoints();

    drawFreshInstruction();
    loadJSGeneratedHTMLRes();
    drawFreshInstructionSample();
    drawUserResult();
}

function play() {

    isGameOn = true;

    buildInstruction();
    buildInstructionSample();

    drawFreshTimerAndPoints();

    drawFreshInstruction();
    loadJSGeneratedHTMLRes();
    drawFreshInstructionSample();
}
function buildInstruction() {
    const flipArr = ["fliped", "straight"];
    const charArr = ["§", "±", "!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "~", ">"];
    const charSizeArr = ["4px", "5px","6px","7px","8px","9px","10px","11px","12px","13px","14px","15px"
        ,"16px","17px","18px","19px","20px","21px","22px","23px","24px","25px","26px","27px","28px"
        ,"29px","30px","31px","32px","33px","34px"];
    const numRowsArr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 
        23, 24, 25, 26, 27, 28, 29, 30];    
    const shapeArr = ["pyramid", "square", "line"];
    const colorArr = ["grey", "black", "red", "green", "purple", "orange", "pink"];

    const randomFlip = flipArr[Math.floor(Math.random() * flipArr.length)];
    const randomChar = charArr[Math.floor(Math.random() * charArr.length)];
    const randomCharSize = charSizeArr[Math.floor(Math.random() * charSizeArr.length)];
    const randomNumRows = numRowsArr[Math.floor(Math.random() * numRowsArr.length)];
    const randomShape = shapeArr[Math.floor(Math.random() * shapeArr.length)];
    const randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];

    currentInstruction = `${randomFlip} ${randomNumRows} ${randomColor} ${randomShape} ${randomChar} ${randomCharSize}`.split(" ");
}

function hideRegularBoard() {
    sgRegularBoard.style.display = "none";
}

function showGameBoard() {
    sgGameBoardCont.style.display = "block";
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

// Fliped 23-row blue line made of % of size 10

// randomInsArr = `${randomFlip} ${randomNumRows} ${randomColor} ${randomShape}
// ${randomChar} ${randomCharSize}`.split(" ");

function drawBoardContent(instruction) {

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
                            border-radius: 10px;">



                    </div>

            </div>
        </div>`
}

function loadJSGeneratedHTMLRes() {
    sgBoardContentCheckBtn = document.getElementById('#sg-check');
} 

function compareInput() {

    /* 
    randomInsString = `${randomFlip} ${randomNumRows}-row ${randomColor}
     ${randomShape} made of ${randomChar} of size ${randomCharSize}`;
    */
   
   if (flipDir == currentInstruction[0] && count == currentInstruction[1]
    && color == currentInstruction[2] && shape == currentInstruction[3]
    && char == currentInstruction[4] && charSize == currentInstruction[5]) {

        testInput("Corrrect");
        testInput(
            flipDir + " and " + currentInstruction[0] + "\n" +
            count + " and " + currentInstruction[1] + "\n" +
            color + " and " + currentInstruction[2] + "\n" +
            shape + " and " + currentInstruction[3] + "\n" +
            char + " and " + currentInstruction[4] + "\n" +
            charSize + " and " + currentInstruction[5] + "\n"
        );
   } else {

        testInput("Incorrect");
        testInput(
            flipDir + " and " + currentInstruction[0] + "\n" +
            count + " and " + currentInstruction[1] + "\n" +
            color + " and " + currentInstruction[2] + "\n" +
            shape + " and " + currentInstruction[3] + "\n" +
            char + " and " + currentInstruction[4] + "\n" +
            charSize + " and " + currentInstruction[5] + "\n"
        );
   }
}

function checkRound() {
    compareInput();
}

function play() {

    buildInstruction();
    sgGameBoardTimerPointsCont.innerHTML = drawBoardTimerAndPoints();
    sgGameBoardContentCont.innerHTML = drawBoardContent(currentInstruction);
    loadJSGeneratedHTMLRes();
}
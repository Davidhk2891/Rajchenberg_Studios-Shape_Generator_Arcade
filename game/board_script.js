let sgBoardContentCheckBtn;
let sgInstruction;
let sgInstructionSample;
let sgUserResult;
let sgResultChecker;
let sgPoints;
let sgTimer;

function makeTimerAndPointsBoard() {
    
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

function makeContentBoard() {

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

function loadJSGeneratedHTMLRes() {
    sgBoardContentCheckBtn = document.getElementById('sg-check');
    sgInstructionSample = document.getElementById('sg-instruction-sample');
    sgUserResult = document.getElementById('sg-user-result');
    sgResultChecker = document.getElementById('sg-result-checker');
    sgTimer = document.getElementById('sg-timer');
    sgPoints = document.getElementById('sg-points');
    sgInstruction = document.getElementById('sg-instruction');
}
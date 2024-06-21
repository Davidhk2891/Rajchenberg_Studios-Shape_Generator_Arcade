let computerFlip;
let computerFlipDir = "";
let computerChar = "";
let computerCharSize = "";
let computerColor = "";
let computerCount = "";
let computerShape = "";
let computerResult = "";
let computerRows = [];
const computerSpace = " ";

function makeComputerRow(rowNum) {

    let selectedShape;
    switch (computerShape) {
        case "pyramid":
            selectedShape = computerSpace.repeat(computerCount - rowNum) + computerChar.repeat(rowNum) + computerSpace.repeat(computerCount - rowNum);
            break;
        case "square":
            selectedShape = computerChar.repeat(computerCount * 2);
            break;
        case "line":
            selectedShape = computerSpace.repeat(computerCount / 2) + computerChar + computerSpace.repeat(computerCount / 2);
            break;
    }
    return selectedShape;
}

function fillComputerShape() {
    
    for (let i = 1; i <= computerCount; i ++) {
        if (!computerFlip)
            computerRows.push(makeComputerRow(i));
        else
            computerRows.unshift(makeComputerRow(i));
    }
    return computerRows;
}

function stackComputerShape(lineBreakType) {

    clearComputerShape();
    for (const row of fillComputerShape()) {
        computerResult = computerResult + lineBreakType + row;
    }

    return computerResult;
}

function clearComputerShape() {

    computerResult = "";
    computerRows.length = 0;
    sgInstructionSample.innerHTML = "";
}

function buildComputerInstructionSample() {

    computerFlip = currentInstruction[0] == "fliped" ? true : false;
    computerFlipDir = currentInstruction[0];

    computerCount = currentInstruction[1];

    computerColor = currentInstruction[2];

    computerShape = currentInstruction[3];

    computerChar = currentInstruction[4];

    computerCharSize = currentInstruction[5];
}
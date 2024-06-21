let playerFlip = false;
let playerFlipDir = "straight";
let playerChar = "#";
let playerCharSize = "12px";
let playerColor = "grey";
let playerCount = 10;
let playerShape = "pyramid";
let playerResult = "";
let playerRows = [];
const playerSpace = " ";

function makePlayerRow(rowNum) {

    let selectedShape;
    switch (playerShape) {
        case "pyramid":
            selectedShape = playerSpace.repeat(playerCount - rowNum) + playerChar.repeat(rowNum) + playerSpace.repeat(playerCount - rowNum);
            break;
        case "square":
            selectedShape = playerChar.repeat(playerCount * 2);
            break;
        case "line":
            selectedShape = playerSpace.repeat(playerCount / 2) + playerChar + playerSpace.repeat(playerCount / 2);
            break;
    }
    return selectedShape;
}

function fillPlayerShape() {
    
    for (let i = 1; i <= playerCount; i ++) {
        if (!playerFlip)
            playerRows.push(makePlayerRow(i));
        else
            playerRows.unshift(makePlayerRow(i));
    }
    return playerRows;
}

function stackPlayerShape(lineBreakType) {

    clearPlayerShape();
    for (const row of fillPlayerShape()) {
        playerResult = playerResult + lineBreakType + row;
    }

    return playerResult;
}

function clearPlayerShape() {

    playerResult = "";
    playerRows.length = 0;
    sgUserResult.innerHTML = "";
}
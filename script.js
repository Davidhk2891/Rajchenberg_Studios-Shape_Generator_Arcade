const sgFlip = document.querySelector('#sg-flip');
const sgChar = document.querySelector('#sg-char');
const sgCharSize = document.querySelector('#sg-char-size');
const sgNumRows = document.querySelector('#sg-num-rows');
const sgShape = document.querySelector('#sg-shape');
const sgColor = document.querySelector('#sg-color');
const sgGenerate = document.querySelector('#sg-generate');
const sgClear = document.querySelector('#sg-clear');
const sgReset = document.querySelector('#sg-reset');
const sgPlay =  document.querySelector('#sg-play');
const sgRegularBoard = document.querySelector('#sg-regular-board');

let rows = [];
let count = 10;
let flip = false;
let flipDir = "straight";
let char = "#";
let charSize = "12px";
let color = "grey";
let shape = "pyramid";
let result = "";
const space = " ";

function makeRow(rowNum) {

    let selectedShape;
    switch (shape) {
        case "pyramid":
            selectedShape = space.repeat(count - rowNum) + char.repeat(rowNum) + space.repeat(count - rowNum);
            break;
        case "square":
            selectedShape = char.repeat(count * 2);
            break;
        case "line":
            selectedShape = space.repeat(count / 2) + char + space.repeat(count / 2);
            break;
    }
    return selectedShape;
}

function fillShape() {
    
    for (let i = 1; i <= count; i ++) {
        if (!flip)
            rows.push(makeRow(i));
        else
            rows.unshift(makeRow(i));
    }
    return rows;
}

function stackShape() {

    clear();
    for (const row of fillShape()) {
        result += "\n" + row;
    }

    return result;
}

function printShape() {
    
    sgRegularBoard.innerText = stackShape();
}

function printShapeForFeature() {

    if (!sgRegularBoard.innerText == "" && !sgRegularBoard.innerText.includes("Click on 'Generate' or 'Play'"))
        sgRegularBoard.innerText = stackShape();
}

function clear() {
    
    rows.length = 0;
    result = "";
    sgRegularBoard.innerText = `Click on 'Generate' or 'Play' ${String.fromCodePoint(0x1F60E)}`;
}

function reset() {

    clear();

    // Regular program
    flip = false;
    sgFlip.checked = false;
    char = "#"
    sgChar.value = "#";
    charSize = "12px";
    sgCharSize.value = 12;
    count = 10;
    sgNumRows.value = 10;
    shape = "pyramid";
    sgShape.value = "pyramid";
    color = "grey";
    sgColor.value = "grey";
    sgRegularBoard.style.color = color;
}

// Click event listeners
sgGenerate.onclick = printShape;
sgClear.onclick = clear;
sgReset.onclick = reset;
sgPlay.onclick = play;

// Other event listeners
sgFlip.addEventListener('change', function(e) {

    if (e.target.checked) {
        flip = true;
        flipDir = "fliped";
        computerFlip = true;
        computerFlipDir = "fliped";
    } else {
        flip = false;
        flip = "straight";
        computerFlip = false;
        computerFlipDir = "straight";
    }
    
    if (!isGameOn)
        printShapeForFeature();
    if (computerPlayed) {
        if (e.target.checked) {
            playerFlip = true;
            playerFlipDir = "fliped";
        } else {
            playerFlip = false;
            playerFlipDir = "straight";
        }
    }
});

sgChar.addEventListener('change', function(e) {

    char = e.target.value;
    computerChar = e.target.value;
    if (!isGameOn)
        printShapeForFeature();
    if (computerPlayed)
        playerChar = e.target.value;
});

sgCharSize.addEventListener('change', function (e) {
    
    charSize = e.target.value + "px";
    sgRegularBoard.style.fontSize = charSize;  
    
    computerCharSize = e.target.value + "px";
    if (!isGameOn)
        printShapeForFeature();
    if (computerPlayed)
        playerCharSize = e.target.value + "px";
}); 

sgNumRows.addEventListener('change', function(e) {

    count = e.target.value;
    computerCount = e.target.value;
    if (!isGameOn)
        printShapeForFeature();
    if (computerPlayed)
        playerCount = e.target.value;
});

sgShape.addEventListener('change', function(e) {

    shape = e.target.value;
    computerShape = e.target.value;
    if (!isGameOn)
        printShapeForFeature();
    if (computerPlayed) 
        playerShape = e.target.value;
});

sgColor.addEventListener('change', function(e) {
    
    color = e.target.value;
    sgRegularBoard.style.color = color;

    computerColor = e.target.value;
    if (!isGameOn)
        printShapeForFeature();
    if (computerPlayed)
        playerColor = e.target.value;
});

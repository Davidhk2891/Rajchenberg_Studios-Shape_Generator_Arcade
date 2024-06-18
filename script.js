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

let count = 10;
let rows = [];
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
        gameFlip = true;
        gameFlipDir = "fliped";
    } else {
        flip = false;
        flip = "straight";
        gameFlip = false;
        gameFlipDir = "straight";
    }
    
    if (!isGameOn)
        printShapeForFeature();
});

sgChar.addEventListener('change', function(e) {

    char = e.target.value;
    gameChar = e.target.value;
    if (!isGameOn)
        printShapeForFeature();
});

sgCharSize.addEventListener('change', function (e) {
    
    charSize = e.target.value + "px";
    sgRegularBoard.style.fontSize = charSize;  
    
    gameCharSize = e.target.value + "px";
    if (!isGameOn)
        printShapeForFeature();
}); 

sgNumRows.addEventListener('change', function(e) {

    count = e.target.value;
    gameCount = e.target.value;
    if (!isGameOn)
        printShapeForFeature();
});

sgShape.addEventListener('change', function(e) {

    shape = e.target.value;
    gameShape = e.target.value;
    if (!isGameOn)
        printShapeForFeature();
});

sgColor.addEventListener('change', function(e) {
    
    color = e.target.value;
    sgRegularBoard.style.color = color;

    gameColor = e.target.value;
    if (!isGameOn)
        printShapeForFeature();
});

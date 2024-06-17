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
const sgGameBoard = document.querySelector('#sg-game-board');

let count = 10;
let rows = [];
let flip = false;
let char = "#";
let charSize = ""
let result = "";
let color = "";
let shape = "pyramid";
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
    charSize = "12";
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

    flip = e.target.checked ? true : false;
    printShapeForFeature();
});

sgChar.addEventListener('change', function(e) {

    char = e.target.value;
    printShapeForFeature();
});

sgCharSize.addEventListener('change', function (e) {
    
    charSize = e.target.value;
    sgRegularBoard.style.fontSize = charSize + "px";    
    printShapeForFeature();
}); 

sgNumRows.addEventListener('change', function(e) {

    count = e.target.value;
    printShapeForFeature();
});

sgShape.addEventListener('change', function(e) {

    shape = e.target.value;
    printShapeForFeature();
});

sgColor.addEventListener('change', function(e) {
    
    sgRegularBoard.style.color = e.target.value;
    printShapeForFeature()
    });

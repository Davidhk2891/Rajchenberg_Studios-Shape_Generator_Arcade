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

let count = 20;
let rows = [];
let color = "grey";
let flip = false;
let char = "#";
let result = "";
const space = " ";

function makeRow(rowNum) {
    
    return space.repeat(count - rowNum) + char.repeat(rowNum) + space.repeat(count - rowNum);
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

    if (!sgRegularBoard == "" && !sgRegularBoard.innerText.includes("Click on 'Generate' or 'Play'"))
        sgRegularBoard.innerText = stackShape();
}

function clear() {
    
    rows.length = 0;
    result = "";
    sgRegularBoard.innerText = "";
}

function reset() {

}

function play() {

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

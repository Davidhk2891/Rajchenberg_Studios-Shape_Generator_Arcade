const flipArr = ["fliped", "straight"];
const charArr = ["§", "±", "!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "~", ">"];
const charSizeArr = ["4px", "5px","6px","7px","8px","9px","10px","11px","12px","13px","14px","15px","16px"];
const numRowsArr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];    
const shapeArr = ["pyramid", "square", "line"];
const colorArr = ["grey", "black", "red", "green", "purple", "orange", "pink"];

let currentInstruction;
let formattedCurrentInstruction;

function buildInstruction() {

    const randomFlip = flipArr[Math.floor(Math.random() * flipArr.length)];
    const randomChar = charArr[Math.floor(Math.random() * charArr.length)];
    const randomCharSize = charSizeArr[Math.floor(Math.random() * charSizeArr.length)];
    const randomNumRows = numRowsArr[Math.floor(Math.random() * numRowsArr.length)];
    const randomShape = shapeArr[Math.floor(Math.random() * shapeArr.length)];
    const randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];

    currentInstruction = `${randomFlip} ${randomNumRows} ${randomColor} ${randomShape} ${randomChar} ${randomCharSize}`.split(" ");
    
    formattedCurrentInstruction = "Make a " + currentInstruction[0] + ", " + currentInstruction[1] + "-row, " +
    currentInstruction[2] + " " + currentInstruction[3] + " made of " + currentInstruction[4] + " of size " + currentInstruction[5];
}
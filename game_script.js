function buildInstruction() {
    const flipArr = ["fliped", "straight"];
    const charArr = ["§", "±", "!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "~", ">"];
    const charSizeArr = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 
        23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34];
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

    // Fliped 23-row blue line made of % of size 10
    randomInsString = `${randomFlip} ${randomNumRows}-row ${randomColor} ${randomShape} made of ${randomChar} of size ${randomCharSize}`;
    randomInsArr = `${randomFlip} ${randomNumRows} ${randomColor} ${randomShape} ${randomChar} ${randomCharSize}`.split(" ");
    return {
        randomInsString: randomInsString,
        randomInsArr: randomInsArr
    };
}

function play() {
    testInput(buildInstruction().randomInsString);
}
let roundWon = false;

function compareInput() {
   
    if (flipDir == currentInstruction[0] && count == currentInstruction[1]
     && color == currentInstruction[2] && shape == currentInstruction[3]
     && char == currentInstruction[4] && charSize == currentInstruction[5]) {
 
         testInput(
             "Correct. Previous round results:" + "\n" +
             flipDir + " and " + currentInstruction[0] + "\n" +
             count + " and " + currentInstruction[1] + "\n" +
             color + " and " + currentInstruction[2] + "\n" +
             shape + " and " + currentInstruction[3] + "\n" +
             char + " and " + currentInstruction[4] + "\n" +
             charSize + " and " + currentInstruction[5] + "\n"
         );
         roundWon = true;
    } else {
 
         testInput(
             "Incorrect. Previous round result:" + "\n" +
             flipDir + " and " + currentInstruction[0] + "\n" +
             count + " and " + currentInstruction[1] + "\n" +
             color + " and " + currentInstruction[2] + "\n" +
             shape + " and " + currentInstruction[3] + "\n" +
             char + " and " + currentInstruction[4] + "\n" +
             charSize + " and " + currentInstruction[5] + "\n"
         );
         roundWon = false;
    }
 }
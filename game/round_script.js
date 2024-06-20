let roundWon = false;

function compareInput() {
   
    if (playerFlipDir == currentInstruction[0] && playerCount == currentInstruction[1]
     && playerColor == currentInstruction[2] && playerShape == currentInstruction[3]
     && playerChar == currentInstruction[4] && playerCharSize == currentInstruction[5]) {
 
        testInput(
            "Incorrect. Previous round results:" + "\n" +
            "----------" + "---Player---" + "|" + "---Computer---" + "\n" +
            "flip dir---" + playerFlipDir + "--and-" + currentInstruction[0] + "\n" +
            "rows count-----" + playerCount + "----and-" + currentInstruction[1] + "\n" +
            "color---------" + playerColor + "---and-" + currentInstruction[2] + "\n" +
            "shape--------" + playerShape + "-and-" + currentInstruction[3] + "\n" +
            "char----------" + playerChar + "-----and-" + currentInstruction[4] + "\n" +
            "char size-----" + playerCharSize + "--and-" + currentInstruction[5] + "\n"
        );
         roundWon = true;
    } else {
 
        testInput(
            "Incorrect. Previous round results:" + "\n" +
            "----------" + "---Player---" + "|" + "---Computer---" + "\n" +
            "flip dir---" + playerFlipDir + "--and-" + currentInstruction[0] + "\n" +
            "rows count-----" + playerCount + "----and-" + currentInstruction[1] + "\n" +
            "color---------" + playerColor + "---and-" + currentInstruction[2] + "\n" +
            "shape--------" + playerShape + "-and-" + currentInstruction[3] + "\n" +
            "char----------" + playerChar + "-----and-" + currentInstruction[4] + "\n" +
            "char size-----" + playerCharSize + "--and-" + currentInstruction[5] + "\n"
        );
         roundWon = false;
    }
 }
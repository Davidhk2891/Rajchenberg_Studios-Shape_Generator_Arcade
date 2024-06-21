let points = 0;

function gainPoints() {
    return points + 10;
}

function losePoints() {
    return points - 5;
}

function resetPoints() {
    points = 0;
    return points;
}

function updatePoints() {

    points = roundWon ? gainPoints() : losePoints();
    return points;  
}
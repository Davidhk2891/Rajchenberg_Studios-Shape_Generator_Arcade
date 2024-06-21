let points = 0;

function gainPoints() {
    time = time + 5;
    return points + 10;
}

function losePoints() {
    time = time - 2;
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
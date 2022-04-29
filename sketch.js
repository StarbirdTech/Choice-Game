var currentLevel = 0;
var maxLevel = 1;

function setup () {
    createCanvas(600, 600);
    setupLevel();
}

function draw() {
    drawLevel();
}

function setupLevel() {
    switch(currentLevel) {
        case 0:
            background(0);
            break;
        case 1:
            background(255, 0, 0);
            break;
    }
}

function drawLevel() {
    switch(currentLevel) {
        case 0:
            circle(mouseX, mouseY, 10);
            break;
        case 1:
            rect(mouseX, mouseY, 10);
            break;
    }
}

function mouseClicked() {
    currentLevel++;
    if (currentLevel > maxLevel) {
        currentLevel = 0;
    }
    setupLevel();
}
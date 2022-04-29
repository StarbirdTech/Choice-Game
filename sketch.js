var currentLevel = 0;
var maxLevel = 1;

class menuButton {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.col = color(255, 100, 76);
        this.diameter = 46;

        this.display = function () {
            noStroke();
            fill(this.col);
            ellipse(this.x, this.y, this.diameter, this.diameter);
        };

        this.clicked = function () {
            var d = dist(mouseX, mouseY, this.x, this.y);
            if (d < this.diameter / 2) {
                this.col = color(random(255), random(255), random(255));
            }
        };
    }
};

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
            nextLevel = new menuButton(width/2, height/2);
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
            nextLevel.display();
            break;
        case 1:
            rect(mouseX, mouseY, 10);
            break;
    }
}

function mousePressed() {
    switch(currentLevel) {
        case 0:
            nextLevel.clicked();
            break;
    }
}

function keyPressed() {
    if (keyCode === ENTER) {
        currentLevel++;
        if (currentLevel > maxLevel) {
            currentLevel = 0;
        }
        setupLevel();
    }
}

function nextLevel() {
    currentLevel++;
        if (currentLevel > maxLevel) {
            currentLevel = 0;
        }
        setupLevel();
}
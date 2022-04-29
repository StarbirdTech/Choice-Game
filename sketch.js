var currentLevel = 0;
var maxLevel = 1;

let lvl1SquareX = [150, 300, 450]
let lvl1SquareY = [150, 300, 450]

class menuButton {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.col = color(255, 100, 76);
        this.diameter = 150;
        this.triSmall = this.diameter / 6.66;
        this.triLarge = this.diameter / 3.33;

        this.display = function () {
            noStroke();
            strokeWeight(10);
            fill(this.col);
            ellipse(this.x, this.y, this.diameter, this.diameter);
            fill(0);
            triangle(this.x+this.diameter / 3.33, this.y, this.x-this.diameter / 6.66, this.y-this.diameter / 3.33, this.x-this.diameter / 6.66, this.y+this.diameter / 3.33);
            fill(this.col);
        }

        this.clicked = function () {
            var d = dist(mouseX, mouseY, this.x, this.y);
            if (d < this.diameter / 2) {
                return true;
            }
        }

        this.hover = function () {
            var d = dist(mouseX, mouseY, this.x, this.y);
            if (d < this.diameter / 2) {
                if (this.diameter < 200) {
                    this.diameter+=5;
                } 
            }
            else {
                if (this.diameter > 150) {
                    this.diameter-=5;
                }
            }
        }
    }
}

class square {
    constructor(x, y, w) {
        this.x = x;
        this.y = y;
        this.w = w;
    }

    display() {
        fill(255, 100, 76);
        rect(this.x, this.y, this.w, this.w);
    }
}

function nextLevel() {
    currentLevel++;
    if (currentLevel > maxLevel) {
        currentLevel = 0;
    }
    setupLevel();
}

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
            menuPlay = new menuButton(width/2, height*0.75);
            break;
        case 1:
            background(0);
            rectMode(CENTER);
            break;
    }
}

function drawLevel() {
    switch(currentLevel) {
        case 0:
            background(0);
            textSize(75);
            textAlign(CENTER);
            text('𝘾𝙝𝙤𝙤𝙨𝙚 𝙒𝙞𝙨𝙚𝙡𝙮', width/2, height*.33);
            menuPlay.display();
            menuPlay.hover();
            break;
        case 1:
            background(100);
            for(let i = 0; i < 3; i++) {
                for(let j = 0; j < 3; j++) {
                    rect(lvl1SquareX[i], lvl1SquareY[j], 120)
                }
            }
            break;
    }
}

function mousePressed() {
    switch(currentLevel) {
        case 0:
            if (menuPlay.clicked()) {
                nextLevel();
            }
            break;
        case 1:
            if (true) {
                nextLevel();
            }
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
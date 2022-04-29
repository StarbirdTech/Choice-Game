var currentLevel = 0;
var maxLevel = 1;

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
                currentLevel++;
                if (currentLevel > maxLevel) {
                    currentLevel = 0;
                }
                setupLevel();
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
            nextLevel = new menuButton(width/2, height*0.75);
            break;
        case 1:
            background(255, 0, 0);
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
            nextLevel.display();
            nextLevel.hover();
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
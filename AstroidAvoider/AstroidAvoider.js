var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);

//astroid variables
var numAsteroids = 20;
var asteroids = [];


//Astroid Class
function Asteroid() {
    //properties to draw asteroid
    this.radius = randomRange(15, 2);
    this.x = randomRange(canvas.width - this.radius, this.radius);
    this.y = randomRange(canvas.height - this.radius, this.radius); - canvas.height
    this.vy = randomRange(10, 5);
    this.color = "white";

    //methods(functions) to draw astroid
    this.drawAsteroid = function () {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}

//for loop to instantiate astroids for the games
for (var i = 0; i < numAsteroids; i++) {

    asteroids[i] = new Asteroid();
}
function main() {
    //clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < asteroids.length; i++) {
        if (asteroids[i].y > canvas.height + asteroids[i].radius) {
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius);
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius);
        }

        asteroids[i].y += asteroids[i].vy;
        asteroids[i].drawAsteroid();
    }
    

    //refresh the screen
    timer = requestAnimationFrame(main);
}


//utility functions

function randomRange(high, low) {
    return Math.random() * (high - low) + low;
}



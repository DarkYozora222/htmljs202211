var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);

var start = 50;
var finish = 750;
var carPos = 2;
var speed = 3;
var carWidth = 50;

var startFuel = randomNumber(canvas.width, 600);
var fuel = startFuel;
var fuelBarWidth = 300;
var gameOver = true;

var seconds = 3;
var fps = 60;
var frames = fps;

//load game sprites
var carsprite = new Image();
carsprite.src = "images/carsprite.png";
//add some event listeners
document.addEventListener("keydown", keyPressDown);

function keyPressDown(e){
    if(e.keyCode == 32 && gameOver){
        gameOver = false;
    }
}

function main(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(gameOver){
    ctx.fillstyle = "black";
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Press Space to Start",canvas.width/2, canvas.height/2);
    }else{
        if(gameOver && seconds > 0){
            runStartTimer();
            drawStartTimer();
        }
        drawStartFinish();
        drawCar();
        if(fuel > 0){
            carPos += speed;
            fuel -= speed;
        }
        drawFuelBar();
        if(carPos > finish || fuel<=0){
            drawResults();
        }
    }
    


    

    timer = requestAnimationFrame(main);
}


function drawStartFinish(){
    ctx.fillStyle = "black";
    //start line
    ctx.fillRect(start,50,10,500);
    //finish line
    ctx.fillRect(finish,50,10,500);
    //draw a car
    ctx.fillstyle = "red";
    ctx.fillRect(carPos,canvas.height/2,40,20);
}

function drawCar(){
    ctx.fillStyle = "red";
    ctx.fillRect(carPos,canvas.height/2,40,20);
    ctx.drawImage(carsprite, carPos, canvas.height/2, 40, 20);
}

function drawFuelBar(){
    var currentBarWidth = fuelBarWidth*(fuel/startFuel);
    ctx.fillStyle = "black";
    ctx.fillRect(start,30,fuelBarWidth,10);
    ctx.font = "25px Arial";
    ctx.fillText("Fuel", start, 25);
    if(fuel > 0){
        ctx.fillStyle = "green";
        ctx.fillRect(start,30,currentBarWidth,10);
    }
}

function drawResults(){
    if(carPos  + carWidth > finish){
        ctx.fillStyle = "black";
        ctx.font = "25px Arial";
        ctx.textAlign = "center";
        fillText("You made it to the finish...You WIN!", canvas.width/2, canvas.height/2);
    }else{
        ctx.fillStyle = "black";
        ctx.font = "25px Arial";
        ctx.textAlign = "center";
        ctx.fillText("You ran out of fuel...You LOSE!", canvas.width/2, canvas.height/2)
    }
}

function restartGame(){
    location.reload();
}

function runStartTimer(){
    frames -= 1;
    if(frames < 0){
        frames = fps;
        seconds -= 1;

    }
}
function randomNumber(high,low){
    return Math.round(Math.random()*(high-low)+low);
}
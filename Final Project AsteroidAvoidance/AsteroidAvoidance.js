var canvas=$("#gameCanvas");
var context=canvas.get(0).getContext("2d");

//Canvas dimensions
var canvasWidth=canvas.width();
var canvasHeight=canvas.height();

//Game settings
var playGame;

var asteroids;
this.x=x;
this.y=y;
this.radius=radius;
this.vx=vx;


var numAsteroids;
//Game UI
var ui=$("#gameUI");
var uiIntro=$("#gameIntro");
var uiStats=$("gameStats");
var uiComplete=$("#gameComplete");
var uiPlay=("#gamePlay");
var uiReset=$(".gameReset");
var uiScore=$(".gameScore");

//Reset and start the game
var Asteroid= function(x,y, radius, vx){
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.vx=vx;

    var player= function(x,y){
        this.x=x;
        this.y=y;
        this.width=24;
        this.height=24;
        this.halfWidth=this.width/2;
        this.halfHeight=this.height/2;

        this.vx-0;
        this.vy=0;

        var arrowUp=38;
        var arrowRight=39;
        var arrowDown=40;
    }
}

asteroids=new Array();
numAsteroids=10;

for(var i=0; i < numAsteroids; i++){
    var radius=5+(Math.random()*10);
    var x=canvasWidth+radius+Math.floor(Math.random()*canvasWidth);
    var y= Math.floor(Math.random()*canvasHeight);

    asteroids.push(new Asteroid(x, y, radius, vx));
}

function startGame(){
    //Reset game stats
    uiScore.html("0");
    uiStats.show();

    //Set up initial game settings
    playGame=false;

    //Start the animation loop
    animate();
    $(window).keydown(function(e){

    });
    $(window).keyup(function(e){

    });

    player=new Player(150, canvasHeight/2);
};

//Initialize the game environment
function init(){
    uiStats.hide();
    uiComplete.hide();

    uiPlay.click(function(e) {
        e.preventDefault();
        uiIntro.hide();
        startGame();
    });

    $(window).unbind("keyup");
    $(window).unbind("keydown");

    uiReset.click(function(e){
        e.preventDefault();
        uiIntro.hide();
        startGame();
    });

};

//Animation loop that does all the fun stuff
function animate(){
    //Clear
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    
    if (playGame){
        //Run the animation loop again in 33 milliseconds
        setTimeout(animate, 33);
    };
};

init();

//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

document.addEventListener("keydown",onKeyDown);
document.addEventListener("keyup",onKeyUp);

function onKeyDown(e){
    console.log(e.keycode);

}

function onKeyUp(e){
    if(e.keyCode == 32){
        console.log("You pressed the spacebar")
        draw();
        gameover = false;
        draw(rock,paper,scissors,rock,paper,scissors);
    }
}

function draw(){

   
        if (gameover) {
            //drawing the fonts
            ctx.font = "40px Arial";
            ctx.fillStyle = "blue";
            ctx.strokeStyle = "green";
            ctx.fillText("welcome to the rps game!", canvas.width / 2, 280);
            ctx.fillStyle("press space to start", canvas.width / 2, 350);
            ctx.strokeText("welcome to the rps game!", canvas.width / 2, 280);

        }
        else {
            ctx.save();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "30px Arial"
            ctx.textAlign = "center"
            ctx.fillstyle = "pink"
            ctx.fillText("player choice", canvas.width / 2, 100)
            ctx.drawImage(rock, canvas.width / 2 - rock.width / 2, 100, 150);
            ctx.drawImage(paper, canvas.width / 2 - paper.width);
            ctx.drawImage(scissors, canvas.width / 2 - scissors.width / 2 + 100, 150);

        }
    }
//alert("select rock, paper, or scissors!");
var rps = ["rock","paper","scissors"]
//console.log(rps(2));

alert("select rock, paper, or scissors");

document.getElementById("rock").addEventListener('click',function(e){
    alert("You picked " + rps[0])
    playGame(rps[0]);
});
document.getElementById("paper").addEventListener('click',function(e){
    alert("You picked " + rps[1])
    playGame(rps[1]);
});
document.getElementById("scissors").addEventListener('click',function(e){
    alert("You picked " + rps[2])
    playGame(rps[2]);
});

function playGame(playerChoice){
    
    var cpuChoice = Math.floor(Math.random) * 2.99;
    console.log(cpuChoice, playerChoice);

    switch(playerChoice){
        case "rock":
        if(cpuChoice == 0){
            //rock
            //alert("CPU chose rock. It's a tie");
            results = "CPU chose paper, YOU LOSE!";
            draw(rock,hpaper,scissors,rock,hpaper,scissors);
        }
        else if(cpuChoice == 1){
          //paper
          //alert("CPU chose paper. You Lose!");
          results = "CPU chose paper it's a tie!";
          draw(rock,hpaper,scissors,rock,hpaper,scissors);
        }
        else{
            //alert("CPU chose scissors. You Win!")
            results = "CPU chose scissors YOU WIN";
            draw(rock,hpaper,scissors,rock,hpaper,scissors);
        }
        break;
        case "paper":
        if(cpuChoice == 0){
            //rock
            alert("CPU chose rock. YOU WIN!");
        }
        else if(cpuChoice == 1){
          //paper
          alert("CPU chose paper. It's a tie");
        }
        else{
            alert("CPU chose scissors. You Lose!")
        }
        break;

        case "scissors":
        if(cpuChoice == 0){
            //scissors
            alert("CPU chose rock. You Lose!");
        }
        else if(cpuChoice == 1){
          //paper
          alert("CPU chose paper. YOU WIN!");
        }
        else{
            alert("CPU chose scissors. It's a tie!")
        }
        break;
    }
   
    
}
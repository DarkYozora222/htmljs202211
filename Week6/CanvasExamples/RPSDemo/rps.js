//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

//drawing the fonts
ctx.font = "40px Arial";
ctx.fillStyle = "blue";
ctx.strokeStyle = "green";
ctx.fillText("welcome to the rps game!", 125, 280);
ctx.strokeText("welcome to the rps game!", 125, 280);

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
            alert("CPU chose rock. It's a tie");
        }
        else if(cpuChoice == 1){
          //paper
          alert("CPU chose paper. You Lose!");
        }
        else{
            alert("CPU chose scissors. You Win!")
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
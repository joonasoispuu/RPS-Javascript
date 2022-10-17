var points = 0;
var computerpoints = 0;
var Rounds = -1;

while(Rounds != 5){
    function RPSFunction(element){
        var answer="";
        const RPS = ["Rock", "Paper", "Scissors"];
        var computeranswer= RPS[Math.floor(Math.random()*RPS.length)];
        if(element.getAttribute("value") == "Rock"){
            answer = "Rock";
        }
        else if(element.getAttribute("value") == "Paper"){
            answer = "Paper";
        }
        else{
            answer = "Scissors";
        }
        if(answer == "Rock" && computeranswer == "Paper"){
            document.getElementById("Welcome").innerHTML = "Computer chose Paper you lost!";
            computerpoints++;
        }
        else if(answer == "Rock" && computeranswer == "Rock"){
            document.getElementById("Welcome").innerHTML = "Computer chose Rock thats a tie!";
        }
        else if(answer == "Rock" && computeranswer == "Scissors"){
            document.getElementById("Welcome").innerHTML = "Computer chose Scissors you won!";
            points++;
        }

        else if(answer == "Paper" && computeranswer == "Rock"){
            document.getElementById("Welcome").innerHTML = "Computer chose Rock you won!";
            points++;
        }
        else if(answer == "Paper" && computeranswer == "Paper"){
            document.getElementById("Welcome").innerHTML = "Computer chose Paper thats a tie!";
        }
        else if(answer == "Paper" && computeranswer == "Scissors"){
            document.getElementById("Welcome").innerHTML = "Computer chose Scissors you lost!";
            computerpoints++;
        }

        else if(answer == "Scissors" && computeranswer == "Rock"){
            document.getElementById("Welcome").innerHTML = "Computer chose Rock you lost!";
            computerpoints++;
        }
        else if(answer == "Scissors" && computeranswer == "Paper"){
            document.getElementById("Welcome").innerHTML = "Computer chose Paper you won!";
        }
        else if(answer == "Scissors" && computeranswer == "Scissors"){
            document.getElementById("Welcome").innerHTML = "Computer chose Scissors thats a tie!";
            points++;
        }
        Rounds++;
        document.getElementById("Round").innerHTML = "Round: " + Rounds;
        if(Rounds==5){
            if(points>computerpoints){
                document.getElementById("Welcome").innerHTML = "You Won The Match!";
                Rounds=0;
            }
            else if(computerpoints>points){
                document.getElementById("Welcome").innerHTML = "You Lost The Match!";
                Rounds=0;
            }
            else{
                document.getElementById("Welcome").innerHTML = "The Match ended in a tie!";
                Rounds=0;
            }
        }
    }
    Rounds++;
    document.getElementById("Round").innerHTML = "Round: " + Rounds;
    if(Rounds==5){
        if(points>computerpoints){
            document.getElementById("Welcome").innerHTML = "You Won The Match!";
        }
    }
}

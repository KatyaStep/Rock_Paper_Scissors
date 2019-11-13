var scissors = $(".scissors").val();
var rock = $(".rock").val();
var paper = $(".paper").val();
var playerChoice = $("#player_choice");
var aiChoice = $("#ai_choice");
var winnerOfRound;
var counterDraw = 0;
var counterWinPlayer = 0;
var counterWinAI = 0;

$(document).ready(function(){
   setDefaultValues($("#player_score"));
   setDefaultValues($("#draw_score"));
   setDefaultValues($("#ai_score"));
})


$(".scissors").click(function(){
    insertResult(scissors);
    aiRandomChoice ();
    findTheWinner();
    addResultsToBoard();
    
})

$(".rock").click(function(){
    insertResult(rock);
    aiRandomChoice ();
    findTheWinner();
    addResultsToBoard();
    
})

$(".paper").click(function(){
    insertResult(paper);
    aiRandomChoice ();
    findTheWinner();
    addResultsToBoard();
    
})

// function to set default values for the results board 
function setDefaultValues (column){
    var defaultNumber = 0;
    column.append(defaultNumber);
}

// insert player's choice to the round result section 

function insertResult(choice){ 
    //$("#player_choice").append("Player: " + choice);
    if (playerChoice.text() === "") {
        playerChoice.append("Player: " + choice);
    }
    else {
        if (playerChoice.text() !== "Player: " + choice){
            playerChoice.empty();
            playerChoice.append("Player: " + choice);
        }
        else {
            console.log("Player already choose")
        }
    }
}

function insertAiChoice (choice){
    if (aiChoice.text() === "") {
        aiChoice.append("AI: " + choice);
    }
    else {
        if (aiChoice.text() !== "AI: " + choice){
            aiChoice.empty();
            aiChoice.append("AI: " + choice);
        }
        else {
            console.log("AI already choose")
        }
    }
}

function aiRandomChoice (){
    var aiRandomChoice = Math.floor((Math.random() * 3) + 1);
    console.log(aiRandomChoice);
    if (aiRandomChoice === 1) {
        insertAiChoice(rock);
    }
    else if (aiRandomChoice === 2 ){
        insertAiChoice(scissors);
    }
    else {
        insertAiChoice(paper);
    }
    
}

function findTheWinner(){
        var player  = playerChoice.text();
        var ai = aiChoice.text();
        var result = $("#round_winner").text();
    if ((player === "Player: Paper" && ai === "AI: Rock") || (player === "Player: Scissors" && ai === "AI: Paper") ||(player === "Player: Rock" && ai === "AI: Scissors")) {
        winnerOfRound = "Result: Player win";
        if (result === ""){
            $("#round_winner").append(winnerOfRound);
        }
        else {
            $("#round_winner").empty();
            $("#round_winner").append(winnerOfRound);
        }
    }
    else if ((player === "Player: Paper" && ai === "AI: Paper") || (player === "Player: Scissors" && ai === "AI: Scissors") ||(player === "Player: Rock" && ai === "AI: Rock")) {
        winnerOfRound = "Result: Draw";
        if (result === ""){
            $("#round_winner").append(winnerOfRound);
        }
        else {
            $("#round_winner").empty();
            $("#round_winner").append(winnerOfRound);
        }
    }
    else {
        winnerOfRound = "Result: AI win";
        if (result === ""){
            $("#round_winner").append(winnerOfRound);
        }
        else {
            $("#round_winner").empty();
            $("#round_winner").append(winnerOfRound);
        }
    }
}

function addResultsToBoard(){
    var currentResult = $("#round_winner").text();
    if (currentResult === 'Result: Player win') {
        counterWinPlayer += 1;
        $("#player_score").empty();
        $("#player_score").append(counterWinPlayer);
        //console.log("Counter =", counter);
    }
    else if (currentResult === 'Result: AI win') {
        counterWinAI += 1;
        $("#ai_score").empty();
        $("#ai_score").append(counterWinAI);
    }
    else {
        counterDraw += 1;
        $("#draw_score").empty();
        $("#draw_score").append(counterDraw);
    }
}
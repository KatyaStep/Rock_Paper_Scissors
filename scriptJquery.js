var scissors = "scissors";
var rock = "rock"
var paper = "paper";
var playerChoice = $("#player_choice");
var aiChoice = $("#ai_choice");
var score_board = $(".score-board p");
var winnerOfRound;
var counterDraw = 0;
var counterWinPlayer = 0;
var counterWinAI = 0;

$(document).ready(function(){
   setDefaultValues(score_board);
})


$(".scissors").click(function(){
    insertChoice(playerChoice, "Player: ",scissors)
    aiRandomChoice ();
    findTheWinner();
    addResultsToBoard();
    
})

$(".rock").click(function(){
   insertChoice(playerChoice, "Player: ",rock)
    aiRandomChoice ();
    findTheWinner();
    addResultsToBoard();
    
})

$(".paper").click(function(){
    insertChoice(playerChoice, "Player: ",paper)
    aiRandomChoice ();
    findTheWinner();
    addResultsToBoard();
    
})

$("#reset-btn").click(function(){
    let response = confirm ("Do you want to reset the game?")
    if (response === true){
        reset();
    }
    else {
        console.log("pressed cancel");
    }
})

// function to set default values for the results board 
function setDefaultValues (column){
    let defaultNumber = 0;
    column.append(defaultNumber);
}

// insert player's  and ai's choices to the round result section 

function insertChoice (column, text, choice){
    if (column.text() === ""){
        column.append(text + choice);
    }
    else {
        if (column.text() !== column + choice){
            column.empty();
            column.append(text + choice);
        }
    }
}
// define ai random choice 

function aiRandomChoice (){
    var aiRandomChoice = Math.floor((Math.random() * 3) + 1);
    console.log(aiRandomChoice);
    if (aiRandomChoice === 1) {
        //insertAiChoice(rock);
        insertChoice(aiChoice, "AI: ", rock)
    }
    else if (aiRandomChoice === 2 ){
        //insertAiChoice(scissors);
        insertChoice(aiChoice, "AI: ", scissors);
    }
    else {
        //insertAiChoice(paper);
        insertChoice(aiChoice, "AI: ", paper);
    }
    
}

function findTheWinner(){
        var player  = playerChoice.text();
        var ai = aiChoice.text();
        var result = $("#round_winner").text();
    if ((player === "Player: paper" && ai === "AI: rock") || (player === "Player: scissors" && ai === "AI: paper") ||(player === "Player: rock" && ai === "AI: scissors")) {
        winnerOfRound = "Result: Player win";
        if (result === ""){
            $("#round_winner").append(winnerOfRound);
        }
        else {
            $("#round_winner").empty();
            $("#round_winner").append(winnerOfRound);
        }
    }
    else if ((player === "Player: paper" && ai === "AI: paper") || (player === "Player: scissors" && ai === "AI: scissors") ||(player === "Player: rock" && ai === "AI: rock")) {
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

function reset() {
    $("#player_score").empty();
    $("#draw_score").empty();
    $("#ai_score").empty();
    $("#player_choice").empty();
    $("#ai_choice").empty();
    $("#round_winner").empty();
    setDefaultValues(score_board);
}
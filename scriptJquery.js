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
var round = 0;
//var scissorsImage = $(".image").attr('src', "/img/scissors.jpg");

$(document).ready(function(){
   setDefaultValues(score_board);
})


$(".scissors").click(function(){
    changingRound();
    animation("running");
    setTimeout(function(){
        insertChoice(playerChoice, "Player: ",scissors, $(".imagePl"),"/img/scissors.jpg");
        aiRandomChoice();
        findTheWinner();
        addResultsToBoard();
    }, 1500)
    //timeOut(insertChoice(playerChoice, "Player: ",scissors, ($(".imagePl").attr('src', "/img/scissors.jpg"))))
    //setTimeout(function() {alert("Hello")}, 5000);
    //insertChoice(playerChoice, "Player: ",scissors, $(".imagePl"),"/img/scissors.jpg");
    //aiRandomChoice ();
    //findTheWinner();
    //addResultsToBoard();
    
})

$(".rock").click(function(){
    changingRound ();
    animation("running");
    setTimeout(function(){
        insertChoice(playerChoice, "Player: ",rock, $(".imagePl"), "/img/rock.jpg");
        aiRandomChoice ();
        findTheWinner();
        addResultsToBoard();
    },1500)
    //insertChoice(playerChoice, "Player: ",rock, $(".imagePl"), "/img/rock.jpg");
    //aiRandomChoice ();
    //findTheWinner();
    //addResultsToBoard();
    
})

$(".paper").click(function(){
    changingRound();
    animation("running");
    setTimeout(function(){
        insertChoice(playerChoice, "Player: ",paper, ($(".imagePl").attr('src', "/img/paper.jpg")));
        aiRandomChoice ();
        findTheWinner();
        addResultsToBoard();
    }, 1500)
    /*insertChoice(playerChoice, "Player: ",paper, ($(".imagePl").attr('src', "/img/paper.jpg")));
    aiRandomChoice ();
    findTheWinner();
    addResultsToBoard();*/
    
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
    $("#round-number").append(defaultNumber);
}

// insert player's  and ai's choices to the round result section 

function insertChoice (column, text, choice, image, src){
    //setTimeout(function() {
     animation("paused");
     image.attr('src',src);

    if (column.text() === ""){
        column.append(text + choice);
    }
    else {
        if (column.text() !== column + choice){
            column.empty();
            column.append(text + choice);
        }
    } 
    //}, 1500);
    /*$(".image").append(image);
    if (column.text() === ""){
        column.append(text + choice);
    }
    else {
        if (column.text() !== column + choice){
            column.empty();
            column.append(text + choice);
        }
    }*/
}
// define ai random choice 

function aiRandomChoice (){
    var aiRandomChoice = Math.floor((Math.random() * 3) + 1);
    console.log(aiRandomChoice);
    if (aiRandomChoice === 1) {
        //insertAiChoice(rock);
        insertChoice(aiChoice, "AI: ", rock, ($(".imageAI").attr('src', "/img/rock.jpg")))
    }
    else if (aiRandomChoice === 2 ){
        //insertAiChoice(scissors);
        insertChoice(aiChoice, "AI: ", scissors, ($(".imageAI").attr('src', "/img/scissors.jpg")));
    }
    else {
        //insertAiChoice(paper);
        insertChoice(aiChoice, "AI: ", paper, ($(".imageAI").attr('src', "/img/paper.jpg")));
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
    $("#round-number").empty();
    setDefaultValues(score_board);
    counterDraw = 0;
    counterWinPlayer = 0;
    counterWinAI = 0;
    round = 0;
}

function changingRound (){
    $("#round-number").empty();
    round += 1;
    $("#round-number").append(round);

}

function animation (state){
    //$(".imagePl").addClass("animation"); 
    $(".animation").css("animation-play-state", state);

}

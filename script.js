var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");
var ai = document.getElementById("ai_choice_btn");
var winner;
var playerCounter = 0;

scissors.addEventListener("click", function(){
    if (document.querySelector(".results_paragraph") === null) {
        insertResult(scissors);
        randomChoiceAI();
        insertWinnerResult();
        addResultsToBoard()
    }
    else if ((document.querySelector(".results_paragraph").textContent === "Player: Rock")|| (document.querySelector(".results_paragraph").textContent === "Player: Paper" )) {
        //document.querySelector(".results_paragraph").remove();
        removeOldRecordPl();
        removeOldRecordWinner();
        insertResult(scissors);
        randomChoiceAI();
        //removeOldRecordWinner();
        insertWinnerResult();
        addResultsToBoard()
    }
    else {
        console.log("Already choisen");
        randomChoiceAI();
        removeOldRecordWinner();
        insertWinnerResult();
        addResultsToBoard()
    }
})

rock.addEventListener("click", function(){

    if (document.querySelector(".results_paragraph") === null) {
        insertResult(rock);
        randomChoiceAI();
        insertWinnerResult();
    }
    else if ((document.querySelector(".results_paragraph").textContent === "Player: Scissors")|| (document.querySelector(".results_paragraph").textContent === "Player: Paper" )) {
        //document.querySelector(".results_paragraph").remove();
        removeOldRecordPl();
        removeOldRecordWinner();
        insertResult(rock);
        randomChoiceAI();
        //removeOldRecordWinner();
        insertWinnerResult();
    }
    else {
        console.log("Already choisen");
        randomChoiceAI();
        removeOldRecordWinner();
        insertWinnerResult();
    }
})

paper.addEventListener("click", function(){

    if (document.querySelector(".results_paragraph") === null) {
        insertResult(paper);
        randomChoiceAI();
        insertWinnerResult();
    }
    else if ((document.querySelector(".results_paragraph").textContent === "Player: Rock")|| (document.querySelector(".results_paragraph").textContent === "Player: Scissors" )) {
        //document.querySelector(".results_paragraph").remove();
        removeOldRecordPl();
        removeOldRecordWinner();
        insertResult(paper);
        randomChoiceAI();
        //removeOldRecordWinner();
        insertWinnerResult();
    }
    else {
        console.log("Already choisen");
        randomChoiceAI();
        removeOldRecordWinner();
        insertWinnerResult();
    }
})



// AI random choice

//ai.addEventListener ("click", function(){
    function randomChoiceAI (){

        let choice = Math.floor((Math.random() * 3) + 1);
        console.log(choice);

    if ( choice === 1) {
        if (document.querySelector(".ai_results_paragraph") === null) {
            choice = insertAiResult(rock);
            findTheWinner();
        }
        else if ((document.querySelector(".ai_results_paragraph").textContent === "AI: Paper")|| (document.querySelector(".ai_results_paragraph").textContent === "AI: Scissors" )) {
            //document.querySelector(".ai_results_paragraph").remove();
            removeOldRecordAI()
            choice = insertAiResult(rock);
            findTheWinner();

        }
    }
    else if ( choice === 2){
        if (document.querySelector(".ai_results_paragraph") === null) {
            choice = insertAiResult(paper);
            findTheWinner();
        }
        else if ((document.querySelector(".ai_results_paragraph").textContent === "AI: Rock")|| (document.querySelector(".ai_results_paragraph").textContent === "AI: Scissors" )) {
            //document.querySelector(".ai_results_paragraph").remove();
            removeOldRecordAI()
            choice = insertAiResult(paper);
            findTheWinner();

        }
        //choice = insertAiResult(paper);
    }
    else {
        if (document.querySelector(".ai_results_paragraph") === null) {
            choice = insertAiResult(scissors);
            findTheWinner();
        }
        else if ((document.querySelector(".ai_results_paragraph").textContent === "AI: Rock")|| (document.querySelector(".ai_results_paragraph").textContent === "AI: Paper" )) {
            //document.querySelector(".ai_results_paragraph").remove();
            removeOldRecordAI()
            choice = insertAiResult(scissors);
            findTheWinner();

        }
       // choice = insertAiResult(scissors);
    }
}//)


// insert results of player's choice
function insertResult(choice){ 
    var newParagraph = document.createElement("P");
    newParagraph.setAttribute("class", "results_paragraph");
    var element = document.getElementById("results_section");
    newParagraph.innerText = "Player: " + choice.value;
    element.appendChild(newParagraph);
    return choice;
}

//insert results of ai's choice
function insertAiResult(choice) {
    var newParagraph = document.createElement("P");
    newParagraph.setAttribute("class", "ai_results_paragraph");
    var element = document.getElementById("results_section");
    newParagraph.innerText = "AI: "+ choice.value;
    element.appendChild(newParagraph);
}

// insert winner 
function insertWinnerResult() {
    var winnerShow = findTheWinner();
    //console.log(winnerShow);
    var newParagraph = document.createElement("P");
    newParagraph.setAttribute("class", "winner_results_paragraph");
    var element = document.getElementById("results_section");
    var line = document.getElementById("rounds");
    //var horizLine = '<hr>'
    newParagraph.innerText = "Result: "+ winnerShow;
    element.appendChild(newParagraph);
    //line.insertAdjacentHTML('afterend',horizLine);
}

function findTheWinner(){
    var playerChoice = document.querySelector(".results_paragraph").textContent;
    var aiChoice = document.querySelector(".ai_results_paragraph").textContent;
    if ((playerChoice === "Player: Paper" && aiChoice === "AI: Rock") || (playerChoice === "Player: Scissors" && aiChoice === "AI: Paper") ||(playerChoice === "Player: Rock" && aiChoice === "AI: Scissors")) {
        winner = "Player win";
        return winner;
    }
    else if ((playerChoice === "Player: Paper" && aiChoice === "AI: Paper") || (playerChoice === "Player: Scissors" && aiChoice === "AI: Scissors") ||(playerChoice === "Player: Rock" && aiChoice === "AI: Rock")) {
        winner = "Draw";
        return winner;
    }
    else {
        winner = "AI win";
        return winner;
    }
}

function removeOldRecordPl(){
    document.querySelector(".results_paragraph").remove();
}

function removeOldRecordAI(){
    document.querySelector(".ai_results_paragraph").remove();
}

function removeOldRecordWinner(){
    document.querySelector(".winner_results_paragraph").remove();
}

function addResultsToBoard(){
    var playerScore = document.getElementById("player_score").textContent;
    var drawScore = document.getElementById("draw_score").textContent;
    var aiScore = document.getElementById("ai_score").textContent;
    var result = document.querySelector(".winner_results_paragraph");
    if (result.textContent === 'Result: Player win') {
        dociment.getElementBy
    }

    //var element = document.getElementById("results_section");
    //newParagraph.innerText = "Result: "+ winnerShow;
    //element.appendChild(newParagraph);
}


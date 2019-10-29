var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");
var ai = document.getElementById("ai_choice_btn");
var choice;
var aiChoice;


scissors.addEventListener("click", function(){
    if (document.querySelector(".results_paragraph") === null) {
        choice = insertResult(scissors);
        aiChoice = randomChoiceAI();
    }
    else if ((document.querySelector(".results_paragraph").textContent === "Player: Rock")|| (document.querySelector(".results_paragraph").textContent === "Player: Paper" )) {
        document.querySelector(".results_paragraph").remove();
        choice = insertResult(scissors);
        aiChoice = randomChoiceAI();
    }
    else {
        console.log("Already choisen");
        aiChoice = randomChoiceAI();
    }
})

rock.addEventListener("click", function(){

    if (document.querySelector(".results_paragraph") === null) {
        choice = insertResult(rock);
        aiChoice = randomChoiceAI();
    }
    else if ((document.querySelector(".results_paragraph").textContent === "Player: Scissors")|| (document.querySelector(".results_paragraph").textContent === "Player: Paper" )) {
        document.querySelector(".results_paragraph").remove();
        choice = insertResult(rock);
        aiChoice = randomChoiceAI();
    }
    else {
        console.log("Already choisen");
        aiChoice = randomChoiceAI();
    }
})

paper.addEventListener("click", function(){

    if (document.querySelector(".results_paragraph") === null) {
        choice = insertResult(paper);
        aiChoice = randomChoiceAI();
    }
    else if ((document.querySelector(".results_paragraph").textContent === "Player: Rock")|| (document.querySelector(".results_paragraph").textContent === "Player: Scissors" )) {
        document.querySelector(".results_paragraph").remove();
        choice = insertResult(paper);
        aiChoice = randomChoiceAI();
    }
    else {
        console.log("Already choisen");
        aiChoice = randomChoiceAI();
    }
})



// AI random choice

//ai.addEventListener ("click", function(){
    function randomChoiceAI (){

        var choice = Math.floor((Math.random() * 3) + 1);
        console.log(choice);

    if ( choice === 1) {
        if (document.querySelector(".ai_results_paragraph") === null) {
            choice = insertAiResult(rock);
            findTheWinner();
        }
        else if ((document.querySelector(".ai_results_paragraph").textContent === "AI: Paper")|| (document.querySelector(".ai_results_paragraph").textContent === "AI: Scissors" )) {
            document.querySelector(".ai_results_paragraph").remove();
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
            document.querySelector(".ai_results_paragraph").remove();
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
            document.querySelector(".ai_results_paragraph").remove();
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

function findTheWinner(){
    let playerChoice = document.querySelector(".results_paragraph").textContent;
    let aiChoice = document.querySelector(".ai_results_paragraph").textContent;
    if ((playerChoice === "Player: Paper" && aiChoice === "AI: Rock") || (playerChoice === "Player: Scissors" && aiChoice === "AI: Paper") ||(playerChoice === "Player: Rock" && aiChoice === "AI: Scissors")) {
        console.log ("Player win");
    }
    else if ((playerChoice === "Player: Paper" && aiChoice === "AI: Paper") || (playerChoice === "Player: Scissors" && aiChoice === "AI: Scissors") ||(playerChoice === "Player: Rock" && aiChoice === "Scissors: Rock")) {
        console.log ("Draw");
    }
    else {
        console.log("AI win");
    }
}


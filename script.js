var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");
var ai = document.getElementById("ai_choice_btn");
var choice;


scissors.addEventListener("click", function(){
    //var choice = insertResult(scissors);
    //console.log(choice.value);
    if (document.querySelector(".results_paragraph") === null) {
        choice = insertResult(scissors);
           /* var newParagraph = document.createElement("P");
            newParagraph.setAttribute("class", "results_paragraph");
            var element = document.getElementById("results_section");
            newParagraph.innerText = "Player: " + scissors.value;
            element.appendChild(newParagraph);*/
            //console.log(choice);
            //console.log("Scissors: We are in the first if")
            
    }
    else if ((document.querySelector(".results_paragraph").textContent === "Player: Rock")|| (document.querySelector(".results_paragraph").textContent === "Player: Paper" )) {
        document.querySelector(".results_paragraph").remove();
        choice = insertResult(scissors);
        /*var newParagraph = document.createElement("P");
        newParagraph.setAttribute("class", "results_paragraph");
        var element = document.getElementById("results_section");
        newParagraph.innerText = "Player: "+ scissors.value;
        element.appendChild(newParagraph);*/

        //console.log("Scissors: We are in the second if")
    }
    else {
        console.log("Already choisen");
    }
})

rock.addEventListener("click", function(){

    if (document.querySelector(".results_paragraph") === null) {
        choice = insertResult(rock);
        /*var newParagraph = document.createElement("P");
        newParagraph.setAttribute("class", "results_paragraph");
        var element = document.getElementById("results_section");
        newParagraph.innerText = "Player: " + rock.value;
        element.appendChild(newParagraph);*/
    }
    else if ((document.querySelector(".results_paragraph").textContent === "Player: Scissors")|| (document.querySelector(".results_paragraph").textContent === "Player: Paper" )) {
        document.querySelector(".results_paragraph").remove();
        choice = insertResult(rock);
        //console.log("Deleted");
        //console.log("Rock: We are in the second if")
        /*var newParagraph = document.createElement("P");
        newParagraph.setAttribute("class", "results_paragraph");
        var element = document.getElementById("results_section");
        newParagraph.innerText = "Player: " + rock.value;
        element.appendChild(newParagraph);*/
    }
    else {
        console.log("Already choisen");
    }
})

paper.addEventListener("click", function(){

    if (document.querySelector(".results_paragraph") === null) {
        choice = insertResult(paper);
       /* var newParagraph = document.createElement("P");
        newParagraph.setAttribute("class", "results_paragraph");
        var element = document.getElementById("results_section");
        newParagraph.innerText = "Player: " + paper.value;
        element.appendChild(newParagraph);*/
    }
    else if ((document.querySelector(".results_paragraph").textContent === "Player: Rock")|| (document.querySelector(".results_paragraph").textContent === "Player: Scissors" )) {
        document.querySelector(".results_paragraph").remove();
        choice = insertResult(paper);
       // console.log("Paper: We are in the second if")
        //console.log("Deleted");
        /*var newParagraph = document.createElement("P");
        newParagraph.setAttribute("class", "results_paragraph");
        var element = document.getElementById("results_section");
        newParagraph.innerText = "Player: " + paper.value;
        element.appendChild(newParagraph);*/
    }
    else {
        console.log("Already choisen");
    }
})



// Random choice for AI 

ai.addEventListener ("click", function(){
    var choice = Math.floor((Math.random() * 3) + 1);
    console.log(choice);

    if ( choice === 1) {
        console.log("rock");
        choice = insertAiResult(rock);

    }
    else if ( choice === 2){
        console.log("paper");
        hoice = insertAiResult(paper);
    }
    else {
        console.log("scissors");
        hoice = insertAiResult(scissors);
    }
})


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
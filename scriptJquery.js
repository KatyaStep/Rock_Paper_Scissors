var scissorsChoice = $(".scissors").val();
var rockChoice = $(".rock").val();
var paperChoice = $(".paper").val();


$(document).ready(function(){
   setDefaultValues($("#player_score"));
   setDefaultValues($("#draw_score"));
   setDefaultValues($("#ai_score"));
})


$(".scissors").click(function(){
   // console.log("clicked scissors button");
    insertResult(scissorsChoice);
    aiRandomChoice ()
    
})

$(".rock").click(function(){
    //console.log("clicked scissors button");
    insertResult(rockChoice);
    aiRandomChoice ();
    
})

$(".paper").click(function(){
    //console.log("clicked scissors button");
    insertResult(paperChoice);
    aiRandomChoice ();
    
})

// function to set default values for the results board 
function setDefaultValues (column){
    var defaultNumber = 0;
    column.append(defaultNumber);
}

// insert player's choice to the round result section 

function insertResult(choice){ 
    //$("#player_choice").append("Player: " + choice);
    if ($("#player_choice").text() === "") {
        $("#player_choice").append("Player: " + choice);
    }
    else {
        if ($("#player_choice").text() !== "Player: " + choice){
            $("#player_choice").empty();
            $("#player_choice").append("Player: " + choice);
        }
        else {
            console.log("Player already choose")
        }
    }
}

function insertAiChoice (aiChoice){
    if ($("#ai_choice").text() === "") {
        $("#ai_choice").append("AI: " + aiChoice);
    }
    else {
        if ($("#ai_choice").text() !== "AI: " + aiChoice){
            $("#ai_choice").empty();
            $("#ai_choice").append("AI: " + aiChoice);
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
        insertAiChoice(rockChoice);

    }
    else if (aiRandomChoice === 2 ){
        insertAiChoice(scissorsChoice);
    }
    else {
        insertAiChoice(paperChoice);
    }
    
}

$(document).ready(function() {

    // Here we are provided an initial array of letters.
    // Use this array to dynamically create buttons on the screen.
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ".", ";", ":", ","];


    // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
    // =================================================================================

    const buttonsCreate = ()=>{
        let rowEl = $("<div>");
        let counter = 1;
        for (let i=0; i<letters.length; i++){
            if ((i===0) || (i===7)||(i===12)){
                $("#buttons").append(rowEl);
                $(rowEl).addClass("row");
            }
            var letterBtn = $("<button>");
            letterBtn.addClass("col-2 letter-button letter letter-button-color");
            letterBtn.attr("data-letter", letters[i]);
            letterBtn.text(letters[i]);
            $("#buttons").append(letterBtn);
            counter++;
        }
    }
        
    
    // MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "LETTER" BUTTONS
    // =================================================================================

    $(".letter-button").on("click", function(){
        var fridgeMagnet = $("<div>");
        fridgeMagnet.addClass("better fridge-color");
        fridgeMagnet.text($(this).attr("data-letter"));
        $("#display").append(fridgeMagnet);
        console.log(fridgeMagnet);
    })

    // MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
    // =================================================================================

    $("#clear").on("click", function(){
        $("#display").empty();
    })

    // MAJOR TASK #4: INITIALIZE.
    // =================================================================================    
    buttonsCreate();


  });

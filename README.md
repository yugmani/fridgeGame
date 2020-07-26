# fridgeGame
## File

* [`fridge`](Unsolved/fridge.html)

## Instructions

* Working in groups of 3, complete the code for the fridge activity such that:

  1. JavaScript dynamically generates buttons for each of the letters on the screen.

  2. Clicking any of the buttons leads the SAME letter to be displayed on the screen.

  3. Hitting the clear button erases all of the letters from the fridge.

* **NOTE:** This is a challenging exercise. You may want one person to type, while the other two watch over to catch bugs and/or research necessary snippets.

## Pseudocode

###. Major Task #1: CREATE ARRAY
1. Create an array of letters.
2.  Use this array to dynamically create buttons on the screen.

### Major Task #2: DYNAMICALLY CREATE BUTTONS
1. Create a for-loop to iterate through the letters array.

2. Inside the loop...

  * Create a variable named "letterBtn" equal to $("<button>"); 

  * Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".

  * Then give each "letterBtn" an attribute called "data-letter", with a value eqaual to "letters[i]".

  * Then give each "letterBtn" a text equal to "letters[i]".

  * Finally, append each "letterBtn" to the "#buttons" div (provided).

3. Be sure to test that your code works for this major task, before proceeding to the next one!

### MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "LETTER" BUTTONS
 1. Create an "on-click" event attached to the ".letter-button" class.

 2. Inside the on-click event...

  * Create a variable called "fridgeMagnet" and set the variable equal to a new div.

  * Give each "fridgeMagnet" the following classes: "letter fridge-color".

  * Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))

  * Lastly append the fridgeMagnet variable to the "#display" div (provided);

3. Be sure to test that your code works for this major task, before proceeding to the next one!

### MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON

  1. Create an "on-click" event attached to the "#clear" button id.

  2. Inside the on-click event...

  * Use the jQuery "empty()" method to clear the contents of the "#display" div.
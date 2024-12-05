/**
 * Truly Mysterious!
 * Carael Bandojo
 * 
 * A point and click escape room, 
 * Find the code to escape the room!
 * If you guess wrong thrice, or fail to escape when the timer ends, you die!
 * 
 * Instructions:
 * - Click to interact with objects
 * 
 * Uses:
 * p5.js
 * https://p5js.org
 * this 3D model
 * https://www.turbosquid.com/3d-models/horror-bathroom-bath-3d-model-1331670
 */

"use strict";

/*VARIABLES---------------------------------------------------------*/ 

// States for each screen of the game
let state = "title";

const States = {
    TITLE: "title",
    BATHROOM: "bathroom",
    TOILET: "toilet",
    CABINET_CLOSED: "cabinet_closed",
    CABINET_OPEN: "cabinet_open",
    SINK:  "sink",
    UNDER_SINK:  "under_sink",
    BATHTUB: "bathtub",
    DOOR: "door",
    WIN: "win",
    LOSE: "lose"
  };

let mode = "default";

const Modes = {
    DEFAULT: "default",
    FLASHLIGHT: "flashlight",
    FLIES: "flies"
};


/**TITLE STATE VARIABLES**/

let titleString = "TRULY MYSTERIOUS🔎";

let titleInstructions = "Press X to begin. "

let modeInstructions = "Press M to shift through modes."  


/**
* Make canvas and set shape creation modes to center.
*/
function setup() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  createCanvas(1000,700);
  
  // Se
}


/**
 * Sense what state the game is in and draw it
*/
function draw() {
  
  background(200);

  // Style the text.
  textAlign(CENTER);
  textSize(16);
  fill(0);

 // Title state
    if (state === States.TITLE) {
        title();
    } // Room state
    else if (state === States.BATHROOM) {
        bathroom();
    } // Door State
    else if (state === States.DOOR) {
        door();
    } // Win State
    else if (state === States.WIN) {
        win();
    } // Door State
    else if (state === States.LOSE) {
        lose();
    } 
}


/**
* Draw title state.
*/
function title(){
  background('maroon');
  
  // Draw title
  push();
  textFont('Courier New', 50)
  textSize(40);
  text(titleString, 500, 350);
  pop();
  
  // Draw subtitle
  push();
  textFont('Courier New', 50)
  textSize(20);
  text(titleInstructions, 500, 380);
  pop();
}

/**
* Draw room state.
*/
function room(){
  background('maroon');
  
  
}

/**
* Draw door state.
*/
function door(){
  
}

/**
* Draw win state.
*/
function lose(){
  
}

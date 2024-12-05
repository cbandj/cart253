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
 */

"use strict";

/*VARIABLES---------------------------------------------------------*/ 

// States for each screen of the game
const States = {
    TITLE: "title",
    ROOM: "room",
    DOOR: "door",
    WIN: "win",
    LOSE: "lose"
  };
  

/**
* Make canvas and set background
*/
function setup() {
createCanvas(1000,700);
background(200);
}


/**
 * Sense what state the game is in and draw it
*/
function draw() {
 // Title state
    if (state === States.TITLE) {
        title();
    } // Room state
    else if (state === States.ROOM) {
        room();
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
  
}

/**
* Draw room state.
*/
function room(){
  
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
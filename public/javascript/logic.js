'use strict';

let player = 2;

function turn(btn) {
  if (player % 2 === 0) {
    console.log('1player', player);
    document.getElementById(btn).value = 'X';
    player += 1;
  } else {
    console.log('1player', player);
    document.getElementById(btn).value = 'O';
    player += 1;
  }
}

var elUsername1 = document.getElementById('btn0');  // Get move (user click)
var elUsername2 = document.getElementById('btn1');  // Get move (user click)
var elUsername3 = document.getElementById('btn2');  // Get move (user click)

var elUsername4 = document.getElementById('btn3');  // Get move (user click)
var elUsername5 = document.getElementById('btn4');  // Get move (user click)
var elUsername6 = document.getElementById('btn5');  // Get move (user click)

var elUsername7 = document.getElementById('btn6');  // Get move (user click)
var elUsername8 = document.getElementById('btn7');  // Get move (user click)
var elUsername9 = document.getElementById('btn8');  // Get move (user click)

elUsername1.addEventListener('click', function() {        //
  turn('top left');                                     // Pass argument here
}, false);

elUsername2.addEventListener('click', function() {        //
  turn('middle top');                                     // Pass argument here
}, false);

elUsername3.addEventListener('click', function() {        //
  turn('top right');                                     // Pass argument here
}, false);

elUsername4.addEventListener('click', function() {        //
  turn('middle left');                                     // Pass argument here
}, false);

elUsername5.addEventListener('click', function() {        //
  turn('middle');                                     // Pass argument here
}, false);

elUsername6.addEventListener('click', function() {        //
  turn('middle right');                                     // Pass argument here
}, false);

elUsername7.addEventListener('click', function() {        //
  turn('bottom left');                                     // Pass argument here
}, false);

elUsername8.addEventListener('click', function() {        //
  turn('bottom middle');                                     // Pass argument here
}, false);

elUsername9.addEventListener('click', function() {        //
  turn('bottom right');                                     // Pass argument here
}, false);

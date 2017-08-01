'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js')

// styles
require('./assets/styles/index.scss')

console.log("functional")
//-----------------------------------------------------------
// START - Game Variables -------------------
//-----------------------------------------------------------

let turnCount = 0
console.log(turnCount)
let winner = '' // Options in checkForWin = playerX, playerO, Draw
let playerTurn = 'x'

//-----------------------------------------------------------
// START - Game Variables -------------------
//-----------------------------------------------------------


//-----------------------------------------------------------
// START - createBoard Function and Event -------------------
//-----------------------------------------------------------
const createBoard = function () {
  $('#signUp').hide()
  $('.gameBoard').removeClass('hidden')
}

$('#hideButton').click(createBoard)

//-----------------------------------------------------------
// End - createBoard Function and Event -------------------
//-----------------------------------------------------------


//-----------------------------------------------------------
// START - turnCounter Function and Event -------------------
//-----------------------------------------------------------
const turnCounter = function () {
  turnCount++
  console.log(turnCount)
}

$('.box').click(turnCounter)

//-----------------------------------------------------------
// End - turnCounter Function and Event -------------------
//-----------------------------------------------------------


//-----------------------------------------------------------
// START - addClass Function and Event -------------------
//-----------------------------------------------------------
const addClass = function () {
  if (playerTurn === 'x') {
    $(this).addClass('symX')
  } else {
    $(this).addClass('symO')
  }
}
$('.box').click(addClass)

//-----------------------------------------------------------
// End - addClass Function and Event -------------------
//-----------------------------------------------------------


//-----------------------------------------------------------
// START - playerToggle Function and Event -------------------
//-----------------------------------------------------------
const playerToggle = function() {
  if (playerTurn === "x") {
    playerTurn = "o"
    console.log(playerTurn)
  } else {
    playerTurn = "x"
    console.log(playerTurn)
  }
}

$('.box').click(playerToggle)

//-----------------------------------------------------------
// End - playerToggle Function and Event -------------------
//-----------------------------------------------------------

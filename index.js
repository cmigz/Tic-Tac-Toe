'use strict'
// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js')

// styles
require('./assets/styles/index.scss')

console.log('functional')

// ========================================================
// TODO
// - Alter add Class function to incorporate turn Count
//  - Tried, WAI but clicks still add to turn count??
// ========================================================
// -----------------------------------------------------------
// START - Game Variables -------------------
// -----------------------------------------------------------

let turnCount = 0
console.log(turnCount)
let winner = '' // Options in checkForWin = playerX, playerO, Draw
let playerTurn = 'x'
let xWinCount = 0
let oWinCount = 0
// -----------------------------------------------------------
// END - Game Variables -------------------
// -----------------------------------------------------------

// -----------------------------------------------------------
// START - createBoard Function and Event -------------------
// -----------------------------------------------------------
const createBoard = function () {
  $('#signUp').hide()
  $('.gameBoard').removeClass('hidden')
}

$('#hideButton').click(createBoard)

// -----------------------------------------------------------
// End - createBoard Function and Event -------------------
// -----------------------------------------------------------

// -----------------------------------------------------------
// START - turnCounter Function and Event -------------------
// -----------------------------------------------------------
const turnCounter = function () {
  turnCount++
  console.log(turnCount)
}

$('.box').click(turnCounter)

// -----------------------------------------------------------
// End - turnCounter Function and Event -------------------
// -----------------------------------------------------------

// -----------------------------------------------------------
// START - addClass Function and Event -------------------
// -----------------------------------------------------------
const addClass = function () {
  if (playerTurn === 'x') {
    if ($(this).hasClass('symO')) {
    } else {
      $(this).addClass('symX')
    }
  } else {
    if ($(this).hasClass('symX')) {
    } else {
      $(this).addClass('symO')
    }
  }
}

$('.box').click(addClass)

// -----------------------------------------------------------
// End - addClass Function and Event -------------------
// -----------------------------------------------------------

// -----------------------------------------------------------
// START - playerToggle Function and Event -------------------
// -----------------------------------------------------------
const playerToggle = function () {
  if (playerTurn === 'x') {
    playerTurn = 'o'
    console.log(playerTurn)
  } else {
    playerTurn = 'x'
    console.log(playerTurn)
  }
}

$('.box').click(playerToggle)

// -----------------------------------------------------------
// End - playerToggle Function and Event -------------------
// -----------------------------------------------------------

// -----------------------------------------------------------
// START - checkForWin Function and Event -------------------
// - Also adds to Win Count @ end of game for winning sym
// -----------------------------------------------------------
const checkForWin = function () {
  if (turnCount <= 8) {
    if (
      $('#A1').hasClass('symX') &&
      $('#A2').hasClass('symX') &&
      $('#A3').hasClass('symX') ||
      $('#B1').hasClass('symX') &&
      $('#B2').hasClass('symX') &&
      $('#B3').hasClass('symX') ||
      $('#C1').hasClass('symX') &&
      $('#C2').hasClass('symX') &&
      $('#C3').hasClass('symX') ||
      $('#A1').hasClass('symX') &&
      $('#B1').hasClass('symX') &&
      $('#C1').hasClass('symX') ||
      $('#A2').hasClass('symX') &&
      $('#B2').hasClass('symX') &&
      $('#C2').hasClass('symX') ||
      $('#A3').hasClass('symX') &&
      $('#B3').hasClass('symX') &&
      $('#C3').hasClass('symX') ||
      $('#A1').hasClass('symX') &&
      $('#B2').hasClass('symX') &&
      $('#C3').hasClass('symX') ||
      $('#A3').hasClass('symX') &&
      $('#B2').hasClass('symX') &&
      $('#C1').hasClass('symX')
    ) {
      winner = 'playerX'
      console.log(winner + ' has won the game')
      xWinCount++
      console.log('X has won ' + xWinCount + ' games')
    } else if (
      $('#A1').hasClass('symO') &&
      $('#A2').hasClass('symO') &&
      $('#A3').hasClass('symO') ||
      $('#B1').hasClass('symO') &&
      $('#B2').hasClass('symO') &&
      $('#B3').hasClass('symO') ||
      $('#C1').hasClass('symO') &&
      $('#C2').hasClass('symO') &&
      $('#C3').hasClass('symO') ||
      $('#A1').hasClass('symO') &&
      $('#B1').hasClass('symO') &&
      $('#C1').hasClass('symO') ||
      $('#A2').hasClass('symO') &&
      $('#B2').hasClass('symO') &&
      $('#C2').hasClass('symO') ||
      $('#A3').hasClass('symO') &&
      $('#B3').hasClass('symO') &&
      $('#C3').hasClass('symO') ||
      $('#A1').hasClass('symO') &&
      $('#B2').hasClass('symO') &&
      $('#C3').hasClass('symO') ||
      $('#A3').hasClass('symO') &&
      $('#B2').hasClass('symO') &&
      $('#C1').hasClass('symO')
    ) {
      winner = 'playerO'
      console.log(winner + ' has won the game')
      oWinCount++
      console.log('O has won ' + oWinCount + ' games')
    }
  } else if (turnCount > 8) {
    winner = 'draw'
    console.log(winner)
  }
}
$('.box').click(checkForWin)

// -----------------------------------------------------------
// End - checkForWin Function and Event -------------------
// -----------------------------------------------------------

// -----------------------------------------------------------
// START - gameReset Function and Event -------------------
// -----------------------------------------------------------
const gameReset = function () {
  $('#A1').removeClass('symX symO')
  $('#A2').removeClass('symX symO')
  $('#A3').removeClass('symX symO')
  $('#B1').removeClass('symX symO')
  $('#B2').removeClass('symX symO')
  $('#B3').removeClass('symX symO')
  $('#C1').removeClass('symX symO')
  $('#C2').removeClass('symX symO')
  $('#C3').removeClass('symX symO')
  winner = ' '
  turnCount = 0
  playerTurn = 'x'
}

$('#reset').click(gameReset)
// -----------------------------------------------------------
// End - gameReset Function and Event -------------------
// -----------------------------------------------------------

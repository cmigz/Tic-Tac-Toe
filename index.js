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
  $('.gameBoard').removeClass('hidden')
  $('#reset').removeClass('hidden')
}

$('#play').click(createBoard)

// -----------------------------------------------------------
// End - createBoard Function and Event -------------------
// -----------------------------------------------------------

// -----------------------------------------------------------
// START - addClass Function and Event -------------------
// Will decide if it already has had a move made
// If not it will add the class based on the curent player
// Built in: turnCounter and playerToggle
// -----------------------------------------------------------
const addClass = function () {
  if (playerTurn === 'x') {
    if ($(this).hasClass('symO')) {
    } else {
      if ($(this).hasClass('symX')) {
      } else {
        $(this).addClass('symX')
        turnCount++
        console.log(turnCount)
        playerTurn = 'o'
        console.log(playerTurn)
      }
    }
  } else {
    if ($(this).hasClass('symX')) {
    } else {
      if($(this).hasClass('symO')) {
      } else {
        $(this).addClass('symO')
        turnCount++
        console.log(turnCount)
        playerTurn = 'x'
        console.log(playerTurn)
      }
    }
  }
}

$('.box').click(addClass)

// -----------------------------------------------------------
// End - addClass Function and Event -------------------
// -----------------------------------------------------------

// -----------------------------------------------------------
// START - checkForWin Function and Event -------------------
// - Also adds to Win Count @ end of game for winning sym
// -----------------------------------------------------------

const checkForWin = function () {
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
    $('.gameBoard').addClass('hidden')
    $('#xWins').removeClass('hidden')
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
    $('.gameBoard').addClass('hidden')
    $('#oWins').removeClass('hidden')
  } else if (turnCount === 9) {
    console.log('draw')
    $('.gameBoard').addClass('hidden')
    $('#resultDraw').removeClass('hidden')
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
  $('.gameBoard').removeClass('hidden')
}

$('#reset').click(gameReset)
// -----------------------------------------------------------
// End - gameReset Function and Event -------------------
// -----------------------------------------------------------

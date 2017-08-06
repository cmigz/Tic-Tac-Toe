# Tic-Tac-Toe
# By: Christian Mignacca

# Introduction

Welcome to my Tic-Tac-Toe game.  This project is a means of showing the skills developed through just about three weeks of GA's Web Development Immersive Program.

This project uses a custom built game engine to play the class game Tic-Tac-Toe.  Using several technologies this game will allow users to play local 1 vs 1 games of Tic-Tac-Toe and login so they can keep track or their games and wins.

## Final Submission Link

GitHub Pages Deployed Project: https://cmigz.github.io/Tic-Tac-Toe/

## Technologies Used

HTML:
  - Used to build structure of game
  - Used semantic tags to organize content on page
  - Utilized forms to pass data to backend server

CSS:
  - Styled background and game board
  - Used classes to represent a players move
  - Utilized hidden property to show and remove certain elements as neccessary
  - Floated columns of board to create gameboard

JavaScript:
  - Used let to define varibales that would change throughout the progress of the game.
  - Created several functions which manipulate aformentioned variables as a means of progressing through game.
  - Used addClass method to represent each players respective move on the game board.
  - Created function to reset the game by removing and classes added and setting all game variables back to their original state.
  - Utilized console.log to track functionality as each was Built

jQuery:
  - Used event handlers to call on functions of the game's logic
  - Event handlers also used to show and hide certain elements based on point in the game.

AJAX:
  - Created ajax objects to allows all API interaction to happen on a single page so to prevent any page reloading.
  - Used curl requests to test ajax functionality

## Planning Process

V1 - <http://imgur.com/TZlLw25>

Final Version:

1.) Set up Repository:
  - Update README.md, remove current contents, set up to be worked on throughout project.
  - Push to GH account to start good Version Control throughout project.

2.) Structure Landing:
  - Create barebones landing page, to have something to work off of.
  - Set up miminum CSS
    - Ie. Gameboard to use as reference

3.) Create Game Logic:
  - Using JavaScript write out game functionality.
    - Starting with defining variables, functions to be used throughout the game, and logic to determine winner of game.
  - Test each function in node to ensure they work as intended.

4.) Use jQuery to Call Upon Game Logic
  - Using jQuery event handlers to enact functions when appropriate throughout the game.

5.) Establish Connection with API
  - Set up ui/events/api so that the front end can communicate with the backend server.
  - Establish sign up / in / out / change password functions as intended.
  - Figure out how to track game progress for logged in user.

6.) Debug / Verify Each Branch
  - Ensure each feature within their own branch works as intended

7.) Merge branches with Master and Deploy
  - Deploy site to gitHub Pages

8.) Check to make sure all requirements met

9.) Revisit all steps to ensure all requirements are met
  - Re-Deploy Final Version

## Issue Que

[] CSS broken on smaller screens
[] Need to figure out how to exhange game status with API
[] Alter CSS so game looks better
[] Site is not as responsive as much as I'd like at the moment

## Unsolved Issues

TODO Collect issues at end of process

## WireFrames

Game Wireframe: <http://imgur.com/w3Itm4b>

Logic Wireframe Part 1: <http://imgur.com/q6AY1Zd>
Logic Wireframe Part 2: <http://imgur.com/oh6qGnz>

Final Requirement Checklist: <http://imgur.com/OCh5G2d>

## User Stories

- As a user, I would like to be able to restart the game at any
  point.
- As a user, I would like to have non-traditional pieces other
  then Xs and Os
- As a user, I would like to see a win count.
- As a user, I would like to game to be smooth and easy to see.
- As a user, I would be curious why I need to login to play
  tic-tac-toe
- As a user, I would like to see a fun message when a winner
  is declared or stalement reached.
- As a user, I would like to be able to change the boards
  color schemes.

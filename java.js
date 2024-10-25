
let board = ['','','','','','','','',''];

let currentPlayer = 'X';


let player1Wins = 0;
let player2Wins = 0;
let ties = 0;


let gameOver = false;


let winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
];

let cells = document.getElementsByClassName('cell');


let player1WinsDisplay = document.getElementById('player1Wins');
let player2WinsDisplay = document.getElementById('player2Wins');
let tiesDisplay = document.getElementById('ties');
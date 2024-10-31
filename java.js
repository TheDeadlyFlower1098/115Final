// Initialize the game board with empty values for each cell
let board = ['', '', '', '', '', '', '', '', ''];

// Set the current player to 'X', representing the first player
let currentPlayer = 'X';

// Initialize win counters for both players and the number of ties
let player1Wins = 0;
let player2Wins = 0;
let ties = 0;

// Flag to indicate if the game is over
let gameOver = false;

// Define all possible winning combinations
let winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
];

// Get all the cell elements from the document
let cells = document.getElementsByClassName('cell');

// Get the elements to display player wins and ties from the document
let player1WinsDisplay = document.getElementById('player1Wins');
let player2WinsDisplay = document.getElementById('player2Wins');
let tiesDisplay = document.getElementById('ties');

// Set up click event listeners for each cell
for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = function() {
        handleCellClick(this); // Call the function to handle the cell click
    };
}

// Handle a cell click event
function handleCellClick(cell) {
    let index = Array.prototype.indexOf.call(cells, cell);

    // If the cell is already filled or the game is over, exit the function
    if (board[index] !== '' || gameOver) {
        return;
    }

    // Update the board state and display the current player's symbol
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    // Check if the current player has won the game
    if (checkWinner()) {
        updateScoreboard(currentPlayer === 'X' ? 'Player 1' : 'Player 2');
    } 
    // If the board is full and there's no winner, it's a tie
    else if (isBoardFull()) {
        ties++;
        tiesDisplay.textContent = ties;
        gameOver = true; // Mark the game as over
    } 
    // Switch to the other player if the game continues
    else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// Check if there is a winning combination on the board
function checkWinner() {
    for (let i = 0; i < winningCombinations.length; i++) {
        let [a, b, c] = winningCombinations[i];
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            gameOver = true; // Mark the game as over
            return true; // Return true to indicate a win
        }
    }
    return false; // Return false if no winning combination is found
}

// Check if all cells on the board are filled
function isBoardFull() {
    return board.every(cell => cell !== ''); // Return true if all cells are filled
}

// Update the scoreboard based on the winner
function updateScoreboard(winner) {
    if (winner === 'Player 1') {
        player1Wins++;
        player1WinsDisplay.textContent = player1Wins; // Update player 1's win count
    } else {
        player2Wins++;
        player2WinsDisplay.textContent = player2Wins; // Update player 2's win count
    }
    gameOver = true; // Mark the game as over
}

// Reset the game
function resetGame() {
    board.fill(''); // Reset the board
    gameOver = false; // Mark the game as ongoing
    currentPlayer = 'X'; // Reset to Player 1
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = ''; // Clear the displayed symbols
    }
}

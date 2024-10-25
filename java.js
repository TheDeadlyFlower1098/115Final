// Initialize the game board with empty values for each cell
let board = ['','','','','','','','',''];

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
/*onclick is an event listener that 'listens' for the user to click a cell. 
When it is clicked it calls handleCellClick(), passing the clicked cell as the argument */
for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = function() {
        handleCellClick(this); // Call the function to handle the cell click
    };
}

// Handle a cell click event
function handleCellClick(cell) {
    // Find the index of the clicked cell in the board array
    let index = -1;
    for (let i = 0; i < cells.length; i++) {
        if (cells[i] === cell) {
            index = i;
            break;
        }
    }

    // If the cell is already filled or the game is over, exit the function
    if (board[index] !== '' || gameOver) {
        return;
    }

    // Update the board state and display the current player's symbol
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Reset the game to its initial state
function resetGame() {
    // Clear the board and cell displays
    for (let i = 0; i < board.length; i++) {
        board[i] = '';
        cells[i].textContent = '';
    }
    currentPlayer = 'X'; // Reset to player 'X' as the first player
    gameOver = false; // Reset the game over flag
}

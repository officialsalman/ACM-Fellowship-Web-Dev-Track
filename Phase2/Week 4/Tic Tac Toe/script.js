const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

function makeMove(cellIndex) {
    if (!cells[cellIndex].textContent) {
        cells[cellIndex].textContent = currentPlayer;
        cells[cellIndex].classList.add(currentPlayer);
        
        if (checkWin()) {
            alert(currentPlayer + ' wins!');
            resetBoard();
            return;
        }
        
        if (checkDraw()) {
            alert("It's a draw!");
            resetBoard();
            return;
        }
        
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const combo of winningCombinations) {
        if (cells[combo[0]].textContent &&
            cells[combo[0]].textContent === cells[combo[1]].textContent &&
            cells[combo[0]].textContent === cells[combo[2]].textContent) {
            return true;
        }
    }

    return false;
}

function checkDraw() {
    return Array.from(cells).every(cell => cell.textContent !== '');
}

function resetBoard() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });
    currentPlayer = 'X';
}

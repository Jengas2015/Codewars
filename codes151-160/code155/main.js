/* According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

Example 1:


Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
Example 2:


Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]
 

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 25
board[i][j] is 0 or 1.
 

Follow up:

Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?
  */

function gameOfLife(board) {
    // loop through the board
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            // call the helper function to check the neighbors
            checkNeighbors(board, row, col);
        }
    }
    // loop through the board again to update the values
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === -1) {
                board[row][col] = 0;
            } else if (board[row][col] === 2) {
                board[row][col] = 1;
            }
        }
    }
}

// helper function to check the neighbors
function checkNeighbors(board, row, col) {
    // create a variable to hold the count of live neighbors
    let liveNeighbors = 0;
    // create a variable to hold the directions
    let directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];
    // loop through the directions
    for (let i = 0; i < directions.length; i++) {
        // create a variable to hold the current direction
        let currentDirection = directions[i];
        // create a variable to hold the current row
        let currentRow = row + currentDirection[0];
        // create a variable to hold the current col
        let currentCol = col + currentDirection[1];
        // check if the current row is greater than or equal to 0 and less than the length of the board
        // and if the current col is greater than or equal to 0 and less than the length of the board
        // and if the current row and col is equal to 1 or -1
        if (
            currentRow >= 0 &&
            currentRow < board.length &&
            currentCol >= 0 &&
            currentCol < board[0].length &&
            (board[currentRow][currentCol] === 1 || board[currentRow][currentCol] === -1)
        ) {
            // increment the liveNeighbors
            liveNeighbors++;
        }
    }
    // check if the current board is equal to 1
    if (board[row][col] === 1) {
        // check if the liveNeighbors is less than 2 or greater than 3
        if (liveNeighbors < 2 || liveNeighbors > 3) {
            // set the board to -1
            board[row][col] = -1;
        }
    } else {
        // check if the liveNeighbors is equal to 3
        if (liveNeighbors === 3) {
            // set the board to 2
            board[row][col] = 2;
        }
    }
}



// console log of examples
console.log(gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]])) // [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
console.log(gameOfLife([[1, 1], [1, 0]])) // [[1,1],[1,1]]

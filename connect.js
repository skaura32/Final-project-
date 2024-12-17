let board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let win = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11], [12, 13, 14], [15, 16, 17], [0, 3, 6], [9, 12, 15], [1, 4, 7], [10, 13, 16], [2, 5, 8], [11, 14, 17], [0, 4, 8], [3, 7, 11], [6, 10, 14], [9, 13, 17],[11,13,15],[7,10,13]];

let gameOver=false;
let turn=0;

function checkWin(val) {
    for(let rwin of win)
    {
        if(board[rwin[0]]==val&&board[rwin[1]]==val&&board[rwin[2]]==val){
            return true;
        }
    }
    return false;
}

let divCells = document.getElementsByClassName("Cell");
for(let cell of divCells){
    cell.onclick=keepSymbol;
}

function keepSymbol(){
    if (gameOver) return;
    const col = Number(this.title) % 3;
    const columnCells = getColumnCells(col);
    const lowestAvailableRow = getLowestAvailableRow(columnCells);

    if (lowestAvailableRow === null) return;

    const targetCell = columnCells[lowestAvailableRow];
    const playerValue = turn % 2 === 0 ? 1 : 2;
    const symbol = playerValue === 1 ? "url('X.jpg')" : "url('O.jpg')";

    board[Number(targetCell.title)] = playerValue;
    targetCell.style.backgroundImage = symbol;

    if (checkWin(playerValue)) {
    gameOver = true;
    setTimeout(function(){restartGame(playerValue); }, 1000);
    return;
    }

    turn++;
      
    if (turn === 18 && !checkWin(1) && !checkWin(2)) {
        gameOver = true;
        setTimeout(function(){restartGame(0); }, 1000);
    }
}

function getColumnCells(col) {
    let columnCells = [];
    for (let i = col; i < divCells.length; i = i+3) {
        columnCells.push(divCells[i]);
    }
      return columnCells;
    }

    function getLowestAvailableRow(columnCells) {
        for (let i = columnCells.length - 1; i >= 0; i--) {
            if (board[Number(columnCells[i].title)] === 0) return i;
        }

        return null;
    }

    function restartGame(winner)
    {
        document.getElementById('Board').style.display="none";
        document.getElementById('GameOver').style.display="block";
        if(winner==1)
            {
                document.getElementById('txtGameOver').innerHTML="Congratulations! Player 1 (X) Wins!";
            }

            else if(winner==2)
                {
                    document.getElementById('txtGameOver').innerHTML="Congratulations! Player 2 (O) Wins!";
                }

                else{
                    document.getElementById('txtGameOver').innerHTML="It was a draw!";
                }
            }  

            document.getElementById('restart').onclick=reloadGame;

            function reloadGame(){
                location.reload();
}

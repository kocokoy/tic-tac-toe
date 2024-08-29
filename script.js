let cell = document.querySelectorAll('.cell');
let board = Array(9).fill(null);
let playerTurns = 'X';

startGame(); 

function startGame(){
  cell.forEach((cell,i) =>{
    cell.addEventListener('click',() => {
      if(board[i] === null){

        cell.innerHTML = playerTurns;
        board[i] = playerTurns

        const winner = checkWinner(board);
        

        if(winner){
          alert(`${winner} Wins`);
          resetGame();

        }

        if(checkDraw(board)){
          alert(`Draw`);
          resetGame();
        }

        playerTurns = playerTurns === 'X' ? 'O' : 'X';
      }
    })
  })
}

function checkWinner(checkPattern){
  const winMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

    for (let i = 0; i < winMoves.length; i++) {
      const [a, b, c] = winMoves[i]; 
      if (checkPattern[a] && checkPattern[a] === checkPattern[b] && checkPattern[a] === checkPattern[c]) {
        return checkPattern[a]; 
      }
    }
      return null; 
}

function checkDraw(board){

return board.every(cell => cell !== null);

}

function resetGame(){
    board = Array(9).fill(null);
    playerTurns = '';
    cell.forEach(cell => cell.innerHTML = '')
    console.log(board);
    console.log(playerTurns);

  
}

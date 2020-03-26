var numRookCaptures = function(board) {
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let count = 0;
  let x = y = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 'R') {
        x = i;
        y = j;
        break;
      }
    }
  }
  for (let i = 0; i < 4; i++) {
    for (let j = 1; ; j++) {
      let Movex = x + j * dx[i];
      let Movey = y + j * dy[i];
      console.log(dx[i])
      if (Movex >= 8 || Movex < 0 || Movey >= 8 || Movey < 0 || board[Movex][Movey] === 'B') {
        break;
      }
      if (board[Movex][Movey] === 'p') {
        count++;
        break;
      }
    }
  }
  return count
};
console.log(numRookCaptures([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]))
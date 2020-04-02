var gameOfLife = function(board) {
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, -1, -1, -1, 0, 1, 1, 1];
    let Copyboard = board.map(ary => {
      return [...ary]
    })
    for (let i = 0; i < Copyboard.length; i++) {
      for (let j = 0; j < Copyboard[i].length; j++) {
        let live = 0;
        for (let index = 0; index < 8; index++) {
          let x = dx[index] + i;
          let y = dy[index] + j;
          if (x < 0 || y < 0 || x >= Copyboard.length || y >= Copyboard[i].length) {
            continue;
          }
          live += Copyboard[x][y] ? 1 : 0
        }
        if (live < 2 || live > 3) {
          board[i][j] = 0
        } else if (live <= 3 && Copyboard[i][j]) {
          board[i][j] = 1;
        } else if (live === 3 && !Copyboard[i][j]) {
          board[i][j] = 1
        }
      }
    }
};



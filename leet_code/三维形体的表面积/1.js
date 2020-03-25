var surfaceArea = function(grid) {
    let count = 0;
    let w = grid.length;
    let h = grid[0].length;
    for (let i = 0; i < w; i++) {//横向坐标遍历
      for (let j = 0; j < h; j++) {//纵向坐标遍历
        let temp = grid[i][j]
        if (temp > 0) {
          count += 2 + temp*4
        }
        if (i < w -1 && grid[i+1][j] > 0) count -= Math.min(temp, grid[i+1][j])
        if (j < h -1 && grid[i][j+1] > 0) count -= Math.min(temp, grid[i][j+1])
        if (i > 0 && grid[i-1][j] > 0) count -= Math.min(temp, grid[i-1][j])
        if (j > 0 && grid[i][j-1] > 0) count -= Math.min(temp, grid[i][j-1])
      }
    }
    return count
};
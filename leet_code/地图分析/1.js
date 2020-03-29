var maxDistance = function(grid) {
  let len = 0;
  let land = [];
  let ocean = [];
  let max = -1;
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        land.push([i, j])
      } else {
        ocean.push([i, j])
      }
    }
  }
  if (land.length === 0 || ocean.length === 0) {
    return -1;
  }
  for (let i = 0; i < ocean.length; i++) {
    let min = 999;
    for (let j = 0; j < land.length; j++) {
      len = distance(ocean[i], land[j])
      if (len < min) {
        min = len
      }
      if (min === 1) {
        break;
      }
    }
    if (min > max) {
      max = min
    }
  }
  return max
};
function distance(a, b) {
  return Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1])
}
console.log(maxDistance([[1,0,1],[0,0,0],[1,0,1]]))
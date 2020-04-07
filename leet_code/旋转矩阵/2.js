var rotate = function(matrix) {
  let m = matrix.length
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length/2; j++) {
      [matrix[i][j], matrix[i][m-j-1]] = [matrix[i][m-j-1], matrix[i][j]]
    }
  }
  return matrix
};

console.log(rotate(matrix = 
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]))
var rotate = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  matrix.forEach(array => array.reverse())
  return matrix
};
console.log(rotate(matrix = 
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]))
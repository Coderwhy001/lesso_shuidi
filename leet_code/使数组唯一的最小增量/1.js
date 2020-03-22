var minIncrementForUnique = function(A) {
  A.sort((a,b) => a-b)
  let count = 0;
  let res = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= A[i-1]) {
      count = A[i-1] - A[i] + 1;
      A[i] += count;
      res += count
    }
  }
  return res;
};
console.log(minIncrementForUnique([3,2,1,2,1,7]))
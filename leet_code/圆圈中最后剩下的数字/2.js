var lastRemaining = function (n, m) {
  return recur(n, m)
};

function recur (n, m) {
  if (n === 1) return 0
  let result = recur(n - 1, m)
  return (m + result) % n
}
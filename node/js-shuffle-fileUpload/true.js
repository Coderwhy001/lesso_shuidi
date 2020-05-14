let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function shuffle (arr) {
  let len = arr.length
  for (let i = len - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
  }
  return arr
}
let t = 10000;
for (let i = 0; i < t; i ++) {
  let sorted = shuffle(arr.slice(0));
  sorted.forEach((num, i) => {
    sum[i] = num + sum[i];
  });
}
console.log(sum.map(n => n / t));  
// console.log(shuffle(arr))
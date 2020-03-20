// var getLeastNumbers = function(arr, k) {
//   let out = [];
//   arr.sort((a,b) => a-b);
//   for(let i = 0; i < arr.length; i++) {
//     if (i < k) {
//       out.push(arr[i])
//     } 
//   }
//   return out
// };

var getLeastNumbers = function(arr, k) {
  arr.sort((a,b) => a-b);
  return arr.splice(0,k)
};
console.log(getLeastNumbers([0,1,2,1], 1))
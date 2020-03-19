var longestPalindrome = function(s) {
  let charMap = new Map();
  let count = 0;
  let center = 0;
  for (let char of s) {
    charMap.set(char,(charMap.has(char) ? charMap.get(char) + 1 : 1))
  }
  for ([k,v] of charMap) {
    if (v % 2 === 0) {
      count += v
    } else {
      count += v-1
      center = 1
    }
  }
  return count + center
};
console.log(longestPalindrome("abccccdd"))
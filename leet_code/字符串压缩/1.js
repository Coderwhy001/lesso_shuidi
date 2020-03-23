var compressString = function(S) {
  let count = 1;
  let str = "";
  let ch = S[0];
  for (let i = 0; i < S.length; i++) {
    if (ch === S[i+1]) {
      count++;
    } else {
      str += ch + count;
      ch = S[i+1];
      count = 1;
    }
  }
  return str.length >= S.length ? S : str;
};
console.log(compressString("aabcccccaaa"))

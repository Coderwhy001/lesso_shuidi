var minimumLengthEncoding = function(words) {
  let str = "";
  words.sort((a,b) => b.length - a.length)
  words.forEach((val, index) => {
    if (index === 0) {
      str += val + '#';
    } else {
      if (str.indexOf(val + '#') === -1) {
        str += val + '#'
      }
    }
  })
  return str.length 
};
console.log(minimumLengthEncoding(["time", "me"]))
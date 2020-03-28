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


// var minimumLengthEncoding = function(words) {
//   let strs = ''
//   words.sort((val1, val2) => val1.length < val2.length)
//   words.forEach(( val, index) => {
//     if (index === 0) {
//       strs += val
//       // console.log(strs)
//     } else {
//       let copyStrs = strs
//       let oldIncludesIndex = strs.indexOf(val)
//       while (oldIncludesIndex > -1) {
//         if (copyStrs[oldIncludesIndex + val.length] === '#' || oldIncludesIndex + val.length === copyStrs.length) {
//           oldIncludesIndex = -2
//         } else {
//           copyStrs = copyStrs.slice(oldIncludesIndex + 1)
//           oldIncludesIndex = copyStrs.indexOf(val)
//         }
//       }
//       if (oldIncludesIndex === -1) {
//         strs += '#' + val
//       }
//     }
//   })
//   strs += '#'
//   return strs.length
// };
// console.log(minimumLengthEncoding(["time", "me", "bell"]))